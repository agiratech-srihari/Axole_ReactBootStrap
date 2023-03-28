import React from 'react'
import { Container } from 'react-bootstrap'
import HomePage from '../../components/HomeBanner'
import GridContainer from '../../components/GridContainer'
import PageNation from '../../components/Pagination'
const Home = () => {
  return (
    <Container fluid className='bg-col'>
      <HomePage/>
      <GridContainer/>
      <PageNation/>
    </Container>
  )
}

export default Home