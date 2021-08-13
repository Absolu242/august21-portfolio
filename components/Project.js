import styled from "styled-components"

const Container = styled.div`
  max-width: 350px;

  img {
    width: 100%;
    border: 1px solid var(--grey-color);
  }

  p {
    font-size: 1.8rem;
    padding-bottom: 1rem;
    &.name {
      font-weight: 600;
      color: rgb(5, 5, 5);
    }
  }

  .links {
    a {
      padding-right: 1rem;
      font-size: 3rem;
      color: var(--grey-color);
      &:hover {
        color: var(--border-color);
      }
    }
  }
`

export default function Project({ item }) {
  return (
    <Container>
      {" "}
      <a href={item.live} target='_blank' rel='noopener noreferrer'>
        <img src={item.image} alt={item.name} />

        <p className='name'>{item.name}</p>
      </a>
      <p className='tech'>{item.tech}</p>
      <div className='links'>
        <a href={item.live} target='_blank' rel='noopener noreferrer'>
          <i className='bx bxl-chrome' />
        </a>
        <a href={item.github} target='_blank' rel='noopener noreferrer'>
          <i className='bx bxl-github' />
        </a>
      </div>
    </Container>
  )
}
