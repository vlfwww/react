import React, { use, useState } from "react";
import axios from "axios";
function App5() {
  //     1. Форма сиспользованием useState: Создайте компонент текстового поля, который
  //  позволяет пользователю по изменению значения инпута отображать значение в
  //  консоль.
  // const [inp,setInp] = useState('');
  // const change = (e)=>{setInp(e.target.value);console.log(inp);}

  // return (
  //     <input type='text' onChange={change}/>
  // )

  //  2. Отображение текста с использованием useState: Создайте компонент, который
  //  предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
  //  отображается текст, а принажатиина"Скрыть" текст скрывается.

  // const [active,setActive] = useState(false);
  // const display =()=>{active?setActive(false):setActive(true)}

  // return (
  //     <div>
  //         <h1 style={{display:active?'block':'none'}}>dfghjk,l.</h1>
  //         <button onClick={display}>{active?'Скрыть':'Показать'}</button>
  //     </div>
  // )

  //  3. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
  //  который позволяет пользователю выбирать цвет из списка и отображает цвет
  //  выбранного цвета наэкране.

  // const [color,setColor] = useState('pink');

  // const set = (e)=>{
  //     setColor(e.target.textContent)
  // }

  // return (
  //    <div>
  //      <div onClick={set}>
  //         <p>red</p>
  //         <p>blue</p>
  //         <p>green</p>
  //     </div>
  //      <button style={{backgroundColor:color}}>цвет</button>
  //    </div>
  // )

  //  4. Список задач с использованием useState: Создайте компонент списка задач,
  //  который позволяет пользователюдобавлятьиудалятьзадачиизсписка.

  // const [value,setValue] = useState('');
  // const [arr,setArr] = useState([]);
  // const change =(e)=>{
  //     setValue(e.target.value)
  // }
  // const add =()=>{
  //     setArr([...arr,value])
  // }
  // const del =(e)=>{
  //     setArr(arr.filter((el)=>e.target.id!==el));
  // }

  // return (
  //     <div>
  //         <input type="text" onChange={change}/>
  //         <button onClick={add}>Добавить</button>
  //         {arr.map((el)=><p>{el} <button id = {el} onClick={del}>Удалить</button></p>)}
  //     </div>
  // )

  //  5. Форма сиспользованием useState: Создайте компонент текстового поля, который
  //  позволяет пользователю вводить текст и проверять введенный текст регулярным
  //  выражением на почту по нажатию на кнопку. В заголовок отобразить true если
  //  введенная строка удовлетворяет регулярному выражению и false в противном
  //  случае.

  // const [value,setValue] = useState('');
  // const [checkValue,setCheck] = useState(false);
  // const change = (e)=>{
  //     setValue(e.target.value)
  // }
  // const check =()=>{
  //     setCheck((/^[A-Za-z]+@[a-z]+\.[a-z]{1,3}$/gm).test(value))
  // }
  // return (
  //     <div>
  //         <input type="text" onChange={change}/>
  //         <button onClick={check}>Check</button>
  //         <p>{checkValue.toString()}</p>
  //     </div>
  // )

  //   6. Создайтекомпонент простого калькулятора,который выполняеткоманды: +, -, *, /

  //   const [value1, setValue1] = useState(0);
  //   const [value2, setValue2] = useState(0);
  //   const [rez, setRez] = useState(0);

  //   const change1 = (e) => setValue1(Number(e.target.value));
  //   const change2 = (e) => setValue2(Number(e.target.value));

  //   const oper = (e) => {
  //     const operation = e.target.textContent;
  //     switch (operation) {
  //       case '+':
  //         setRez(value1 + value2);
  //         break;
  //       case '-':
  //         setRez(value1 - value2);
  //         break;
  //       case '*':
  //         setRez(value1 * value2);
  //         break;
  //       case '/':
  //         setRez(value1 / value2);
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  //   return (
  //     <div>
  //       <div>
  //         <input type="number" onChange={change1} />
  //         <input type="number" onChange={change2} />
  //       </div>
  //       <div onClick={oper}>
  //         <button>+</button>
  //         <button>-</button>
  //         <button>*</button>
  //         <button>/</button>
  //       </div>
  //       <h1>{rez}</h1>
  //     </div>
  //   );

  // 7. Изменениеразмерашрифта сиспользованиемuseState: Создайтекомпонент,
  // которыйпредоставляетдвекнопки: "Увеличить"и"Уменьшить".Принажатиина
  // этикнопкизначениеfont-sizeизменяетсясоответствующимобразомна+/– 1px.
  // const [size,setSize] = useState(15);
  // const plus = ()=>{
  //     let a = size+1;
  //     setSize(a);
  // }
  // const minus = ()=>{
  //     let a = size-1;
  //     setSize(a);
  // }
  // return (
  //     <div>
  //          <p style={{ fontSize: `${size}px` }}>fghjk,.</p>
  //         <button onClick={plus}>+</button>
  //         <button onClick={minus}>-</button>
  //     </div>
  // )

  // 8. Отображение навигации с использованиемuseState: По нажатиюна кнопку
  // “бургер” отображатьблокнавигациииз4параграфов.
// const [viz,setViz]=useState(false)
// const change = ()=>{viz?setViz(false):setViz(true)}
//   return (
//     <div>
//       <button onClick={change}>бургер</button>
//       <div style={{display:viz?'block':'none'}}>
//         <p>1</p>
//         <p>2</p>
//         <p>3</p>
//         <p>4</p>
//         <p>5</p>
//       </div>
//     </div>
//   );

  // 9. Форма с отправкой запроса к API с использованием useState: Создайте
  // компонент, которыйпредоставляет input, button. Послевводаданныхвinput по
  // нажатию кнопку необходимо отправлять асинхронный запрос к API
  // https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
  // Отобразить результат в заголовок. Таким образом у вас получается игра в
  // предсказателя:гдепользовательвводитвопросвinput, адалееполучаетответна
  // заданныйвопрос
const [value,setValue]=useState('');
const [answ,setAnsw] = useState('');
const change =(e)=>{
    setValue(e.target.value)
}
async function send(){
    const rez = await axios.get('https://yesno.wtf/api');
    setAnsw(rez.data.answer);
}
  return(
    <div>
        <input type="text" onChange={change}/>
        <button onClick={send}>Send</button>
        <h1>{answ}</h1>
    </div>
  )
}
export default App5;
