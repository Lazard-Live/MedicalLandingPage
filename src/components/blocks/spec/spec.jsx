function Spec() {
    return (
        <div className="section spec" id={'spec'}>
            <div className="container spec__container">
                <div className="row spec__row">
                    <div className="col spec__text">
                        <span>Ревматология</span> - область медицины, в компетенцию которой входит диагностика, лечение
                        и профилактика таких заболеваний, как остеоартрит, спондилоартриты, остеопороз, ревматоидный
                        артрит, псориатический артрит, подагра, реактивные артриты, системная красная волчанка, болезнь
                        Шегрена, системные васкулиты, ревматическая миалгия, острая ревматическая лихорадка, феномен
                        Рейно. Имею большой опыт работы по ведению и лечению этих пациентов. Данные заболевания могут
                        возникать у пациентов любого возраста. Еще сравнительно недавно такие заболевания, как
                        остеоартроз, остеопороз считались болезнями пожилых людей, однако в последние десятилетия
                        тревожные симптомы этих и других заболеваний все чаще диагностируют и у лиц молодого возраста.
                    </div>
                </div>
            </div>
            <div className="container-fluid spec__container-fluid spec__container-fluid_color">
                <div className="container">
                    <div className="row spec__row">
                        <div className="col spec__text">
                            <h2 className="subtitle spec__subtitle">Когда нужно обратиться к ревматологу?</h2>
                            <h3 className="subtitle spec__subtitle-list">
                                Обратиться к ревматологу необходимо если у вас наблюдаются следующие симптомы:
                            </h3>
                            <ul className="spec__list">
                                <li className="spec__item">
                                    скованность в суставах по утрам, которая исчезает через некоторое время
                                </li>
                                <li className="spec__item">
                                    боль в суставе, отек, покраснение, увеличение его в объеме, хруст в суставах
                                </li>
                                <li className="spec__item">боли в мышцах, слабость в конечностях</li>
                                <li className="spec__item">появление на коже высыпаний, узелковых образований</li>
                                <li className="spec__item">
                                    нарушение чувствительности и внешнего вида кожи, появление на ней очагов уплотнения
                                </li>
                                <li className="spec__item">
                                    субфебрильная температура тела, которая держится в течение длительного времени
                                </li>
                                <li className="spec__item">
                                    стрессовые переломы костей, медленное формирование костной мозоли
                                </li>
                                <li className="spec__item">
                                    появление на коже растяжек при отсутствии беременности и потери веса
                                </li>
                                <li className="spec__item">
                                    острые головные боли в сочетании с повышенной потливостью и повышенной температурой
                                    тела
                                </li>
                                <li className="spec__item">
                                    утомляемость, общая слабость в течение длительного времени
                                </li>
                                <li className="spec__item">частые инфекционные заболевания и ангины в анамнезе</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="spec__text spec__info">
                                В профилактических целях рекомендуется посещать ревматолога людям с наследственной
                                предрасположенностью к ревматическим заболеваниям.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spec;
