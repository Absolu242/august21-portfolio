import styled from "styled-components"
import Layout from "../../components/Layout"
import { booksList } from "../../data/books.data"

const Container = styled.div`
  position: relative;
  min-height: 50vh;

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
`

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

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.8rem;
    padding-top: 1rem;
    &.fn {
      margin-top: 2rem;
    }
  }

  .book {
    font-size: 1.6rem;
    padding: 2rem 0;
  }

  .grid-el {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`
export default function index() {
  return (
    <Layout>
      <Container>
        <div className='heading'>
          <h1>Books</h1>
        </div>
        <Grid>
          <div className='tech grid-el'>
            {/* <h2>Tech Books</h2> */}
            <h3>Currently reading (tech) :</h3>
            {booksList
              .filter((item) => item.tech && item.current)
              .map((book, index) => (
                <div key={index}>
                  <Book book={book} />
                </div>
              ))}

            <h3 className='fn'>Finished :</h3>
            {booksList
              .filter((item) => item.tech && item.finished)
              .map((book, index) => (
                <div className='grid-el' key={index}>
                  <Book book={book} />
                </div>
              ))}
          </div>
          <div className='nontech grid-el'>
            {/* <h2>Non-Tech Books</h2> */}
            <h3>Currently reading (non tech) :</h3>
            {booksList
              .filter((item) => !item.tech && item.current)
              .map((book, index) => (
                <div className='grid-el' key={index}>
                  <Book book={book} />
                </div>
              ))}

            <h3 className='fn'>Finished :</h3>
            {booksList
              .filter((item) => !item.tech && item.finished)
              .map((book, index) => (
                <div className='grid-el' key={index}>
                  <Book book={book} />
                </div>
              ))}
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

const Book = ({ book }) => {
  return (
    <div className='book'>
      <p>{book.name} </p>
      <i>{book.author}</i>
    </div>
  )
}
