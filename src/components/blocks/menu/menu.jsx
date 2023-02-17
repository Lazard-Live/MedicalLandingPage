function Menu() {
    return (
        <div className={'menu'}>
            <div className="menu__logo">
                <a href="#">
                    <img className='menu__logo-img' src="public/img/logo.png" alt="Битенская Ирина"/>
                </a>
            </div>

            <ul className={'menu__list'}>
                <li className={'menu__item'}>
                    <a href="" className="">
                        Специализация
                    </a>
                </li>
                <li className={'menu__item'}>
                    <a href="" className="">
                        Обо мне
                    </a>
                </li>
                <li className={'menu__item'}>
                    <a href="" className="">
                        Контакты
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu
