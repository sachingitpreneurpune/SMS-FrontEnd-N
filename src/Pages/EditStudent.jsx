
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import API from '../API'

const EditStudent = () => {



    let {id}=useParams()
    let navigate=useNavigate();
     let[student,setStudent]=useState({
            name:"",
            email:"",
            course:""
        })
        function handleChange(event){
        // console.log(event.target.value)
        // console.log(event.target.name)

       setStudent({
        ...student,[event.target.name]:event.target.value
       })
    }

      async function fetchSingleData(){
        let res= await API.get(`students/${id}`)

       setStudent(res.data)
      }

      useEffect(()=>{
        fetchSingleData()
      },[])
   async function handleUpdate(e){


   try{
    e.preventDefault()
     await API.put(`students/${id}`,student)
     navigate('/show')
   }
   catch(err){
    console.log(err)
   }


    }
  return (
     <div className='row justify-content-center'>
     

        <form action="" className='m-5 border border-primary p-4 col-4 text-center text-bg-dark bg-opacity-50 rounded-3' onSubmit={handleUpdate}>
               <h1 className='mb-5'>Edit Students</h1>

            <label htmlFor="">Name:-  </label>
            <input type="text" placeholder='Enter Student Name' name="name" onChange={handleChange} value={student.name}  /><br /><br />

            <label htmlFor="">Email:-  </label>
            <input type="email" placeholder='Enter Student Email' name="email" onChange={handleChange} value={student.email}/><br /><br />

            <label htmlFor="">Course:- </label>
            <input type="text" placeholder='Enter Student Course' name="course" onChange={handleChange} value={student.course} /><br /><br />
            <input type="submit" className='btn btn-primary' value="Update Student" />
        </form>
    </div>
  )
}

export default EditStudent