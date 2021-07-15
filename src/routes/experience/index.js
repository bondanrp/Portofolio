import { h } from "preact";
import style from "./style";
import undraw from "./undraw.svg";
import project1 from "./project1.jpg";
import { connect } from "unistore/preact";
import paprika from './paprika.png'
import sribu from './sribu.png'

const Experience = ({ darkMode }) => {
  return (
    <div
      class={
        darkMode ? [style.experience, style.dark].join(" ") : style.experience
      }
    >
      <div>
        <div>
          <img src={undraw} alt="404" />
        </div>
        <div>
          <h1>Hi! This is my work experiences.</h1>
        </div>
      </div>
      <div class={darkMode ? [style.card, style.gray].join(" ") : style.card}>
        <h1>Paprika</h1>
        <h4>(Sep 2020 - Current)</h4>
        <p>
        Sole Front End Developer for Paprika. Tasked with developing and maintaining the main Paprika website and the
dashboard for both Paprika admins and outlets using React as the framework.
        </p>
        <a href={`http://www.paprika.co.id`}>
        <img class={style.paprika} src={paprika}/>
        </a>
        <h1>Sribu</h1>
        <h4>(Mar 2019 - Jul 2019 )</h4>
        <p>
        Tasked to recreate and develop the main Sribulancer website by using a more recent framework, Preact JS, to improve
overall stability and performance. Integrated the back-end GraphQL to front-end architecture. Implemented atomic
design by creating modular components to optimize front-end development workflow.
        </p>
        <a href={`http://www.sribulancer.com`}>
        <img class={style.sribu} src={sribu}/>
        </a>
        {/* <h1>My Project</h1>

        <div class={style.insideText}>
          <h1>BagiBakat</h1>
          <p>
            My first project. A video sharing website for online courses,
            developed for internal use in Purwadhika for my final project.
            <br />
            <br />
            Developed in React JS + Redux and Express JS + MySQL, this website
            is capable of uploading videos, subscriber system, notification
            system, comments, view counting and more!
          </p>
        </div>
        <div class={style.project}>
          <a href="https://github.com/bondanrp/jc10-finalproject">
            <img src={project1} alt="project1" />
            <div class={style.overlay}>
              <h1>View on GitHub</h1>
            </div>
          </a>
        </div> */}
        <h1>Other Experience</h1>
        <p>
          I also have other experience unrelated to web development that helps me
          to be who I am today, you may visit my{" "}
          <a href="https://www.linkedin.com/in/bondanrp/">LinkedIn</a> to check
          out more.
        </p>
      </div>
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M106,-154.9C111.7,-141.8,73,-76.5,90.1,-28.2C107.2,20,180.1,51.1,188.9,72.9C197.7,94.7,142.3,107.2,100.2,120.9C58,134.5,29,149.2,-2.8,153.2C-34.7,157.1,-69.4,150.1,-79.8,126.2C-90.3,102.3,-76.5,61.3,-96.4,25.4C-116.3,-10.6,-169.9,-41.6,-186.8,-82.6C-203.7,-123.7,-183.8,-174.7,-146.6,-177.6C-109.3,-180.5,-54.7,-135.2,-2.3,-132.1C50.2,-129,100.3,-168.1,106,-154.9Z"
            fill="#cbd2d3"
          />
        </g>
      </svg>
    </div>
  );
};
export default connect("darkMode", null)(Experience);
