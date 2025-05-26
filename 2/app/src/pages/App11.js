//  1. Используйте useContext, чтобы сохранять данные о текущем пользователе.
//  Отобразите эту информациювкомпоненте,используяконтекст.
// import React, { use, useContext, useState } from "react";
// import GlobalThis from "../context";
// function App11() {
//     const data = useContext(GlobalThis)
//     return (
//         <div>
//             <h1>{data.name}</h1>
//              <h1>{data.age}</h1>
//         </div>
//     )
// }
// export default App11;

//  2. Создайте приложение, где пользователь сможет выбирать язык интерфейса
//  (например, английский или испанский). Используйте useContext для сохранения
//  текущего выбранного языкаипереводатекставвыбранныйязыквкомпонентах.
// import React, { use, useContext, useState } from "react";
// import GlobalThis from "../context";
// function App11() {
//     const {lang,setLang} = useContext(GlobalThis)
//     const dict = {
//         ru:'привет',
//         en:'hello',
//     }
//     return (
//         <div>
//            <h1>{dict[lang]}</h1>
//            <button onClick={()=>setLang('ru')}>to ru</button>
//            <button onClick={()=>setLang('en')}>to en</button>
//         </div>
//     )
// }
// export default App11;

//  3. Разработайте приложение для отображения текущей погоды. Используйте
//  useContext, чтобы хранить информацию о погоде (температура, влажность,
//  скорость ветра ит. д.). В компоненте отобразите эту информациюопогоде.

// import React, { use, useContext, useState } from "react";
// import GlobalThis from "../context";
// function App11() {
//     const {temp,v} = useContext(GlobalThis)
//     return (
//         <div>
//            <h1>{temp}</h1>
//            <h1>{v}</h1>
//         </div>
//     )
// }
// export default App11;

//  4. Разработайте простое приложение для переключения между светлой и темной
//  темами. Используйте useContext, чтобы хранить информацию о текущей теме
//  (светлая или темная). В компоненте отобразите интерфейс, который позволяет
//  пользователю переключатьсямеждутемами.

import React, { use, useContext, useState } from "react";
import GlobalThis from "../context";
function App11() {
    const {view,setView} = useContext(GlobalThis);
    const st = {
        color: view==='white'?'pink':'black',
        backgroundColor: view==='white'?'white':'brown',
    }
    return (
        <div>
           <h1 style={st}>hello</h1>
           <button onClick={()=>setView((view==='white')?'black':'white')}>Change</button>
        </div>
    )
}
export default App11;