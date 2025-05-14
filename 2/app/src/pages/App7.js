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


// Создай инпут с типом «password» и кнопку «Показать/скрыть». При нажатии меняется type у инпута.
// Подсказка: С useRef можно напрямую изменить ref.current.type.

// const t =  useRef(null)
// const f =()=>t.current.type==='text'?t.current.type='password':t.current.type='text';

// return (
//     <div>
//         <input ref = {t} type='password' />
//         <button onClick={f}>{t.current?.type === 'text' ? 'Скрыть' : 'Показать'}</button>
//     </div>
// )

// Создай текстовое поле, и сохраняй значение в useRef, а не в useState. Добавь кнопку «Показать введённое», которая покажет текст в alert.
// const val = useRef('')
// const inp = useRef()
// const f =()=>val.current=inp.current.value;
// const cl=()=>alert(val.current)

// return (
//     <div>
//         <input ref ={inp} type="text" onChange={f}/>
//         <button onClick={cl}>Show</button>
//     </div>
// )

// Создайте счетчик в виде h1 и две кнопки +1 и −1. По клику на кнопки значение textContent для заголовка должно меняться
// const val = useRef(0)
// const h = useRef()
// const pl =()=>{
//     val.current+=1;
//     h.current.textContent=val.current
// }
// const min =()=>{
//     val.current-=1;
//     h.current.textContent=val.current
// }

// return (
//     <div>
//         <h1 ref ={h}>0</h1>
//         <button onClick={pl}>+1</button>
//         <button onClick={min}>-1</button>
//     </div>
// )

// Сделай форму с несколькими инпутами и кнопку «Сбросить». При клике форма должна очиститься без использования useState.
// Подсказка: Хранить ref на каждый <input> и обнулять через .value = ''.
// const inp1=useRef()
// const inp2=useRef()
// const f =()=>{
//     inp1.current.value='';
//     inp2.current.value='';
// }
// return (
//     <div>
//         <input ref={inp1} type="text" />
//         <input ref={inp2} type="text" />
//         <button onClick={f}>Сбросить</button>
//     </div>
// )

// Сохрани и выведи текущее время (Date.now()), но так, чтобы оно не менялось при ререндере.

// const timeRef = useRef(new Date());

//   return (
//     <div>
//       <h1>{timeRef.current.toLocaleTimeString()}</h1>
//     </div>
//   );

// Сделай кнопку, которая кликается автоматически через 2 секунды после монтирования.
// Подсказка: Через ref вызови .click() у кнопки внутри useEffect.
// const but = useRef();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       but.current.click(); 
//     }, 2000);

//     return () => clearInterval(interval); 
//   }, []);

//   const l = () => {
//     console.log('hello');
//   };

//   return (
//     <div>
//       <button ref={but} onClick={l}>Click</button>
//     </div>
//   );

// Сделай список элементов с кнопкой удаления. Удаляй DOM-узел напрямую (без useState).
// Подсказка: Работа с ref.current.remove() (в реальных приложениях лучше так не делать — но для практики полезно).
// const p1 = useRef();
//   const p2 = useRef();
//   const p3 = useRef();
//   const p4 = useRef();

//   return (
//     <div>
//         <div ref={p1}>
//             <p>1</p> 
//             <button onClick={() => p1.current.remove()}>Удалить</button>
//         </div>
//         <div ref={p2}>
//             <p>2</p> 
//             <button onClick={() => p2.current.remove()}>Удалить</button>
//         </div>
//         <div ref={p3}>
//             <p>3</p> 
//             <button onClick={() => p3.current.remove()}>Удалить</button>
//         </div>
//         <div ref={p4}>
//             <p>4</p> 
//             <button onClick={() => p4.current.remove()}>Удалить</button>
//         </div>
//     </div>
//   );
}
export default App7
