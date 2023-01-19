import React,{useState,useEffect} from 'react'
import Header from '../Header'
import {collection,getDocs, onSnapshot, query} from 'firebase/firestore'
import {db} from '../../firebase-config'
import "./css/courtServices.css"
import { Table } from 'react-bootstrap'
import DisplayData from './DisplayData'

const CourtServices = () => {
    
    const [Data , setData] = useState('')
    const [search ,setSearch]=useState('')
    // db.collection("caseDetails")
    // .orderBy("fillingNumber").startAt("1951/2016").endAt("1951/2016"+"\uf8ff").get().then(docs=>{
    //   if(!docs.empty){
    
    //     console.log(docs.data());
    //   }
    // })
    
  
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

