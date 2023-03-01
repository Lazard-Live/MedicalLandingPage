function Contacts() {
    return (
        <div id="contacts" className="section">
            <div className="container">
                <div className="contacts">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title title_md contacts__title" id="contacts">
                                Как со мной связаться?
                            </h2>
                            <div className="text">
                                Записаться на Online-консультацию вы можете, написав в мессенджер WhatsApp, Viber,
                                Telegram и по номеру телефона.
                            </div>
                        </div>
                        <div className="col-12 text contacts__wrap-tel">
                            <a href="tel:+79113347506" className="contacts__tel">
                                +7-911-334-75-06
                            </a>
                        </div>
                        <div className="col-12">
                            <div className="text">
                                Я в настоящее время получаю массу сообщений от моих пациентов, которые не могут решить
                                проблемы со своим здоровьем в сегодняшних непростых условиях. Поэтому, если у вас есть
                                необходимость в моей помощи как врача-специалиста, я могу вам оказывать ее Online. При
                                записи на консультацию необходимо указать:
                                <ol>
                                    <li>ФИО, год рождения, страна проживания</li>
                                    <li>Краткое описание проблемы/вопроса</li>
                                    <li>Удобное для вас время консультации</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="text">
                                Если у вас есть возможность, делаете клинические анализы крови и мочи, биохимический
                                анализ крови.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
