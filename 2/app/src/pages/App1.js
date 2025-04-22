// import img from '../1.jpg'
function App1(){ 
//  1. На входе статичный массив чисел. Отобразить на странице только чётные числа, каждое в 
// теге <li>.
    // const arr=[1,2,3,4,5,6];
    // return(<div>{arr.filter(el=>el%2===0).map(el=><li>{el}</li>)}</div>);

//  2. На входе статичный массив строк. Отфильтровать и отобразить только те строки, длина 
// которых больше 5 символов. Вывести в виде списка.

// const arr=['gh','sdfghjkl','f','ssssss'];
//     return(<div>{arr.filter(el=>el.length>5).map(el=><li>{el}</li>)}</div>);

//  3. На входе массив чисел. Отобразить сумму всех чисел на странице в теге <h3>.

// const arr=[1,2,3,4,5,6];
//     return(<h3>{arr.reduce((el,sum)=>el+sum)}</h3>);

//  4. На входе массив строк. Преобразовать каждую строку в верхний регистр и отобразить на 
// странице.

// const arr=['gh','sdfghjkl','f','ssssss'];
//     return(<div>{arr.map(el=><li>{el.toUpperCase()}</li>)}</div>);

//  5. На входе массив булевых значений [true, false, true...]. Отобразить на странице в виде 
// (если true) и (если false).

// const arr = [true, false, true, true];
//     return (
//         <div>{arr.map(el => {
//             if(el) return <h3>v</h3>
//                 else return <h3>x</h3>}
//             )}
//         </div>
//     );

// 6. На входе массив дат в формате строки. Отобразить только те, которые позже 2020 года.

// const arr = ['12-12-2021', '13-09-2019', '11-05-2025'];
//     return (
//         <div>
//             {arr.filter(el => Number(el.slice(el.length - 4, el.length)) > 2020).map(el => <h3>{el}</h3>)}
//         </div>
//     )

//  7. На входе массив из строк и чисел. Отобразить строки с классом text, а числа с классом 
// number.

// const arr = ['fsdf', 1234, '123144', 'fsdfsdfsdf'];
//     return (<div>
//         {arr.map(el => {
//             if(isNaN(el)) return <p className='text'>{el}</p>
//             else return <p className='number'>{el}</p>
//         })}
//     </div>
//     )

//  8. На входе массив имён. Отобразить приветствие для каждого имени в формате: "Привет, 
// [имя]!" в теге <p>.

//  const arr = ['Илья', 'Ника', 'Слава', 'Ваня', 'Аня'];
    // return (
    //     <div>
    //         {arr.map(el => <p>Привет, {el}</p>)}
    //     </div>
    // )

// 9. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и 
// отобразить на странице 

// const arr=[1,2,3,4,5,6];
//     return(<div>{arr.map(el=><li>{el*el}</li>)}</div>);

// 10. На входе статичный массив чисел. Ваша задача найти корень каждого числа и отобразить на 
// странице в виде h1

// const arr=[1,2,3,4,5,6];
//     return(<div>{arr.map(el=><li>{Math.sqrt(el)}</li>)}</div>);

//  11. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице 
// только те строки, которые содержат знак @

// const arr = ['sadfghjk@','hshhhs','@'];
// return (
//     <div>{arr.filter(el=>el.includes('@')).map(el=><li>{el}</li>)}</div>);

//  12. На входе статичный массив строк. Ваша задача отобразить на странице все строки массива, 
// а также картинку. Каждая итерация будет возвращать 
// <div>
//  <p>el</p>
//  <img/>
//  </div>

//  const arr = ['fsdf', 'fsqwefsdf', 'fsdfasdf', 'fad'];
    
//     return (
//         <div>{arr.map(el => <div>
//             <p>{el}</p>
//             <img src={img}/>
//         </div>)}</div>
//     );

//  13. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае 
// числа четность и нечетность текущего значения в параграфе, в случае строки отобразить 
// саму строку в параграфе

// const arr = [1,'sss','ssssss',4];
// let i=1;
// return (
//     <div>{arr.filter(function(el){
//         if(!isNaN(el) && i%2!=0) { 
//             i++ 
//             return <li>{el}</li>
//         }
//         else if(isNaN(el)) return <li>{el}</li>
//     }
//     )}</div>
// )

//  14. На входе массив из объектов. каждый объект содержит title с названием фильма и  
// description с кратким описанием фильма. В h1 отобразить каждый title, в p - description

 // const arr = [
    //     {title: 'dasd', description:'asfasdfasfdasdf'},
    //     {title: '12314', description:'ssdsdfgsdfgfasfdasdf'},
    //     {title: 'gsdfglsdlf', description:'asfgdsfgsoi[jgsrjtgknsfgb'}
    // ]

    // return (
    //     <div>{arr.map(el => <div><h1>{el.title}</h1><p>{el.description}</p></div>)}</div>
    // )

// 15.
//  На входе массив объектов { city: string, population: number }. Отобразить города, где 
// население больше 1 млн.

// const arr = [
//         { city: 'Гомель', population: 1200000 },
//         { city: 'Минск', population: 2400000 },
//         { city: 'Витебск', population: 800000 }
//     ]
// return (
//     <div>{arr.filter(el=>el.population>1000000).map(el=>el.city)}</div>
// )

//  16. На входе массив чисел. Отобразить числа, которые делятся на 3 без остатка, в теге <span>.

// const arr =[1,2,3,4,5,6]
//     return (
//         <div>{arr.filter(el => el % 3 == 0).map(el => <span>{el} </span>)}</div>
//     )

//  17. На входе массив строк. Если строка содержит слово "JS" — отобразить её, иначе пропустить.

// const arr = ['JSfghjkl','gdhjcJS','dfghjk'];
// return (
//     <div>{arr.filter(el=>el.includes('JS')).map(el => <span>{el} </span>)}</div>
// )
   
//  18. На входе массив объектов { task: string, completed: boolean }. Отобразить все задачи. 
// Выполненные —зачёркнутыми.

// const arr = [
//         { task: '1', completed: true },
//         { task: '2', completed: false },
//         { task: '3', completed: true }
//     ]

//     return (
//         <div>{arr.map(el => {
//             if(el.completed) return <s>{el.task}</s>
//             return <p>{el.task}</p>
//         })}</div>
//     )

//  19. На входе массив чисел. Каждое число возвести в куб и отобразить на странице в <h4>.

// const arr=[1,2,3,4,5,6];
//     return(<div>{arr.map(el=><li>{el*el*el}</li>)}</div>);

//  20. На входе массив строк. Строки могут быть в разном регистре. Отобразить только уникальные 
// строки в нижнем регистре, отсортированные по алфавиту.

// const arr = ['ssS', 'sss', 'wwww', 'fged', 'aaa', 'wwww'];
// const result = [];
// for (let el of arr) {
//     const lowerEl = el.toLowerCase();
//     if (!result.includes(lowerEl) && arr.filter(str => str.toLowerCase() === lowerEl).length === 1) {
//         result.push(lowerEl);
//     }
// }
// return (
//     <div>{result.sort().map((str, index) => <div key={index}>{str}</div>)}</div>
// );

//  21. На входе массив чисел. Разбить их на два массива: положительные и отрицательные. 
// Отобразить оба списка на странице.

    // const arr = [1, -3, 4, -4, 1, -123];
    // const pol = [];
    // const neg = [];
    // for(let el of arr){
    //     if(el > 0) pol.push(el)
    //     else neg.push(el)
    // }

    // return(
    //     <div>
    //         <div>
    //             {pol.map(el => <h4>{el}</h4>)}
    //         </div>
    //         <div>
    //             {neg.map(el => <h4>{el}</h4>)}
    //         </div>
    //     </div>
    // )

//  22. На входе массив дат (строк). Отобразить ближайшую к сегодняшнему дню дату. 
// Использовать new Date() и сравнение по времени.

const arr = ['2025-04-25', '2025-04-20', '2025-04-23', '2025-04-27'];
const today = new Date();
let result = null;

for (let el of arr) {
    const date = new Date(el);
    if (date >= today) {
        if (!result || date < result) {
            result = date;
        }
    }
}

return (
    <div>
        {result ? result.toDateString() : 'Нет ближайшей даты'}
    </div>
);

}
export default App1;