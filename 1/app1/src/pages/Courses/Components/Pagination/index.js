import style from './style.module.css';

function Pagination(obj) {
    return (
        <div className={style.one}>{obj.text}</div>
    );
}

export default Pagination;