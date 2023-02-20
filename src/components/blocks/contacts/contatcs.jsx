function Contacts() {
    return (
        <div id="contacts" className="section">
            <div className="contacts">
                <div className="container">
                    <h2 className="title title_md contacts__title" id="contacts">
                        Как со мной связаться?
                    </h2>
                    <div className="row">
                        <div className="col contacts__text">
                            <div className="">
                                В настоящее время получаю массу сообщений от моих пациентов, которые не могут решить
                                проблемы со своим здоровьем в сегодняшних непростых условиях. Поэтому, если у вас есть
                                необходимость в моей помощи как врача-специалиста, я могу вам оказывать ее Online.
                            </div>

                            <div className="">
                                Записаться на Online-консультацию вы можете, написав в мессенджер WhatsApp, Viber,
                                Telegram и по номеру телефона <b>+79113347506</b>
                            </div>

                            <div className="">
                                При записи на консультацию необходимо указать:
                                <ol>
                                    <li>ФИО, год рождения, страна проживания</li>
                                    <li>Краткое описание проблемы/вопроса</li>
                                    <li>Удобное для вас время консультации</li>
                                </ol>
                            </div>
                            <div>
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
