import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";

export default function Page(){
    return(
        <>
        <section id="earth-page">
            <div className="container">
                <SideBar/>

                <div className="earth_block">
                    <div className="earth_itm">
                        <img src="./ear/earth.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="earth_info">
                    <p className="txt78">
                        Земля — наш дом и пока единственная известная планета, где есть жизнь.
                    </p>

                    <p className="txt79">
                         Основные факты
                    </p>

                    <ul className="ul8">
                     <li>
                        3-я планета от Солнце
                     </li>
                     <li>
                        Возраст: ~4.5 млрд лет
                     </li>
                     <li>
                        Единственная планета с известной жизнью
                     </li>
                    </ul>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="earth_info">
                 
                    <p className="txt79">
                         Вода — главная особенность
                    </p>

                    

                    <ul className="ul8">
                     <li>
                        ~71% поверхности покрыто водой
                     </li>
                     <li>
                        океаны, моря, реки
                     </li>
                     <li>
                      вода существует в 3 состояниях (жидкость, лёд, пар)
                     </li>
                    </ul>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="earth_info">
                 
                    <p className="txt79">
                         Атмосфера
                    </p>

                    <p className="txt78">
                        Состоит из:
                    </p>

                    <ul className="ul8">
                     <li>
                        азота (~78%)
                     </li>
                     <li>
                        кислорода (~21%)
                     </li>
                     <li>
                      защищает от радиации
                     </li>
                     <li>
                        удерживает тепло
                     </li>
                     <li>
                        позволяет дышать
                     </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="earth_info">
                 
                    <p className="txt79">
                         Температура
                    </p>

                    {/* <p className="txt78">
                        Состоит из:
                    </p> */}

                    <ul className="ul8">
                     <li>
                        Средняя: около +15°C
                     </li>
                     <li>
                        Подходит для жизни 
                     </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="earth_info">
                 
                    <p className="txt79">
                         Спутник
                    </p>

                    {/* <p className="txt78">
                        Состоит из:
                    </p> */}

                    <ul className="ul8">
                     <li>
                        Луна
                     </li>
                     <li>
                       влияет на приливы и отливы 
                     </li>
                     <li>
                        стабилизирует наклон Земли
                     </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="earth_info">
                 
                    <p className="txt79">
                         Магнитное поле
                    </p>

                    {/* <p className="txt78">
                        Состоит из:
                    </p> */}

                    <ul className="ul8">
                     <li>
                        защищает от солнечного ветра
                     </li>
                     <li>
                       не даёт атмосфере «улететь» в космос 
                     </li>
                    </ul>
                </div>
            </div>
        </section>

         <section>
            <div className="container">
                <div className="earth_info">
                 
                    <p className="txt79">
                        Жизнь
                    </p>

                    <p className="txt78">
                        На Земле есть:
                    </p>

                    <ul className="ul8">
                     <li>
                       миллионы видов растений и животных
                     </li>
                     <li>
                       люди 
                     </li>
                     <li>
                        сложные экосистемы
                     </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="earth_info">
                 
                    <p className="txt79">
                        Время
                    </p>

                    <p className="txt78">
                        На Земле есть:
                    </p>

                    <ul className="ul8">
                     <li>
                       День: 24 часа
                     </li>
                     <li>
                       Год: 365 дней
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