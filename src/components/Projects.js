import * as React from "react";
import styled from "styled-components";
import Project from "./Project";
import { projectsList } from "../data/projects.data";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 5rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heading {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-bottom: 3rem;
  }

  h1 {
    font-size: 6rem;
    border-bottom: 5px solid var(--border-color);
    width: fit-content;
  }

  h2 {
    font-size: 2.2rem;
    padding-top: 1rem;
    border-bottom: 5px solid var(--border-color);
    width: fit-content;
  }
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 5rem;
  padding: 5rem 0;

  h1 {
    font-size: 6rem;
  }

  .grid-el {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;
export default function Projects() {
  return (
    <Container id="projects">
      <div className="title">
        <h2>My Work :</h2>
      </div>
      <Grid>
        {projectsList.map((project, index) => (
          <div className="grid-el" key={index}>
            <Project item={project} />
          </div>
        ))}
      </Grid>
    </Container>
  );
}
