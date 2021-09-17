import styled from "styled-components"

export const HomeSection = styled.section`
  &.about {
    width: 100%;
    max-width: 60%;

    h1 {
      font-size: 4rem;
     
      span{
        color: var(--border-color);;
      }
    }

    h2 {
      font-size: 2.2rem;
      padding-top: 1rem;
      border-bottom: 5px solid var(--border-color);
      width: fit-content;
      margin-bottom:2rem;
    }

    p {
      font-size: 2rem;
      font-family: "IBM Plex Sans";
      text-align: justify;

      span{
        color: var(--border-color);;
      }

      &S.paraph {
        padding: 2rem 0;
      }
      &.stack {
        font-size: 1.8rem;
        font-weight: 500;
        //color: rgb(5, 5, 5);
        padding: 1rem 0;
      }
    }

    @media (max-width: 765px) {
      max-width: 100%;
    }
  }
`
