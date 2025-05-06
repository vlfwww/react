import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.js'
import LoginPage from './pages/LoginPage/LoginPage.js'
import SignUpPage from './pages/SignUpPage/SignUpPage.js'
import Courses from './pages/Courses/Courses.js'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signUp" element={<SignUpPage/>}></Route>
      <Route path="/courses" element={<Courses/>}></Route>
    </Routes>
  );
}

export default App;
