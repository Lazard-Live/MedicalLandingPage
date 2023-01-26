import {useState} from 'react'

function Menu() {

    return (
        <div className={'menu'}>
            <div className="menu__logo">
                <a href="src/components/blocks/menu#" className="menu__logo_link">Битенская Ирина</a>
            </div>

            <ul className={'menu__list'}>
                <li className={'menu__item'}>Специализация</li>
                <li className={'menu__item'}>Обо мне</li>
                <li className={'menu__item'}>Контакты</li>
            </ul>
        </div>
    )
}

export default Menu
