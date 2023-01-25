import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import {Button,Table} from 'react-bootstrap'
import './css/courtServices.css'
import {db} from "../../firebase-config"
import data from "../../../public/data.json"
import { collection,getDocs, onSnapshot, query, where } from 'firebase/firestore'



function DisplayData() {

    
    const [search,SetSearch] = useState();
    const [cases,setCases] = useState({
      id:"",
      caseType:"",
      FillingNumber:"",
      FillingDate:"",
      RegistrationNumber:"",
        RegistrationDate:"",
        CNR:"",
        FirstHearingDate:"",
        NextHearingDate:"",
        CaseStage:"",
        CourtNumberAndJudge:""
    })
    
    

    const handleSearch = (e)=>{
      
      SetSearch(e.target.value);
      
    }
    
    const colRef = collection(db,"caseDetails");
    const  q= query(colRef,where("caseType","==",search))
    onSnapshot(q,(snapShot)=>{
      let coll = []
      snapShot.docs.forEach((doc)=>{
        coll.push({...doc.data(),id:doc.id})
      })
      console.log(coll)
    })

   
    
  return (
    <>
      <div className="input-group d-flex align-items-center justify-content-center ">
              <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder='Enter filling Number' onChange={handleSearch}/>
              </div>
      </div>
      
      <Table striped bordered hover className='mt-4' variant="dark">
      <thead>
        <tr>
          
          <th colSpan="2" className="text-center">Case Details</th>
          
        </tr>
      </thead>
      <tbody >
        <tr className='text-center' >
          <th scope="row">Case Type</th>
          <td >{}</td>
          
        </tr>
        <tr className="text-center">
          <th scope="row">Filling Number</th>
          <td >19517/2016</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Filling Date</th>
          <td >02-11-2016</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Registration Number</th>
          <td >03-11-2016</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Registration Date</th>
          <td >03-11-2016</td>
         </tr>
        <tr className="text-center">
          <th scope="row">CNR Number</th>
          <td >TSRA000058692016</td>
         </tr>
        
      </tbody>
    </Table> 
       <Table striped bordered hover className='mt-4' variant="dark">
      <thead>
        <tr>
          
          <th colSpan="2" className="text-center">Case Status</th>
          
        </tr>
      </thead>
      <tbody >
        <tr className='text-center' >
          <th scope="row">First Hearing Date</th>
          <td >19-12-2016</td>
          
        </tr>
        <tr className="text-center">
          <th scope="row">Next Hearing Date</th>
          <td >19-12-2023</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Case Stage</th>
          <td >FOR TRIAL</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Cout Number And Judge</th>
          <td>3-II Addl District Judge</td>
         </tr>
      </tbody>
    </Table>  
  
    

      

    </>
  )
}

export default DisplayData