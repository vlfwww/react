import style from './style.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
                <Link to={'/'} className={style.main}>Hschool</Link>
                <div className={style.right}>
                    <Link to={'/login'} className={style.login}>
                        Login →
                    </Link>
                    <Link to={'/signUp'} className={style.sign}>
                        Sign Up
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;