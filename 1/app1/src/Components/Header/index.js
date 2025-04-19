import style from './style.module.css'
function Header(){
    return <div>
        <header>
                <p>Hschool</p>
                <div className={style.right}>
                  <p>Login →</p>
                  <p className={style.sign}>Sign Up</p>
                </div>
              </header>
    </div>
}
export default Header;