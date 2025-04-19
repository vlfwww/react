import style from './style.module.css'
import img1 from './image/Vector.png' 
import img2 from './image/GT.png' 
import img3 from './image/youtube.png' 
function Footer(){
    return <div>
        <footer>
          <div className={style.top}>
            <div className={style.left}>
              <p>Home</p>
              <p>Textbook</p>
              <p>Statistics</p>
              <p>Sprint</p>
            </div>
            <div className={style.right}>
              <p>Alex</p>
              <p>Gabriel</p>
              <p>Marcus</p>
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.left}>
            <div><img src={img1}/></div>
            <div><img src={img2}/></div>
            <div><img src={img3}/></div>
            </div>
            <div className={style.right}>
              <p>©2021 Hschool. Project for Hschool.</p>
            </div>
          </div>
        </footer>
    </div>
}
export default Footer;