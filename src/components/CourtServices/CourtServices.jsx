import React,{useState,useEffect} from 'react'
import Header from '../Header'
import "./css/courtServices.css"
import DisplayData from './DisplayData'

const CourtServices = () => {

  
  return (
    <>
      <Header/>
      <div className="content container">

       <DisplayData/>
      

      </div>
    </>
  )
}

export default CourtServices

