import React from 'react'
import FirstPage from './Components/FirstPage/FirstPage'
import SecondPage from './Components/SecondPage/SecondPage'
import ThirdBanner from './Components/ThirdBanner/page'
import FourthBanner from './Components/FourthBanner/page'
import Carreers from './Components/Carreers'
const page = () => {
  return (
    <div className='p'>
      <FirstPage/>
<div className='px-14'>    
  <SecondPage/>
      <ThirdBanner />
    <FourthBanner />
    <Carreers />
      </div>
    </div>
  )
}

export default page