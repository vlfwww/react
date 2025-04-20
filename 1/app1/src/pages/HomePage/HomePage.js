import style from './HomePage.module.css'
import img3 from './image/img3.png'
import img4 from './image/img4.png'
import img5 from './image/img5.png'
import img6 from './image/img6.png'
import img7 from './image/img7.png'
import Header from '../Components/Header'
import Preview from './Components/Preview'
import Footer from '../Components/Footer'
function HomePage() {
  return (
    <div className="App">
      <div className={style.first}>
        <Header/>
      <main>
       <Preview/>
      </main>
      </div>
      <div className={style.learning}>
        <div className={style.left}>
          <img src={img3}/>
        </div>
        <div className={style.right}>
          <h1>Learn a language in a playful way</h1>
          <p>Make learning programming languages more fun with mini-games</p>
          <div className={style.group}>
            <img src={img4}/>
            <img src={img5}/>
          </div>
        </div>
      </div>
      <div className={style.first}>
        <div className={style.increase}>
          <div className={style.left}>
            <h1>Increase your knowledge</h1>
            <p>Traditional and new effective approaches to learning languages</p>
            <button>Textbook →</button>
          </div>
          <div className={style.right}>
            <img src={img6}/>
          </div>
        </div>
      </div>
      <div className={style.progress}>
      <div className={style.left}>
          <img src={img7}/>
        </div>
        <div className={style.right}>
          <h1>Watch your progress every day</h1>
          <p>Save statistics on your achievements and mistakes</p>
          <div className={style.group}>
            <button>Statistics →</button>
          </div>
        </div>
      </div>
      <div className={style.first}>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
