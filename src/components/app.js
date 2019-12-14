import { h, Component, createRef } from "preact";
// import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import About from "../routes/about";
import Skills from "../routes/skills";
import Experience from "../routes/experience";
import Contact from "../routes/contact";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      darkMode: false
    };
  }
  //refs
  home = createRef();
  about = createRef();
  skills = createRef();
  experience = createRef();
  contact = createRef();

  setDarkMode = _ => {
    this.state.darkMode
      ? this.setState({ darkMode: false })
      : this.setState({ darkMode: true });
  };
  changeSelection = index => {
    this.setState({
      selected: index
    });
  };
  componentDidUpdate() {
    this.scrollToSection(this.state.selected);
  }

  scrollToSection = index => {
    let refs = [
      this.home,
      this.about,
      this.skills,
      this.experience,
      this.contact
    ];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };

  render() {
    return (
      <div id="app">
        <Header
          changeSelection={this.changeSelection}
          setDarkMode={this.setDarkMode}
          darkMode={this.state.darkMode}
        />
        <div ref={this.home}>
          <Home
            changeSelection={this.changeSelection}
            darkMode={this.state.darkMode}
          />
        </div>
        <div ref={this.about}>
          <About darkMode={this.state.darkMode} />
        </div>
        <div ref={this.skills}>
          <Skills darkMode={this.state.darkMode} />
        </div>
        <div ref={this.experience}>
          <Experience darkMode={this.state.darkMode} />
        </div>
        <div ref={this.contact}>
          <Contact darkMode={this.state.darkMode} />
        </div>
      </div>
    );
  }
}
