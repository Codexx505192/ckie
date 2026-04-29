import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";

export default function Page(){
    return(
        <>
        <section id="mercury-page">
            <div className="container">
                <SideBar/>

                <div className="mercury_block">
                    <div className="mercury_itm">
                        <img src="./mercur/mercury.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mercury_info">
                    <p className="txt75">
                        Меркурий — самая близкая к Солнце планета и одна из самых экстремальных.
                    </p>

                    <p className="txt76">
                        Основные факты
                    </p>

                    <ul className="ul8">
                        <li>
                            1-я планета от Солнца
                        </li>
                        <li>
                            Самая маленькая планета
                        </li>
                        <li>
                            Похожа на Луну по внешнему виду
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mercury_info">
                     <p className="txt76">
                        Температура — полный контраст
                    </p>

                    <ul className="ul8">
                        <li>
                          днём: до +430°C 🔥
                        </li>
                        <li>
                            ночью: до −180°C ❄️
                        </li>
                    </ul>

                    <p className="txt77">
                        Почему так:
                    </p>
                    <ul className="ul8">
                        <li>
                            почти нет атмосферы
                        </li>
                        <li>
                            тепло не удерживается
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mercury_info">
                  <p className="txt76">
                    Атмосфера
                  </p>

                    <p className="txt77">
                        Её практически нет:
                    </p>
                    <ul className="ul8">
                        <li>
                          очень разреженная
                        </li>
                        <li>
                           не защищает от радиации и метеоритов
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mercury_info">
                  <p className="txt76">
                    Поверхность
                  </p>

                    <p className="txt77">
                        Её практически нет:
                    </p>
                    <ul className="ul8">
                        <li>
                          покрыта кратерами
                        </li>
                        <li>
                           много следов от ударов астероидов
                        </li>
                        <li>
                            выглядит как Луна
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="mercury_info">
                  <p className="txt76">
                     День и год
                  </p>

                    {/* <p className="txt77">
                        Её практически нет:
                    </p> */}


                    <ul className="ul8">
                        <li>
                         Год: 88 земных дней
                        </li>
                        <li>
                          День (полный цикл): ~176 дней 
                        </li>
                        <li>
                            То есть день длится дольше года!
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mercury_info">
                  <p className="txt76">
                     Близость к Солнцу
                  </p>

                    <p className="txt77">
                     Солнце с поверхности Меркурия:
                    </p>


                    <ul className="ul8">
                        <li>
                        выглядит в 2–3 раза больше
                        </li>
                        <li>
                          светит намного ярче
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <Footer/>
            </div>
        </section>
        </>
    )
}