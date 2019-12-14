import { h } from "preact";
import style from "./style";
import foto from "./foto.jpg";

const About = props => {
  return (
    <div
      class={props.darkMode ? [style.about, style.dark].join(" ") : style.about}
    >
      <div>
        <img src={foto} />
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
      <div>
        <h1>
          About <span>Me</span>
        </h1>
        <p>
          Finance graduate with a <em>passion</em> for programming.
          <br />
          <br />
          Formerly a self-taught JavaScript coder and went on to Purwadhika
          Startup and Coding School to further improve on my web development
          skill. Aspires to be a hard-working web developer that would create
          intricate solution to a problem within the least amount of time.
          Passionate in learning more about programming other than web
          development.
          <br />
          <br />
          Moreover, I am looking forward take my first step in working in a
          professional work environment to further improve my skills and
          knowledge.
        </p>
      </div>
    </div>
  );
};
export default About;
