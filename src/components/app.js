import { h, Component, createRef } from "preact";
import baseroute from "../baseroute";
import { Provider, connect } from "unistore/preact";
import { store } from "./unistore/store-and-actions";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import About from "../routes/about";
import Skills from "../routes/skills";
import Experience from "../routes/experience";
import Contact from "../routes/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  //refs
  home = createRef();
  about = createRef();
  skills = createRef();
  experience = createRef();
  contact = createRef();

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
      <Provider store={store}>
        <div id="app">
          <Header
            changeSelection={this.changeSelection}
            setDarkMode={this.setDarkMode}
          />
          <div ref={this.home}>
            <Home
              path={`${baseroute}/`}
              changeSelection={this.changeSelection}
            />
          </div>
          <div ref={this.about}>
            <About />
          </div>
          <div ref={this.skills}>
            <Skills />
          </div>
          <div ref={this.experience}>
            <Experience />
          </div>
          <div ref={this.contact}>
            <Contact />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
