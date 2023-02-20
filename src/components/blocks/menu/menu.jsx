function Menu() {
    return (
        <div className={'menu'}>
            <a href="#" className="menu__logo menu__logo-wrap">
                <img className="menu__logo-img" src="public/img/logo.png" alt="Битенская Ирина" />
            </a>

            <ul className={'menu__list'}>
                <li className={'menu__item'}>
                    <a href="#spec" className="menu__link">
                        Специализация
                    </a>
                </li>
                <li className={'menu__item'}>
                    <a href="#about" className="menu__link">
                        Обо мне
                    </a>
                </li>
                <li className={'menu__item'}>
                    <a href="#contacts" className="menu__link">
                        Контакты
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
