import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import API from '../API'

const StudentList = () => {
    let [student, setStudent] = useState([])

    async function fetchData() {
        let response = await API.get("students");
        setStudent(response.data)

    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(student)

   async function handleDelete(id){

         const confirmDelete = window.confirm('Are you sure?')

         if(confirmDelete){
            try{
                await API.delete(`students/${id}`)
                fetchData()
            }
            catch(err){
                console.log(err)
            }
         }

    }


    async function handleEdit(id){
        try{
            await axios.patch(`students/${id}`,{
            course:"Updated Course"
        })
        fetchData()
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1>StudentList</h1>
            <div className="row">
                {
                    student.map((stud) => (
                        <div className="card col-3 text-center" >
                            <div className="card-body">
                                <h5 className="card-title">{stud.id}</h5>
                                <p className="card-text">{stud.name}</p>
                                <p className="card-text">{stud.email}</p>
                                <p className="card-text">{stud.course}</p>
                                 <button className='btn btn-danger' onClick={()=>handleDelete(stud.id)}>Delete</button>
                                 <button className='btn btn-primary' onClick={()=>handleEdit(stud.id)}>Patch</button>

                                 <Link to={`/edit/${stud.id}`}>
                                   <button className='btn btn-danger'>Edit</button>
                                 </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StudentList