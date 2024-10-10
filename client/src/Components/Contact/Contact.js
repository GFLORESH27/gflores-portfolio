import React, { useState } from "react";
import "../../assets/css/main.css";
import { RiSendPlaneFill } from "react-icons/ri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imgContact from "../../assets/img/contact/contact.jpg"


const Contact = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch("/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    }).then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success("Su correo electrónico ha sido enviado");

          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="resume-title" >
        <h5>Información de contacto</h5>
        <span className="line"></span>
        <div className="container contact-section-global" >
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="contact-form-iamge">
                <img
                  src={imgContact}
                  alt="contact form-img"
                />
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              <div className="contact-form-design">
                <form>
                  <div className="contact-form">
                    <label className="form-lebel">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="contact-form">
                    <label className="form-lebel">Correo</label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="contact-form">
                    {/* <label className="form-lebel">Tipo de trabajo</label> */}
                    <select
                      className="custom-select-tag"
                      value={jobtypes}
                      onChange={(e) => setJobtypes(e.target.value)}
                    >
                      <option value="" selected>Seleccione el tipo de trabajo</option>
                      <option>Jornada completa</option>
                      <option>Tiempo parcial</option>
                      <option>Contrato</option>
                    </select>
                  </div>

                  <div className="contact-form">
                    <label className="form-lebel">Mensaje</label>
                    <textarea
                      rows="4"
                      type="text"
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="button-submit" onClick={sendemailInfo}>
                    <p>
                      Enviar <RiSendPlaneFill size={20} />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ToastContainer draggable autoClose={8000} />
    </div>
  );
};

export default Contact;
