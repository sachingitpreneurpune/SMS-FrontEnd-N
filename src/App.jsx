import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './Pages/Home.jsx'
import AddStudent from './Pages/AddStudent.jsx'
import StudentList from './Pages/StudentList.jsx'
import EditStudent from './Pages/EditStudent.jsx'
function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddStudent/>}/>
        <Route path='/show' element={<StudentList/>}/>
        <Route path={`/edit/:id`} element={<EditStudent/>}/>
        
       </Routes>
       </BrowserRouter>
   </>
  )
}

export default App
