import styled from "styled-components"

const Container = styled.div`
  position:relative;
  max-width: 350px;
  text-align:center;
  img {
    width: 100%;
  
  }

  .state{
    background-color:${props => props.live=== "#" ?"#de350b" :   "#00875a"};
    width:fit-content;
    border-radius:10px;
    padding:.2rem 1rem;
    margin-bottom:1rem;
    font-weight:bold;
    font-size:1.2rem;
   
  }



  p {
    font-size: 1.8rem;
    padding-bottom: 1rem;
    &.name {
      font-weight: 600;
      color:  var(--border-color);
    }
  }

  .links {
    a {
      padding-right: 1rem;
      font-size: 3rem;
      color: var(--border-color);
      &:hover {
        color: var(--grey-color);
      }
    }
  }
`

export default function Project({ item }) {
  return (
    <Container live={item.live}>
    <p className='state'>{item.live === "#" ? "In Development" : "Deployed"}</p>
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
