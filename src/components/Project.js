import * as React from "react";
import styled from "styled-components";
import {Chrome, Github} from "@styled-icons/boxicons-logos";

const Container = styled.div`
  position: relative;
  max-width: 350px;
  text-align: center;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  .state {
    background-color: ${(props) =>
      props.live === "#" ? "#de350b" : "#00875a"};
    width: fit-content;
    border-radius: 10px;
    padding: 0.2rem 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  }

  p {
    font-size: 1.8rem;
    padding-bottom: 1rem;
    &.name {
      font-weight: 600;
      color: #6d6d78;
    }
  }

  .links {
    a {
      padding-right: 2rem;
      font-size: 1.6rem;
      color: var(--border-color);
      &:hover {
        color: var(--grey-color);
      }
    }
  }
`;

export default function Project({ item }) {
  return (
    <Container live={item.live}>
      {/* <p className="state">
        {item.live === "#" ? "In Development" : "Deployed"}
      </p> */}
      <a href={item.live} target="_blank" rel="noopener noreferrer">
        <img src={item.image} alt={item.name} />

        <p className="name">{item.name}</p>
      </a>
      <p className="tech">{item.tech}</p>
      <div className="links">
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Chrome size={'3rem'} />
        </a>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={'3rem'}/>
        </a>
      </div>
    </Container>
  );
}
