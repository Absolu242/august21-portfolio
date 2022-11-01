import * as React from "react";
import Books from "../components/Books";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { HomeSection } from "../styles/Home.styles";
import "../styles/globals.css";
import MetaTags from "../components/Meta";

const IndexPage = () => {
  return (
    <Layout>
      <HomeSection className="about">
        <div className="top">
          <div className="top-left">
            <h1>
              Hi , I'm <span>Rahan</span>
            </h1>
            <br />

            <p className="paraph">
              I'm a <span>Frontend</span> Web Developer ,with a strong
              entrepreneurial spirit in love with Web Design and like to{" "}
              <span>learn </span>new things and grow by facing challenges and
              solving problems.
              <br />
              <br /> Feel free to take a look around and drop me a message on
              LinkedIn <br /> I'm always Happy to connect 😃
              <br /> <br />
            </p>
          </div>
        </div>

        <div className="tech">
          <div className="content">
            <div className="title">
              <h2>Tech I work With :</h2>
            </div>
            <p className="stack">
              HTML5, CSS3, SCSS, JavaScript, TypeScript, <br />
              React , Next , emotion , Figma ,Git / Github, <br />
              Jest ,Storybook, NPM, React Native, Node , Express, <br />
              MongoDB, Redux, Redux-toolkit, Firebase , Photoshop, <br />
              Lunacy,Linux
            </p>
          </div>
        </div>
        <br />

        <br />
      </HomeSection>
      <Projects />
      <Books />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <MetaTags/>
);
