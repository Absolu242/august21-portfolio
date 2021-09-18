import Books from "../components/Books";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { HomeSection } from "../styles/Home.styles";

export default function Home() {
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
              <span>learn </span>new things. My Goal is to <span> grow </span>{" "}
              as a developer and then move to higher responsibility roles like
              project manager :) !
              <br /> <br />
            </p>
          </div>

          <div className="top-right">
          <img src='./header.png' alt='header'/>
          </div>
        </div>

        <div>
          <br />
          <br />
          <h2>What I use :</h2>
          <p className="stack">
            HTML, CSS, Sass, React, Nextjs, Redux <br />
            Node, Express, MongoDB, React Native,
            <br />
            Jest, Git /Github, Formik, Redux-toolkit
          </p>
        </div>
        <br />

        <br />
      </HomeSection>
      <Projects />
      <Books />
    </Layout>
  )}
