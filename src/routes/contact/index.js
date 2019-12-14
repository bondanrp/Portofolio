import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style";

const text = "Contact Me!";
const mapText = input => {
  var inputEdited = input.split("");
  let result = inputEdited.map(val => {
    return <span>{val}</span>;
  });
  return result;
};

const Contact = props => {
  const [status, setStatus] = useState("");
  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
  return (
    <div
      class={
        props.darkMode ? [style.contact, style.dark].join(" ") : style.contact
      }
    >
      <div>
        <g>
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300,300)">
              <path
                d="M75.1,-81.1C118.1,-32.1,188,-16,205.4,17.3C222.7,50.7,187.4,101.4,144.4,139.9C101.4,178.4,50.7,204.7,8.1,196.5C-34.4,188.4,-68.8,145.8,-84,107.3C-99.2,68.8,-95.1,34.4,-97.6,-2.5C-100,-39.4,-109.1,-78.7,-93.9,-127.7C-78.7,-176.7,-39.4,-235.4,-11.7,-223.7C16,-212,32.1,-130.1,75.1,-81.1Z"
                fill="#cbd2d3"
              />
            </g>
          </svg>
        </g>
      </div>
      <div></div>
      <div
        class={
          props.darkMode
            ? [style.contactCard, style.gray].join(" ")
            : style.contactCard
        }
      >
        <h1>{mapText(text)}</h1>
        <p>
          I am currently looking a for full-time work experience. If you have
          any questions don't hesistate to contact me via the form below.
        </p>
        <form
          onSubmit={() => {
            setStatus("LOADING");
            submitForm();
          }}
          action="https://formspree.io/xkngldek"
          method="POST"
        >
          <input
            name="name"
            placeholder="Your Name"
            minLength="3"
            required
            type="text"
            class={props.darkMode ? "light" : ""}
          />
          <input
            class={props.darkMode ? "light" : ""}
            name="email"
            type="email"
            required
            placeholder="Email"
          />
          <input
            class={props.darkMode ? "light" : ""}
            name="subject"
            type="text"
            placeholder="Subject"
            required
            minLength="3"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            minLength="10"
            class={props.darkMode ? "light" : ""}
          />
          {status ? (
            <h1 class={style.status}>{status}</h1>
          ) : (
            <input name="send" type="submit" value="SEND" />
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
