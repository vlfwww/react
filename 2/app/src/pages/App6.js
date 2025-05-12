import React, { use, useState, useEffect } from "react";
import axios from "axios";
function App6() {
//  1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
//  который содержит форму с полем ввода. Используйте хук useState для хранения
//  значения введенного текста и хук useEffect для отслеживания изменений этого
//  значения. При каждом изменении значения в поле ввода, выводить его в консоль
//  с помощьюuseEffect.

// const [value,setValue] = useState('');
// const change = (e)=>{
//     setValue(e.target.value)
// }
// useEffect( ()=>console.log(value),[value])
// return (
//     <div>
//         <input type="text" onChange={change}/>
//     </div>
// )

//  2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
//  который увеличивает значение счетчика на 1 каждую секунду с использованием
//  useEffect.

// const [value, setValue] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setValue((prevValue) => prevValue + 1); 
//     }, 1000);

//     return () => clearInterval(interval); 
//   }, []); 

//   return (
//     <div>
//       <h1>{value}</h1>
//     </div>
//   );

//  3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
//  выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
//  данныевзаголовок.

//  const [value, setValue] = useState('');

//   useEffect(async () => {
//     const response = await axios.get('https://api.ipify.org/?format=json');
//     setValue(response.data.ip); 
//   }, []); 

//   return (
//     <div>
//       <h1>{value}</h1>
//     </div>
//   );

//  4. Таймер с использованием useState и useEffect: Создайте компонент, который
//  отображает текущее времяиобновляет его каждуюсекунду.

// const [hours,setHours] =  useState(0);
// const [mins,setMins] =  useState(0);
// const [seconds,setSeconds] =  useState(0);
// useEffect(()=>{
//     setInterval(()=>{
//         const data = new Date();
//         setHours(data.getHours());
//         setMins(data.getMinutes())
//         setSeconds(data.getSeconds())
//     },1000)
// },[])

// return (
//     <div>
//         <h1>{hours}:{mins}:{seconds}</h1>
//     </div>
// )


//  5. Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте
//  компонент React, который при первичном рендеринге отправляет запрос к APIс
//  рандомносгенерированнымчисломиотображает результатвконсоль.

// const [value, setValue] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const num = Math.floor(Math.random() * 1000);
//         const response = await axios.get(`http://numbersapi.com/${num}`);
//         setValue(response.data); 
//         console.log(response.data); 
//       } catch (error) {
//         console.log('Ошибка при запросе:', error);
//       }
//     };

//     fetchData();
//   }, []); 

//   return (
//     <div>
//       <h1>{value}</h1>
//     </div>
//   );
}
export default App6;
