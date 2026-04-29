import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";

export default function Page(){
    return(
        <>
        <section id="uranus-page">
            <div className="container">
                <SideBar/>

                <div className="uranus_box">
                    <div className="uranus_itm">
                        <img src="./urns/uranus.png" alt="uranus" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="uranus_info">
                    <p className="txt86">
                        Уран — одна из самых странных планет: она буквально «лежит на боку».
                    </p>

                    <p className="txt87">
                         Основные факты
                    </p>

                    <ul className="ul8">
                        <li>
                            7-я планета от Солнце
                        </li>
                        <li>
                            Ледяной гигант (как Нептун)
                        </li>
                        <li>
                            Очень холодный
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="uranus_info">
                    {/* <p className="txt86">
                        Уран — одна из самых странных планет: она буквально «лежит на боку».
                    </p> */}

                    <p className="txt87">
                      Температура
                    </p>

                    <ul className="ul8">
                        <li>
                           около −224°C 
                        </li>
                        <li>
                         одна из самых холодных планет
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="uranus_info">
                    {/* <p className="txt86">
                        Уран — одна из самых странных планет: она буквально «лежит на боку».
                    </p> */}

                    <p className="txt87">
                       Цвет
                    </p>

                    <ul className="ul8">
                        <li>
                            Уран выглядит голубым из-за
                        </li>
                        <li>
                        метана в атмосфере
                        </li>
                        <li>
                         он поглощает красный свет
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="uranus_info">
                    {/* <p className="txt86">
                        Уран — одна из самых странных планет: она буквально «лежит на боку».
                    </p> */}

                    <p className="txt87">
                        Уникальное вращение
                    </p>

                    <ul className="ul8">
                        <li>
                          Самая необычная особенность
                        </li>
                        <li>
                        наклон почти 98°
                        </li>
                        <li>
                          планета вращается «на боку»
                        </li>
                        <li>
                            Это значит
                        </li>
                        <li>
                            полюса могут быть направлены прямо на Солнце
                        </li>
                        <li>
                            там могут быть долгие сезоны по 20+ лет
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="uranus_info">
                    {/* <p className="txt86">
                        Уран — одна из самых странных планет: она буквально «лежит на боку».
                    </p> */}

                    <p className="txt87">
                     Атмосфера
                    </p>

                    <ul className="ul8">
                        <li>
                          водород
                        </li>
                        <li>
                        гелий
                        </li>
                        <li>
                          метан
                        </li>
                        <li>
                        внутри — «лёд» (вода, аммиак, метан под давлением)
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="uranus_info">
                    {/* <p className="txt86">
                        Уран — одна из самых странных планет: она буквально «лежит на боку».
                    </p> */}

                    <p className="txt87">
                     Погода
                    </p>

                    <ul className="ul8">
                        <li>
                          сильные ветры
                        </li>
                        <li>
                        но выглядит «спокойнее», чем Нептун
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="uranus_info">
                    {/* <p className="txt86">
                        Уран — одна из самых странных планет: она буквально «лежит на боку».
                    </p> */}

                    <p className="txt87">
                     Кольца
                    </p>

                    <ul className="ul8">
                        <li>
                          сильные ветры
                        </li>
                        <li>
                        но выглядит «спокойнее», чем Нептун
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