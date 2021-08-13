import Head from "next/head"
import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Home.module.css"
import { HomeSection } from "../styles/Home.styles"

export default function Home() {
  return (
    <Layout>
      <HomeSection className='about'>
        <h1>{`Hi , I'm Rahan`}</h1>
        <p className='paraph'>
          {` I'm a Frontend Web Developer ,with a strong entrepreneurial spirit in
          love with Web Design and like to learn new things. I'm currently in my
          senior year of computer science !`}
          <br /> <br />
        </p>
        <div>
          <h2>What I use :</h2>
          <p className='stack'>
            HTML, CSS, Sass, React, Nextjs, Redux <br />
            Node, Express, MongoDB, TypeScript, <br /> GraphQL, React Native,
            Jest, Git /Github, <br /> Formik, Restful API
          </p>
        </div>
        <br />
        <p>
          Here you will find some of my projects and the books that I have read
          both tech and non-tech
        </p>
        <br />
        <p>Enjoy !</p>
        <br />
      </HomeSection>
    </Layout>
  )
}
