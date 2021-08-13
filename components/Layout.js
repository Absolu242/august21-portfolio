import React from "react"
import styled from "styled-components"
import NavBar from "./NavBar"

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 15px;
    font-weight: 600;
  }
`
const NavIcons = styled.div`
  position: relative;

  ul {
    display: flex;
    list-style: none;
    padding: 1rem 0;

    li {
      a {
        margin-right: 2rem;
        color: rgb(115, 115, 115);
        font-weight: 500;
        font-size: 3rem;
      }
    }
  }
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <NavBar />
      {children}
      <Footer>
        <p>Thanks for visiting.</p>

        <NavIcons>
          <ul>
            <li>
              <a href='/'>
                {" "}
                <i className='bx bxl-twitter' />
              </a>
            </li>
            <li>
              <a href='/'>
                {" "}
                <i className='bx bxl-linkedin-square' />
              </a>
            </li>
            <li>
              <a href='/'>
                {" "}
                <i className='bx bxl-github' />
              </a>
            </li>
          </ul>
        </NavIcons>
      </Footer>
    </Wrapper>
  )
}