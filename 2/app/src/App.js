import './App.css';
import { Route, Routes } from 'react-router-dom';
import App1 from './pages/App1.js'
import App2 from './pages/App2.js'
import App3 from './pages/App3.js'
import App4 from './pages/App4.js'
import App5 from './pages/App5.js'
import App6 from './pages/App6.js'
import App7 from './pages/App7.js'
import App8 from './pages/App8.js'
import App9 from './pages/App9.js'
import App10 from './pages/App10.js'
import App11 from './pages/App11.js'
import GlobalThis from './context/index.js';
import { useState } from 'react';

function App() {
  // const data = {name:'nika',age:19};
  // const [lang,setLang] = useState('en');
  const wether ={temp:"18deg",v:"10m/s"};
  const [view,setView] = useState('white');
  return (
    <GlobalThis.Provider value={{view:view,setView:setView}}>
      <Routes>
        <Route path="/app1" element={<App1/>}></Route>
        <Route path="/app2" element={<App2/>}></Route>
        <Route path="/app3" element={<App3/>}></Route>
        <Route path="/app4" element={<App4/>}></Route>
        <Route path="/app5" element={<App5/>}></Route>
        <Route path="/app6" element={<App6/>}></Route>
        <Route path="/app7" element={<App7/>}></Route>
        <Route path="/app8" element={<App8/>}></Route>
        <Route path="/app9" element={<App9/>}></Route>
        <Route path="/app10" element={<App10/>}></Route>
        <Route path="/app11" element={<App11/>}></Route>
      </Routes>
    </GlobalThis.Provider>
  );
}

export default App;
