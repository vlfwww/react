import React, { use, useState, useEffect, useRef } from "react";
import axios from "axios";
function App7() {
//  1.Создайте компонент, который покликунакнопкуменяет цветтекста накрасный

// const data = useRef();
// const cl = ()=>{
//     data.current.style.color='red'
// }
// return (
//     <div>
//         <h1 ref ={data}>dfgbhnjm,cv</h1>
//         <button onClick={cl}>Click</button>
//     </div>
// )

//  2. Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет
//  текста

// const data = useRef();
// const cl = ()=>{
//     const c = Math.round(Math.random()*1000)
//     data.current.style.color=`#${c}`
// }
// return (
//     <div>
//         <h1 ref ={data}>dfgbhnjm,cv</h1>
//         <button onClick={cl}>Click</button>
//     </div>
// )

//  3. Создайте компонент, который при каждом клике на кнопку увеличивает размер
//  шрифтатекставэлементе настранице.

// const data = useRef();

//   const cl = () => {
//     const currentSize = parseInt(window.getComputedStyle(data.current).fontSize);
//     data.current.style.fontSize = `${currentSize + 1}px`;
//   };

//   return (
//     <div>
//       <h1 ref={data}>dfgbhnjm,cv</h1>
//       <button onClick={cl}>Click</button>
//     </div>
//   );

//  4. Создайте компонент, который при фокусе на текстовом поле добавляет
//  background(onFocus, onBlur)

// const data = useRef()
// const f = ()=>{
//     data.current.style.backgroundColor='red'
// }
// const c = ()=>{
//     data.current.style.backgroundColor='white'
// }
// return (
//     <div>
//         <input ref ={data} onFocus={f} onBlur={c}/>
//     </div>
// )

//  5. Реализуйте компонент, который отслеживает количество кликов на кнопку с
//  помощьюuseRefивыводитэточисловконсольприкаждомклике.

// const data = useRef(0)
// const f = ()=>{
//     data.current+=1;
//     console.log(data.current);
// }
// return(
//     <button onClick={f}>Click</button>
// )

//  6. Разработайте компонент для реализации "подсказок" (tooltips). При наведении на
//  элемент интерфейса (например, кнопку), компонент отображает подсказку с
//  текстом. (onMouseEnter срабатывает, когда курсор мыши входит в область
//  элемента. onMouseLeave срабатывает, когда курсор мыши покидает область
//  элемента.)

// const data = useRef();
// const f =()=>data.current.style.display='block';
// const c =()=>data.current.style.display='none'
// return (
//     <div>
//         <button onMouseEnter={f} onMouseLeave={c}>Click</button>
//         <h1 ref ={data }>tooltips</h1>
//     </div>
// )


}
export default App7
