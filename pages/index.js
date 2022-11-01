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
              HTML, CSS, SCSS, React, Nextjs, <br />
              Node, Express, MongoDB, React Native,
              <br />
              Jest, Git /Github, Formik, Redux, Redux-toolkit
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
}
