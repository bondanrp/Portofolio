import { h } from "preact";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faCss3,
  faHtml5,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import undraw from "./undraw2.svg";

const Skills = props => {
  return (
    <div
      class={
        props.darkMode ? [style.skills, style.dark].join(" ") : style.skills
      }
    >
      <div>
        <h1>
          <span>S</span>
          <span>K</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
        </h1>
        <p>
          <div>
            <ol>
              <li>
                <span>1.</span>
                <p>
                  My top skills consist of front-end web development. I mainly
                  use <span>JavaScript</span>, <span>HTML5</span>,{" "}
                  <span>CSS</span> to develop a small to medium website with{" "}
                  <span>React JS</span>. I'm still keen on learning more as I
                  grow.
                </p>
              </li>
              <li>
                <span>2.</span>
                <p>
                  I also have an experience in full-stack web development using{" "}
                  <span>Express JS</span>, <span>Node JS</span>,{" "}
                  <span>MySQL</span> and <span>NoSQL</span> databases for the
                  back-end.
                </p>
              </li>
              <li>
                <span>3.</span>
                <p>
                  In addition to web development, I have general knowledge in
                  mobile app development using <span>React Native</span> and{" "}
                  <span>Expo</span>.
                </p>
              </li>
            </ol>
          </div>
        </p>
        <div class={style.icons}>
          <FontAwesomeIcon icon={faJsSquare} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
      <div>
        <img src={undraw} alt="image" />
      </div>
    </div>
  );
};
export default Skills;
