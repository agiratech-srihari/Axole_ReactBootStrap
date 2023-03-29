import React from 'react'
import { Container } from 'react-bootstrap'
import HomePage from '../../components/HomeBanner'
import GridContainer from '../../components/GridContainer'
import PageNation from '../../components/Pagination'
import NewsLetter from '../../components/NewLetter'

const Home = () => {
  return (
    <>
      <Container fluid className='bg-col'>
        <HomePage />
        <GridContainer />
        <PageNation />
      </Container>
      <Container fluid className='bg-col-o'>
          <NewsLetter/>
      </Container>
    </>
  )
}

export default Home