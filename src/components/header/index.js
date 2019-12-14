import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faEye,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  const [sidebar, setSidebar] = useState(true);
  const [navIcon, setNavIcon] = useState(0);

  return (
    <header
      class={
        props.darkMode
          ? sidebar
            ? [style.header, style.dark].join(" ")
            : [style.hidden, style.dark].join(" ")
          : sidebar
          ? style.header
          : style.hidden
      }
    >
      <button
        class={props.darkMode ? style.dark : null}
        onClick={() => {
          sidebar ? setSidebar(false) : setSidebar(true);
        }}
      >
        <h1>B R P</h1>
      </button>
      <div></div>
      <div>
        <button
          for="home"
          onMouseOver={() => {
            setNavIcon(1);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
          onClick={() => {
            props.changeSelection(0);
            setSidebar(true);
          }}
        >
          {navIcon == 1 ? <p>Home</p> : <FontAwesomeIcon icon={faHome} />}
        </button>

        <button
          for="about"
          onMouseOver={() => {
            setNavIcon(2);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
          onClick={() => {
            props.changeSelection(1);
            setSidebar(true);
          }}
        >
          {navIcon == 2 ? <p>About</p> : <FontAwesomeIcon icon={faUser} />}
        </button>

        <button
          for="skills"
          onMouseOver={() => {
            setNavIcon(3);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
          onClick={() => {
            props.changeSelection(2);
            setSidebar(true);
          }}
        >
          {navIcon == 3 ? <p>Skills</p> : <FontAwesomeIcon icon={faCog} />}
        </button>

        <button
          for="experience"
          onMouseOver={() => {
            setNavIcon(4);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
          onClick={() => {
            props.changeSelection(3);
            setSidebar(true);
          }}
        >
          {navIcon == 4 ? <p>Experience</p> : <FontAwesomeIcon icon={faEye} />}
        </button>

        <button
          for="contact"
          onMouseOver={() => {
            setNavIcon(5);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
          onClick={() => {
            props.changeSelection(4);
            setSidebar(true);
          }}
        >
          {navIcon == 5 ? (
            <p>Contact</p>
          ) : (
            <FontAwesomeIcon icon={faEnvelope} />
          )}
        </button>
      </div>
      <div class={style.switchCon}>
        <span>dark</span>
        <label class={style.switch}>
          <input
            type="checkbox"
            onClick={() => {
              props.setDarkMode();
            }}
          />
          <span class={[style.slider, style.round].join(" ")}></span>
        </label>
        <div class={style.warning}>EXPERIMENTAL</div>
      </div>
    </header>
  );
};

export default Header;
