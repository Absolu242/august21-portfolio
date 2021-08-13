import { useRouter } from "next/dist/client/router"
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

        &.active {
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

    @media (max-width: 765px) {
      &.center {
        li {
          a {
            margin: 2rem;
          }
        }
      }
    }

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
  const router = useRouter()

  const { pathname } = router

  return (
    <Nav>
      <NavLogo className='center'>
        <p>Rahan Bouess</p>
      </NavLogo>

      <NavList className='center'>
        <ul>
          <li>
            <Link href='/'>
              <a className={pathname === "/" ? "active" : ""}>Home</a>
            </Link>
          </li>

          <li>
            <Link href='/projects'>
              <a className={pathname === "/projects" ? "active" : ""}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href='/books'>
              <a className={pathname === "/books" ? "active" : ""}>Books </a>
            </Link>
          </li>
        </ul>

        <button className='nav-btn'>
          <a
            href='https://drive.google.com/file/d/1MgwG4s6tPCfDH1uoS6n7dA4G0wJdTfQU/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Get My Resume{" "}
          </a>
        </button>
      </NavList>

      <NavIcons>
        <ul className='center'>
          <li>
            <a href='https://twitter.com'>
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
