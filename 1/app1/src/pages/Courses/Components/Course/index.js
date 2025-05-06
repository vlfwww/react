import style from './style.module.css';

function Course(obj) {
    return (
        <div className={style.wrapper}>
            <img src={obj.img} alt="img" />
            <div className={style.right}>
                <h1>{obj.title}</h1>
                <p>{obj.discription}</p>
            </div>
        </div>
    );
}

export default Course;