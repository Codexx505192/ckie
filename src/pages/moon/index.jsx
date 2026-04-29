import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";

export default function Page(){
    return(
        <>
        <section id="moon-page">
            <div className="container">
                <SideBar/>

             <div className="moon_block">
                <div className="moon_itm">
                    <img src="./moonp/moon.png" alt="moon" />
                </div>
             </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="moon_info">
                    <p className="txt80">
                        Луна — единственный естественный спутник Земля и самый близкий к нам космический объект.
                    </p>

                    <p className="txt81">
                         Основные факты
                    </p>

                    <ul className="ul8">
                        <li>
                            Расстояние до Земли: ~384 000 км
                        </li>
                        <li>
                            В 4 раза меньше Земли
                        </li>
                        <li>
                            Всегда повернута к нам одной стороной
                        </li>
                    </ul>
                </div>
            </div>
        </section>

         <section>
            <div className="container">
                <div className="moon_info">
                    {/* <p className="txt80">
                        Почему мы видим только одну сторону
                    </p> */}

                    <p className="txt81">
                         Почему мы видим только одну сторону
                    </p>

                    <ul className="ul8">
                        <li>
                            Луна вращается так, что
                        </li>
                        <li>
                           её вращение вокруг оси = времени обращения вокруг Земли
                        </li>
                        <li>
                          это называется синхронное вращение
                        </li>
                    </ul>
                </div>
            </div>
        </section>

          <section>
            <div className="container">
                <div className="moon_info">
                    {/* <p className="txt80">
                        Почему мы видим только одну сторону
                    </p> */}

                    <p className="txt81">
                      Фазы Луны
                    </p>

                    <p className="txt82">
                        Мы видим разные формы Луны:
                    </p>

                    <ul className="ul8">
                        <li>
                            новолуние
                        </li>
                        <li>
                            первая четверть
                        </li>
                        <li>
                          полнолуние
                        </li>
                        <li>
                        последняя четверть
                        </li>
                    </ul>
                </div>
            </div>
        </section>

          <section>
            <div className="container">
                <div className="moon_info">
                    {/* <p className="txt80">
                        Почему мы видим только одну сторону
                    </p> */}

                    <p className="txt81">
                       Температура
                    </p>

                    {/* <p className="txt82">
                        Мы видим разные формы Луны:
                    </p> */}

                    <ul className="ul8">
                        <li>
                            днём: до +120°C
                        </li>
                        <li>
                          ночью: до −170°C
                        </li>
                        <li>
                            потому что нет атмосферы
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="moon_info">
                    {/* <p className="txt80">
                        Почему мы видим только одну сторону
                    </p> */}

                    <p className="txt81">
                       Атмосфера
                    </p>

                    <p className="txt82">
                       Практически отсутствует:
                    </p>

                    <ul className="ul8">
                        <li>
                         нет воздуха
                        </li>
                        <li>
                          нет ветра
                        </li>
                        <li>
                          звуки не распространяются
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="moon_info">
                    {/* <p className="txt80">
                        Почему мы видим только одну сторону
                    </p> */}

                    <p className="txt81">
                        Поверхность
                    </p>

                    {/* <p className="txt82">
                       Практически отсутствует:
                    </p> */}

                    <ul className="ul8">
                        <li>
                            покрыта кратерами
                        </li>
                        <li>
                          есть «моря» (тёмные равнины из застывшей лавы)
                        </li>
                        <li>
                          много пыли (реголит)
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="moon_info">
                    {/* <p className="txt80">
                        Почему мы видим только одну сторону
                    </p> */}

                    <p className="txt81">
                         Влияние на Землю
                    </p>

                    <p className="txt82">
                       Луна:
                    </p>

                    <ul className="ul8">
                        <li>
                          вызывает приливы и отливы
                        </li>
                        <li>
                          стабилизирует климат
                        </li>
                        <li>
                         замедляет вращение Земли
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