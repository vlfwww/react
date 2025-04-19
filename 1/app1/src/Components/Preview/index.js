import style from './style.module.css'
import img1 from './image/img1.svg'
import img2 from './image/img2.png'
function Preview(){
    return <div>
         <div className={style.preview}>
          <div className={style.left}>
            <p className={style.title}>E-COURSE PLATFORM</p>
            <p className={style.text}>Learning and teaching online, made easy.</p>
            <p className={style.addition}>Any subject, in any language, on any device, for all ages!</p>
            <p className={style.about}> About platform</p>
            <div className={style.students}>
              <div><img src={img1}/></div>
              <div>600</div>
              <div className={style.plus}>+</div>
            </div>
            <p className={style.st}>Students</p>
          </div>
          <div className={style.right}><img src={img2}/></div>
        </div>
    </div>
}
export default Preview;