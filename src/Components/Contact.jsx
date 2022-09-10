import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import style from '../Styles/SimpleForm.module.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkzvrqy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div id="Contacto" className={style.container_form}>
      <h1>
        <span className={style.front_title}>
          ME
          <span style={{ color: "rgb(82, 34, 193)" }}>DI</span>OS DE{" "}
          <span style={{ color: "rgb(82, 34, 193)" }}>CONTACTO</span>
        </span>
        <span className={style.back_title}>CONTACTO</span>
      </h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="email">Mensaje</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm