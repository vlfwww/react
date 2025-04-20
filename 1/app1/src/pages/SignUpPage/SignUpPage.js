import style from './SignUpPage.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import img  from './image/img1.png'
function LoginPage() {
  return (
    <div className="App">
      <div className={style.first}>
        <Header/>
      <main>
        <div className={style.left}>
          <h1>Sign Up</h1>
          <div>
            <input placeholder='Enter name'></input>
          </div>
          <div>
            <input placeholder='Enter userName'></input>
          </div>
          <div>
            <input placeholder='Enter email'></input>
          </div>
          <div>
            <input placeholder='Enter password'></input>
          </div>
          <button>Sign Up</button>
        </div>
        <div className={style.right}>
          <img src={img}></img>
        </div>
      </main>
      </div>
      <div className={style.first}>
        <Footer/>
      </div>
    </div>
  );
}

export default LoginPage;
