import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Courses from './Pages/Home/Courses/Courses';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import Register from './Pages/Login/Register/Register';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/courses' element={<Courses></Courses>}></Route>
        <Route path='/course/:courseId' element={<CourseDetails></CourseDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>


    </div>
  );
}

export default App;
