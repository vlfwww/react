import React, { use, useState, useEffect, useRef, useMemo, useCallback } from "react";
import axios from "axios";
function App10() {
 
//  1.Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
//  счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
//  оптимизироватьобработчик кликанакнопке.

// const [value,setValue] = useState(0);
// const add = useCallback(()=>setValue(value+1),[value])
// return (
//   <div>
//     <p>{value}</p>
//     <button onClick={add}>Увеличить счетчик</button>
//   </div>
// )

//  2. Создайте компонент, который отображает список элементов с кнопками
//  "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
//  ИспользуйтеuseCallback, чтобы оптимизироватьфункциюудаленияэлемента.

//  const [arr, setArr] = useState(['aaa', 'ccc', 'ddd', 'eee']);

//   const del = useCallback((index) => {
//     setArr((prevInput) => prevInput.filter((_, i) => i !== index));
//   }, []);

//   return (
//     <div>
//       {arr.map((el, index) => (
//         <div key={index} style={{ marginBottom: '10px' }}>
//           <p>{el}</p>
//           <button onClick={() => del(index)}>Удалить</button>
//         </div>
//       ))}
//     </div>
//   );

//  3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
//  на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
//  ИспользуйтеuseCallback, чтобы оптимизировать функциюизменениястатуса.

// const [stat,setStat] = useState('Активный');
// const change = useCallback(()=>stat==='Активный'?setStat('Неактивный'):setStat('Активный'),[stat])
// return (
//   <div>
//     <p>{stat}</p>
//     <button onClick={change}>Изменить статус</button>
//   </div>
// )

//  4. Создайте компонент, который предоставляет пользователю выбор цвета из
//  списка. При выборе цвета, компонент должен отображать выбранный цвет на
//  странице. Используйте useCallback, чтобы оптимизировать функцию выбора
//  цвета.

//  const [selectedColor, setSelectedColor] = useState('');

//   const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

//   const chooseColor = useCallback((color) => {
//     setSelectedColor(color);
//   }, []);

//   return (
//     <div>
//       <h1>Выберите цвет</h1>
//       <div style={{ display: 'flex', gap: '10px' }}>
//         {colors.map((color) => (
//           <button
//             key={color}
//             onClick={() => chooseColor(color)}
//             style={{
//               backgroundColor: color,
//               color: '#fff',
//               border: 'none',
//               padding: '10px',
//               cursor: 'pointer',
//             }}
//           >
//             {color}
//           </button>
//         ))}
//       </div>
//       {selectedColor && (
//         <p style={{ marginTop: '20px', fontSize: '24px', color: selectedColor }}>
//           Выбранный цвет: {selectedColor}
//         </p>
//       )}
//     </div>
//   );

//  5. Создайте компонент, который позволяет пользователю добавлять и удалять
//  элементы из списка. Используйте useCallback, чтобы оптимизировать функции
//  добавленияиудаленияэлементов.

const [val, setVal] = useState('');
  const [arr, setArr] = useState([]);

  const up = useCallback((e) => setVal(e.target.value), []);
  
  const add = useCallback(() => {
    if (val) {
      setArr((prev) => [...prev, val]);
      setVal('');
    }
  }, [val]);

  const del = useCallback((index) => {
    setArr((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <input type="text" placeholder="Введите элемент" onChange={up} value={val} />
      <button onClick={add}>Добавить</button>
      <ul>
        {arr.map((el, index) => (
          <li key={index}>
            {el}
            <button onClick={() => del(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default App10;
