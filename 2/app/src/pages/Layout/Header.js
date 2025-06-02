// 1/ Создать два уровня вложенности: App → Layout → Header, и получить значение из контекста в Header.

import React, { useContext } from "react";
import GlobalThis from "../../context";

function Header() {
    const context = useContext(GlobalThis);
    console.log(context); // Добавьте это для отладки
    const { firstName, age } = context;
    return (
        <div>
            <h1>{firstName}</h1>
            <h1>{age}</h1>
        </div>
    );
}

export default Header;