import { h } from "preact";
import style from "./style";
import undraw from "./illu2.svg";
import { connect } from "unistore/preact";

const text = "Hi there!";
const text2 = "I'm  ";
const mapText = input => {
  var inputEdited = input.split("");
  let result = inputEdited.map(val => {
    return <span>{val}</span>;
  });
  return result;
};

const Home = ({ darkMode }) => {
  return (
    <div class={darkMode ? [style.home, style.dark].join(" ") : style.home}>
      <div>
        <h1>
          {mapText(text)}
          <br />
          {mapText(text2)}
          <div class={style.slidingVertical}>
            <span> Bondan</span>
            <span> Rahadian</span>
            <span> A Developer</span>
          </div>
        </h1>
        <h4>Full-Stack Web Developer</h4> // <h4>Mobile Developer</h4> //{" "}
        <h4>Javascript Enthusiast</h4>
      </div>
      <div>
        <img src={undraw} />
      </div>
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M189.6,-134.9C223.4,-108.9,213.1,-31.3,181.8,15.7C150.5,62.7,98.3,79.1,56,89C13.7,98.8,-18.5,102.1,-60.3,94C-102.1,85.9,-153.4,66.3,-170.8,28.1C-188.1,-10,-171.4,-66.7,-137.3,-92.8C-103.2,-119,-51.6,-114.5,13.2,-125C77.9,-135.5,155.8,-160.9,189.6,-134.9Z"
            fill="#cbd2d3"
          />
        </g>
      </svg>
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M149.3,-92.4C188.2,-70.4,210.6,-8.6,200.8,50.4C190.9,109.3,148.8,165.5,92.9,192.1C37,218.6,-32.7,215.6,-61.8,181.3C-91,146.9,-79.6,81.3,-76.6,34.6C-73.6,-12.1,-79,-39.7,-67.7,-55.5C-56.3,-71.2,-28.1,-75.1,13.6,-85.9C55.2,-96.7,110.5,-114.5,149.3,-92.4Z"
            fill="#a0babc"
          />
        </g>
      </svg>
    </div>
  );
};

export default connect("darkMode", null)(Home);
