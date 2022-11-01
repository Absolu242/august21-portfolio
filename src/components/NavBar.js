import * as React from "react";
import styled from "styled-components";

const Nav = styled.div`
  position: relative;
  padding: 2rem 0 3rem 0;
`;

const NavLogo = styled.div`
  position: relative;

  p {
    font-size: 3rem;
    font-weight: 500;
  }
`;

const NavList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ul {
    display: flex;
    list-style: none;
    padding: 1rem 0;

    li {
      a {
        margin-right: 2rem;
        color: var(--grey-color);
        font-weight: 500;
        font-size: 1.8rem;

        &.active,
        &:hover {
          color: var(--border-color) !important;
        }
      }
    }
  }

  @media (max-width: 765px) {
    &.center {
      justify-content: center;
      ul {
        li {
          a {
            margin: 2rem;
          }
        }
      }
    }
  }

  .nav-btn {
    padding: 1rem 1.5rem;
    border-radius: 25px;
    background-color: var(--border-color);
    border: none;
    color: white !important;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const NavIcons = styled.div`
  position: relative;

  ul {
    display: flex;
    list-style: none;
    padding: 1rem 0;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 765px) {
      &.center {
        li {
          a {
            margin: 2rem;
          }
        }
      }
    }

    button {
      background: none;
      border: none;
      color: var(--grey-color);
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
      outline: none;
    }
    li {
      a {
        margin-right: 2rem;
        color: var(--grey-color);
        font-weight: 500;
        font-size: 3rem;
        &:hover {
          color: var(--border-color);
        }
      }
    }
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <NavLogo >
        <p>Rahan Bouess</p>
      </NavLogo>

      <NavList className="center">
        <ul>
          <li>
            <a>Home</a>
          </li>

          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#books">Books </a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1avYLQe5CY0ixH5sgAGw4VXcAkimSIOeK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button className="nav-btn">Get My Resume</button>
        </a>
      </NavList>

      <NavIcons>
        <ul className="center">
          <li>
            <a
              href="https://linkedin.com/in/rahan-bakala-bouess-25714a204"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="bx bxl-linkedin-square" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Absolu242"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="bx bxl-github" />
            </a>
          </li>
          <li>
            <button
              style={{
                fontSize: "3rem",
              }}
              onClick={() =>
                (window.location = "mailto:rahanbakala@outlook.com")
              }
            >
              <i className="bx bxs-envelope" />
            </button>
          </li>
        </ul>
      </NavIcons>
    </Nav>
  );
}
