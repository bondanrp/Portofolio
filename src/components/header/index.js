import { h, Component } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actions } from "../unistore/store-and-actions";
import { connect } from "unistore/preact";
import {
  faHome,
  faUser,
  faCog,
  faEye,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {
    sidebar: true,
    navIcon: 0
  };
  setSidebar = input => {
    this.setState({ sidebar: input });
  };
  setNavIcon = input => {
    this.setState({ navIcon: input });
  };

  render({ darkMode, onOff }) {
    return (
      <header
        class={
          darkMode
            ? sidebar
              ? [style.header, style.dark].join(" ")
              : [style.hidden, style.dark].join(" ")
            : sidebar
            ? style.header
            : style.hidden
        }
      >
        <button
          class={darkMode ? style.dark : null}
          onClick={() => {
            sidebar ? this.setSidebar(false) : this.setSidebar(true);
          }}
        >
          <h1>B R P</h1>
        </button>
        <div></div>
        <div>
          <button
            for="home"
            onMouseOver={() => {
              this.setNavIcon(1);
            }}
            onMouseOut={() => {
              this.setNavIcon(0);
            }}
            onClick={() => {
              this.props.changeSelection(0);
              this.setSidebar(true);
            }}
          >
            {this.state.navIcon == 1 ? (
              <p>Home</p>
            ) : (
              <FontAwesomeIcon icon={faHome} />
            )}
          </button>

          <button
            for="about"
            onMouseOver={() => {
              this.setNavIcon(2);
            }}
            onMouseOut={() => {
              this.setNavIcon(0);
            }}
            onClick={() => {
              this.props.changeSelection(1);
              this.setSidebar(true);
            }}
          >
            {this.state.navIcon == 2 ? (
              <p>About</p>
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </button>

          <button
            for="skills"
            onMouseOver={() => {
              this.setNavIcon(3);
            }}
            onMouseOut={() => {
              this.setNavIcon(0);
            }}
            onClick={() => {
              this.props.changeSelection(2);
              this.setSidebar(true);
            }}
          >
            {this.state.navIcon == 3 ? (
              <p>Skills</p>
            ) : (
              <FontAwesomeIcon icon={faCog} />
            )}
          </button>

          <button
            for="experience"
            onMouseOver={() => {
              this.setNavIcon(4);
            }}
            onMouseOut={() => {
              this.setNavIcon(0);
            }}
            onClick={() => {
              this.props.changeSelection(3);
              this.setSidebar(true);
            }}
          >
            {this.state.navIcon == 4 ? (
              <p>Experience</p>
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>

          <button
            for="contact"
            onMouseOver={() => {
              this.setNavIcon(5);
            }}
            onMouseOut={() => {
              this.setNavIcon(0);
            }}
            onClick={() => {
              this.props.changeSelection(4);
              this.setSidebar(true);
            }}
          >
            {this.state.navIcon == 5 ? (
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
                onOff();
              }}
            />
            <span class={[style.slider, style.round].join(" ")}></span>
          </label>
          <div class={style.warning}>EXPERIMENTAL</div>
        </div>
      </header>
    );
  }
}
export default connect("darkMode", actions)(Header);
