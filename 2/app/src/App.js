// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import App1 from './pages/App1.js'
// import App2 from './pages/App2.js'
// import App3 from './pages/App3.js'
// import App4 from './pages/App4.js'
// import App5 from './pages/App5.js'
// import App6 from './pages/App6.js'
// import App7 from './pages/App7.js'
// import App8 from './pages/App8.js'
// import App9 from './pages/App9.js'
// import App10 from './pages/App10.js'
// import App11 from './pages/App11.js'
// import GlobalThis from './context/index.js';
// import { useState } from 'react';

// function App() {
//   // const data = {name:'nika',age:19};
//   // const [lang,setLang] = useState('en');
//   const wether ={temp:"18deg",v:"10m/s"};
//   const [view,setView] = useState('white');
//   return (
//     <GlobalThis.Provider value={{view:view,setView:setView}}>
//       <Routes>
//         <Route path="/app1" element={<App1/>}></Route>
//         <Route path="/app2" element={<App2/>}></Route>
//         <Route path="/app3" element={<App3/>}></Route>
//         <Route path="/app4" element={<App4/>}></Route>
//         <Route path="/app5" element={<App5/>}></Route>
//         <Route path="/app6" element={<App6/>}></Route>
//         <Route path="/app7" element={<App7/>}></Route>
//         <Route path="/app8" element={<App8/>}></Route>
//         <Route path="/app9" element={<App9/>}></Route>
//         <Route path="/app10" element={<App10/>}></Route>
//         <Route path="/app11" element={<App11/>}></Route>
//       </Routes>
//     </GlobalThis.Provider>
//   );
// }

// export default App;


//1
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Header from './pages/Layout/Header.js';
// import GlobalThis from './context/index.js';

// function App() {
//   const data = { firstName: "nika", age: "19" };
//   return (
//     <GlobalThis.Provider value={{ firstName: data.firstName, age: data.age }}>
//       <Routes>
//         <Route path="/header" element={<Header/>} />
//       </Routes>
//     </GlobalThis.Provider>
//   );
// }

// export default App;

// 2 Сделать глобальный счётчик с count, который доступен из любого компонента.
// import React from 'react';
// import { CounterProvider } from './context/CounterContext';
// import CounterDisplay from './pages/Components/CounterDisplay.js';
// import CounterControls from './pages/Components/CounterControls.js';

// const App = () => {
//     return (
//         <CounterProvider>
//             <CounterDisplay />
//             <CounterControls />
//         </CounterProvider>
//     );
// };

// export default App;


//3
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import GlobalThis from './context';
// import App12 from './pages/App12.js';

// function App() {
//   const data = ['task1','task2'];
//   return (
//     <GlobalThis.Provider value={data}>
//       <Routes>
//         <Route path="/app12" element={<App12/>} />
//       </Routes>
//     </GlobalThis.Provider>
//   );
// }

// export default App;


// //4
// import App12 from './pages/App12';
// import { CartProvider } from './context/CartContext';
// import { Routes, Route } from 'react-router-dom';

// const App = () => {
//     return (
//         <CartProvider>
//             <Routes>
//                 <Route path="/app12" element={<App12 />} />
//             </Routes>
//         </CartProvider>
//     );
// };

// export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import App12 from './pages/App12.js'
import App13 from './pages/App13.js'
import App14 from './pages/App14.js'
import App15 from './pages/App15.js'
import App16 from './pages/App16.js'

 function App() {
  return (
      <Routes>
        <Route path="/app12" element={<App12/>}></Route>
        <Route path="/app13" element={<App13/>}></Route>
        <Route path="/app14" element={<App14/>}></Route>
        <Route path="/app15" element={<App15/>}></Route>
         <Route path="/app16" element={<App16/>}></Route>
      </Routes>
  );
}

export default App;