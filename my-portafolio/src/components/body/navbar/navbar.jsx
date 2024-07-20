import style from './navbar.module.css'

function Navbar(){

    return(
        <nav>
            <ul >
                <li><a className={style.active} href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Resume</a></li>
            </ul>
            <ul>
                <li className={style.name}>
                    <h5>Yadiel Cruzado</h5>
                    <div>Software developer | Full Stack Developer</div>
                </li>
            </ul>
            <ul >
                <li><a href="">Portafolio</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;