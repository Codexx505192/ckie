import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";

export default function Page() {
    return(
        <>
        <section id="saturn-page">
            <div className="container">
                <SideBar/>

                <div className="saturn_box">
                    <div className="saturn_itm">
                        <img src="./strn/saturn.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container">
                <div className="saturn_bi">
                    <p className="txt83">
                        Сатурн — одна из самых красивых планет благодаря своим знаменитым кольцам.
                    </p>

                    <p className="txt84">
                        Основные факты
                    </p>

                    <ul className="ul8">
                        <li>
                            6-я планета от Солнце
                        </li>
                        <li>
                            Газовый гигант (как Юпитер)
                        </li>
                        <li>
                            Вторая по размеру планета
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="saturn_bi">
                    {/* <p className="txt83">
                        Сатурн — одна из самых красивых планет благодаря своим знаменитым кольцам.
                    </p> */}

                    <p className="txt84">
                       Кольца Сатурна
                    </p>

                    <p className="txt85">
                        Самая известная особенность:
                    </p>

                    <ul className="ul8">
                        <li>
                         состоят из льда, камней и пыли
                        </li>
                        <li>
                         простираются на сотни тысяч км
                        </li>
                        <li>
                        при этом очень тонкие
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="saturn_bi">
                    {/* <p className="txt83">
                        Сатурн — одна из самых красивых планет благодаря своим знаменитым кольцам.
                    </p> */}

                    <p className="txt84">
                       Состав
                    </p>

                    <p className="txt85">
                     Сатурн состоит в основном из:
                    </p>

                    <ul className="ul8">
                        <li>
                        водорода
                        </li>
                        <li>
                         гелия
                        </li>
                        <li>
                         у него нет твёрдой поверхности
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="saturn_bi">
                    {/* <p className="txt83">
                        Сатурн — одна из самых красивых планет благодаря своим знаменитым кольцам.
                    </p> */}

                    <p className="txt84">
                        Очень лёгкий (для своих размеров)
                    </p>

                    <p className="txt85">
                     Сатурн настолько «лёгкий», что:
                    </p>

                    <ul className="ul8">
                        <li>
                        его плотность меньше воды 
                        </li>
                        <li>
                             теоретически он мог бы плавать (если бы было такое огромное «море»)
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="saturn_bi">
                    {/* <p className="txt83">
                        Сатурн — одна из самых красивых планет благодаря своим знаменитым кольцам.
                    </p> */}

                    <p className="txt84">
                       Погода
                    </p>

                    {/* <p className="txt85">
                     Сатурн настолько «лёгкий», что:
                    </p> */}

                    <ul className="ul8">
                        <li>
                        сильные ветры до 1800 км/ч 
                        </li>
                        <li>
                           огромные штормы
                        </li>
                        <li>
                            на северном полюсе есть шестигранный ураган
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="saturn_bi">
                    {/* <p className="txt83">
                        Сатурн — одна из самых красивых планет благодаря своим знаменитым кольцам.
                    </p> */}

                    <p className="txt84">
                        Спутники
                    </p>

                    <p className="txt85">
                     У Сатурна 140+ спутников, самые интересные:
                    </p>

                    <ul className="ul8">
                        <li>
                        Титан 
                        </li>
                        <li>
                           плотная атмосфера
                        </li>
                        <li>
                            есть озёра (но из метана!)
                        </li>
                        <li>
                            Энцелад
                        </li>
                        <li>
                            выбрасывает гейзеры воды
                        </li>
                        <li>
                            подо льдом может быть океан
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="saturn_bi">

                    <p className="txt84">
                        Время
                    </p>


                    <ul className="ul8">
                        <li>
                        День: ~10.5 часов 
                        </li>
                        <li>
                           Год: ~29 земных лет
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