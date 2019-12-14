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
        onClick={() => {
          sidebar ? setSidebar(false) : setSidebar(true);
        }}
      >
        <h1>B R P</h1>
      </button>
      <div>
        <input
          type="radio"
          id="home"
          name="nav"
          onChange={() => {
            props.changeSelection(0);
            setSidebar(true);
          }}
        />
        <label
          for="home"
          onMouseOver={() => {
            setNavIcon(1);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
        >
          {navIcon == 1 ? <p>Home</p> : <FontAwesomeIcon icon={faHome} />}
        </label>
        <input
          type="radio"
          id="about"
          name="nav"
          onChange={() => {
            props.changeSelection(1);
            setSidebar(true);
          }}
        />
        <label
          for="about"
          onMouseOver={() => {
            setNavIcon(2);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
        >
          {navIcon == 2 ? <p>About</p> : <FontAwesomeIcon icon={faUser} />}
        </label>
        <input
          type="radio"
          id="skills"
          name="nav"
          onChange={() => {
            props.changeSelection(2);
            setSidebar(true);
          }}
        />
        <label
          for="skills"
          onMouseOver={() => {
            setNavIcon(3);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
        >
          {navIcon == 3 ? <p>Skills</p> : <FontAwesomeIcon icon={faCog} />}
        </label>
        <input
          type="radio"
          id="experience"
          name="nav"
          onChange={() => {
            props.changeSelection(3);
            setSidebar(true);
          }}
        />
        <label
          for="experience"
          onMouseOver={() => {
            setNavIcon(4);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
        >
          {navIcon == 4 ? <p>Experience</p> : <FontAwesomeIcon icon={faEye} />}
        </label>
        <input
          type="radio"
          id="contact"
          name="nav"
          onChange={() => {
            props.changeSelection(4);
            setSidebar(true);
          }}
        />
        <label
          for="contact"
          onMouseOver={() => {
            setNavIcon(5);
          }}
          onMouseOut={() => {
            setNavIcon(0);
          }}
        >
          {navIcon == 5 ? (
            <p>Contact</p>
          ) : (
            <FontAwesomeIcon icon={faEnvelope} />
          )}
        </label>
      </div>
      <div class={style.switchCon}>
        <span>dark</span>
        <label class={style.switch}>
          <input
            type="checkbox"
            onChange={() => {
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
