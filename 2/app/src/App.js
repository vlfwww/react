import './App.css';
import { Route, Routes } from 'react-router-dom';
import App1 from './pages/App1.js'
import App2 from './pages/App2.js'
import App3 from './pages/App3.js'
import App4 from './pages/App4.js'
import App5 from './pages/App5.js'
import App6 from './pages/App6.js'
import App7 from './pages/App7.js'

function App() {
  return (
    <Routes>
      <Route path="/app1" element={<App1/>}></Route>
      <Route path="/app2" element={<App2/>}></Route>
      <Route path="/app3" element={<App3/>}></Route>
      <Route path="/app4" element={<App4/>}></Route>
      <Route path="/app5" element={<App5/>}></Route>
      <Route path="/app6" element={<App6/>}></Route>
      <Route path="/app7" element={<App7/>}></Route>
    </Routes>
  );
}

export default App;
