import React, { use, useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
function App8() {
//  1.Создайте компонент React, который отображает сумму двух чисел. Используй хук
//  useState для хранения значений чисел и хук useMemo для кэширования
//  результата суммы. При изменении значений чисел, сумма должна
//  пересчитыватьсятолько тогда, когда необходимо.

// const [inp1,setInp1] =useState('')
// const [inp2,setInp2] =useState('')
// const i1=(e)=>setInp1(e.target.value)
// const i2=(e)=>setInp2(e.target.value)
// const rez = useMemo(()=>+inp1+ +inp2,[inp1,inp2])
// return (
//     <div>
//         <input onChange={i1} type="number"/>
//         <input onChange={i2} type="number"/>
//         <h1>{rez}</h1>
//     </div>
// )


//  2. Разработайте компонент, который выполняет факториал числа при вводе
//  значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
//  вычислений для разных введенных значений и отображать их без повторных
//  вычислений.
// const [inp,setInp] = useState('');
// const f = (e)=> setInp(e.target.value);
// const rez = useMemo(()=>{
//     let a = 1;
//     for(let i=1;i<=inp;i++){
//         a = a*i;
//     }
//     return a;
// })

// return (
//     <div>
//         <input type="number" onChange={f} />
//         <h1>{rez}</h1>
//     </div>
// )

//  3. Создайте компонент для отображения списка чисел от 1 до N, где N- число,
//  введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
//  суммуспискачиселтолько приизмененииN.
// const [inp,setInp] = useState(0);
// const f = (e)=>setInp(e.target.value);
// const rez = useMemo(()=>{
//     let sum = 0;
//     for(let i=1;i<=inp;i++){
//         sum +=i;
//     }
//     return sum;
// },[inp])

// return (
//     <div>
//         <input type="number" onChange={f} />
//         <h1>{rez}</h1>
//     </div>
// )

//  4. Напишите программу, которая принимает строку от пользователя и выводит ее в
//  обратном порядке. Используй хук useState для хранения строки и хук useMemo
//  для кэшированиярезультата.
// const [inp,setInp] = useState('');
// const f = (e)=>setInp(e.target.value);
// const rez = useMemo(()=>inp.split('').reverse().join(''),[inp])

// return (
//     <div>
//         <input type="text" onChange={f}/>
//         <h1>{rez}</h1>
//     </div>
// )

//  5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
//  должен быть получен с использованием useMemo при монтировании
//  компонента и кэширован для избегания повторных запросов к API при
//  обновлениидругихчастейкомпонента. https://api.ipify.org/?format=json
// const [ip,setIp] = useState('')
// const f = async ()=>{
//     const a = await axios.get('https://api.ipify.org/?format=json');
//     setIp(a.data.ip);
// }
// const rez = useMemo(()=>{f()
//     return ip
// },[])

// return (
//     <div>
//         <h1>{ip}</h1>
//     </div>
// )

}
export default App8
