function Faq() {
    return (
        <div id="faq" className="section">
            <div className="faq">
                <div className="container-fluid root__container-fluid-primary-color">
                    <div className="container">
                        <h3 className="subtitle faq__subtitle">Как проходит консультация?</h3>

                        <div className="row">
                            <div className="col text">
                                <div>
                                    В оговоренное время мы встречаемся в мессенджере или по телефону и детально
                                    обсуждаем вашу проблему. После встречи я пересылаю вам консультацию и назначения.
                                    Если вы находитесь за рубежом, назначения лекарственных препаратов будут сделаны на{' '}
                                    <u>латыни</u>, принятой во всем медицинском мире. По результатам лечения и
                                    обследования мы запланируем повторную консультацию для контроля вашего состояния.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq__end">Буду рада вам помочь!</div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
