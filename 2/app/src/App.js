import './App.css';
import { Route, Routes } from 'react-router-dom';
import App1 from './pages/App1.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<App1/>}></Route>
    </Routes>
  );
}

export default App;
