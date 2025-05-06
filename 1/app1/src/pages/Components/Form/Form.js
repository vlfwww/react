import style from "./Form.module.css";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import img from "./image/img1.png";
import Input from "../Input.js";
function Form(obj) {
  return (
    <div className="App">
      <div className={style.first}>
        <Header />
        <main>
          <div className={style.left}>
            <h1>{obj.title}</h1>
            <div>
              {obj.arr.map((el) => (
                <Input placeholder={el} />
              ))}
            </div>
            <button>{obj.title}</button>
          </div>
          <div className={style.right}>
            <img src={img}></img>
          </div>
        </main>
      </div>
      <div className={style.first}>
        <Footer />
      </div>
    </div>
  );
}

export default Form;
