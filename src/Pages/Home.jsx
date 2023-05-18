import React from 'react'
import Search from '../components/Search'
import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div>
      <Search coins={coins}/>
      <Trending/>
    </div>
  )
}

export default Home
