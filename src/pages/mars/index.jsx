import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="mars-page">
            <div className="container">
                <SideBar/>

                <div className="mars_block">
                    <div className="mars_itm">
                        <img src="./mrs/mars1.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mars_info">
                    <p className="txt68">
                        Марс — самая «землеподобная» планета после Земли и главный кандидат для будущих миссий <br />
                         человека.
                    </p>

                    <p className="txt69">
                        Основные факты
                    </p>

                    <ul className="ul8">
                        <li>
                            4-я планета от <Link href="#" className="lnk7">Солнце</Link>
                        </li>
                        <li>
                            Называют «красной планетой»
                        </li>
                        <li>
                            Размер примерно в 2 раза меньше Земли
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mars_info">
                    <p className="txt69">
                        Почему Марс красный
                    </p>

                     <p className="txt68">
                        Поверхность покрыта:
                    </p>

                    <ul className="ul8">
                        <li>
                            оксидом железа (ржавчина)
                        </li>
                        <li>
                            поэтому он выглядит красным
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mars_info">
                  <p className="txt69">
                        Атмосфера
                    </p>

                    <ul className="ul8">
                        <li>
                           Очень тонкая (в основном CO₂)
                        </li>
                        <li>
                            Давление намного ниже, чем на Земле
                        </li>
                        <li>
                            Дышать там нельзя
                        </li>
                    </ul>  
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mars_info">
                     <p className="txt69">
                        Температура
                    </p>

                    <ul className="ul8">
                        <li>
                           Средняя около −60°C
                        </li>
                        <li>
                            Может опускаться до −140°C
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mars_info">
                     <p className="txt69">
                        Погода
                    </p>

                    <ul className="ul8">
                        <li>
                          Частые пылевые бури
                        </li>
                        <li>
                           Иногда охватывают всю планету
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="mars_info">
                     <p className="txt69">
                        Уникальные объекты
                    </p>

                    <ul className="ul8">
                        <li>
                          <Link href="#" className="lnk7">
                          Олимп
                          </Link>
                        </li>
                        <li>
                          самый высокий вулкан в Солнечной системе (~22 км)
                        </li>
                        <li>
                            <Link href="#" className="lnk7">
                            Долины Маринер
                            </Link>
                        </li>
                        <li>
                            гигантский каньон, длиннее Гранд-Каньона
                        </li>
                    </ul>
                </div>
            </div>
        </section>


         <section>
            <div className="container">
                <div className="mars_info">
                     <p className="txt69">
                        Спутники
                    </p>

                    <p className="txt68">
                        У Марса два маленьких спутника:
                    </p>

                    <ul className="ul8">
                        <li>
                        <Link href="#" className="lnk7">
                        Фобос
                        </Link>
                        </li>

                        <li>
                        <Link href="#" className="lnk7">
                        Деймос
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


         <section>
            <div className="container">
                <div className="mars_info">
                     <p className="txt69">
                        Исследование
                    </p>

                    <p className="txt68">
                      Марс активно изучают:
                    </p>

                    <ul className="ul8">
                        <li>
                        <Link href="#" className="lnk7">
                       Perseverance
                        </Link>
                        </li>

                        <li>
                        <Link href="#" className="lnk7">
                        Curiosity
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="mars_info">
                     <p className="txt69">
                        Можно ли жить на Марсе?
                    </p>

                    <p className="txt68">
                     Пока — нет, потому что:
                    </p>

                    <ul className="ul8">
                        <li>
                        нет воздуха
                        </li>

                        <li>
                        холодно
                        </li>
                        <li>
                            высокая радиация
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