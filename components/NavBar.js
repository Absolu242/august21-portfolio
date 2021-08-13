import Link from "next/link"
import styled from "styled-components"

const Nav = styled.div`
  position: relative;
  padding: 3rem 0;
`
const NavLogo = styled.div`
  position: relative;

  p {
    font-size: 3rem;
    font-weight: 500;
    color: rgb(5, 5, 5);
  }
`
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
      }
    }
  }

  .nav-btn {
    padding: 1rem 1.5rem;
    border-radius: 20px;
    background-color: var(--border-color);
    border: none;
    color: white !important;
    font-weight: 600;
    &:hover {
      background: none;
      color: var(--border-color);
    }
  }
`

const NavIcons = styled.div`
  position: relative;

  ul {
    display: flex;
    list-style: none;
    padding: 1rem 0;
    align-items: center;
    flex-wrap: wrap;

    p {
      font-size: 1.5rem;
      font-weight: 600;
    }
    li {
      a {
        margin-right: 2rem;
        color: var(--grey-color);
        font-weight: 500;
        font-size: 3rem;
      }
    }
  }
`

export default function NavBar() {
  return (
    <Nav>
      <NavLogo>
        <p>Rahan Bouess</p>
      </NavLogo>

      <NavList>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/education'>
              <a>Books & Eductaion</a>
            </Link>
          </li>
        </ul>

        <button className='nav-btn'>
          <a
            href='https://drive.google.com/file/d/1Lh0J5J6gEkmtjPOiK8id1nuEItZlji3J/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Get My Resume{" "}
          </a>
        </button>
      </NavList>

      <NavIcons>
        <ul>
          <li>
            <a href=''>
              {" "}
              <i className='bx bxl-twitter' />
            </a>
          </li>
          <li>
            <a href='https://linkedin.com/in/rahan-bakala-bouess-25714a204'>
              {" "}
              <i className='bx bxl-linkedin-square' />
            </a>
          </li>
          <li>
            <a href='https://github.com/Absolu242'>
              {" "}
              <i className='bx bxl-github' />
            </a>
          </li>
          <p>rahanbouess@outlook.com</p>
        </ul>
      </NavIcons>
    </Nav>
  )
}
