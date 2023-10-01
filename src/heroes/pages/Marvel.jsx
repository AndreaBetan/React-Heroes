import React from 'react'
import { HeroList } from '../components'
import imgMarvel from './img/Marvel.jpg'

export const Marvel = () => {
  return (
    <>
        <h1 className="text-center text-light">Marvel Comics</h1>
        <br />
        
        <HeroList publisher='Marvel Comics' />
            
    </>

  )
}
