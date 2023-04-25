import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useForm } from "react-hook-form";


export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [modalOpen, setModalOpen] = useState(false)
  const [alertText, setAlertText] = useState("")

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    console.log(data);
    setButtonText("Sending...");

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          console.log(json.success);
          setButtonText("Sent");
          setAlertText("**Response Successfully Sent")
          setTimeout(()=> {
            setButtonText("Send");
            setAlertText("")
          },2000)
        } else {
          alert("Not Sent");
        }
      })
      .catch((error) => {
        console.log("Form : ", error);
      });

    reset();
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="hidden"
                          value={import.meta.env.VITE_WEB3FORM_KEY}
                          {...register("access_key")}
                        />
                        <input
                          type="text"
                          placeholder="First Name"
                          {...register("firstName", {
                            required: true,
                            maxLength: 20,
                          })}
                          aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        {errors.firstName?.type === "required" && (
                          <p role="alert">First name is required</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...register("lastName", {
                            required: true,
                            maxLength: 20,
                          })}
                          aria-invalid={errors.lastName ? "true" : "false"}
                        />
                        {errors.firstName?.type === "required" && (
                          <p role="alert">Last name is required</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p role="alert">{errors.email?.message}</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No, with country code"
                          {...register("phone", {
                            required: true,
                            maxLength: 13,
                          })}
                          aria-invalid={errors.phone ? "true" : "false"}
                        />
                        {errors.phone?.type === "required" && (
                          <p role="alert">Please enter number</p>
                        )}
                        {errors.phone?.type === "maxLength" && (
                          <p role="alert">Invalid Number</p>
                        )}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          {...register("message", {
                            required: true,
                            maxLength: 200,
                          })}
                          aria-invalid={errors.phone ? "true" : "false"}
                        ></textarea>
                        {errors.message?.type === "required" && (
                          <p role="alert">Please Enter the message</p>
                        )}
                        {errors.message?.type === "maxLength" && (
                          <p role="alert">Message is too Lengthy</p>
                        )}
                        <button
                          type="submit"
                          onClick={handleSubmit(onSubmitHandler)}
                        >
                          <span>{buttonText}</span>
                        </button>
                        <p style={{color: "yellow", fontSize : "15px", fontWeight: "bold"}} role="alert">{alertText}</p>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
