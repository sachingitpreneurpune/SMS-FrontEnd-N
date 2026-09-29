import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API from '../API'

const AddStudent = () => {
    let navigate=useNavigate()
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
    // console.log(student)

    async function handleSubmit(event){
       event.preventDefault();

       
       try{
        await API.post("students",student);
        alert("Student Added Successfully...")
        navigate("/show")

        setStudent({
             name:"",
        email:"",
        course:""
        })

    }catch(err){
        console.log(err)
    } 


    }
  return (
    <div className='row justify-content-center'>
     

        <form action="" className='m-5 border border-primary p-4 col-4 text-center text-bg-dark bg-opacity-50 rounded-3' onSubmit={handleSubmit}>
               <h1 className='mb-5'>Add Students</h1>

            <label htmlFor="">Name:-  </label>
            <input type="text" placeholder='Enter Student Name' name="name" onChange={handleChange} value={student.name} /><br /><br />

            <label htmlFor="">Email:-  </label>
            <input type="email" placeholder='Enter Student Email' name="email" onChange={handleChange} value={student.email}/><br /><br />

            <label htmlFor="">Course:- </label>
            <input type="text" placeholder='Enter Student Course' name="course" onChange={handleChange} value={student.course} /><br /><br />
            <input type="submit" className='btn btn-primary' value="Add Student" />
        </form>
    </div>
  )
}

export default AddStudent