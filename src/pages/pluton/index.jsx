import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="pluton-page">
            <div className="container">
                <SideBar/>

                <div className="pluton_block">
                    <div className="pluton_itm">
                        <img src="./pluto/pluton1.png" alt="pluton" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="pluton_info">
                    <p className="txt73">
                        Плутон — один из самых загадочных объектов на краю Солнечной системы. Раньше его считали  <br />
                         полноценной планетой, но потом «понизили в статусе».
                    </p>

                    <p className="txt74">
                        Основные факты
                    </p>

                    <ul className="ul8">
                        <li>
                            Находится очень далеко от Солнце
                        </li>
                        <li>
                            Сейчас считается карликовой планетой
                        </li>
                        <li>
                            Меньше Луны
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="pluton_info">
                   
                    <p className="txt74">
                        Почему Плутон не планета
                    </p>

                    <p className="txt73">
                        В 2006 году Международный астрономический союз решил:
                    </p>

                    <p className="txt73">
                        Чтобы быть планетой, нужно:
                    </p>

                    <ol className="ul8">
                        <li>
                           вращаться вокруг Солнца
                        </li>
                        <li>
                            быть круглым
                        </li>
                        <li>
                         «очистить» свою орбиту
                        </li>
                    </ol>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="pluton_info">
                   
                    <p className="txt74">
                       Температура
                    </p>

                    <ul className="ul8">
                        <li>
                          около −220°C
                        </li>
                        <li>
                         один из самых холодных объектов
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="pluton_info">
                   
                    <p className="txt74">
                        Поверхность
                    </p>

                    <ul className="ul8">
                        <li>
                         лёд из азота, метана и воды
                        </li>
                        <li>
                         есть равнины и горы
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="pluton_info">
                   
                    <p className="txt74">
                        Спутники
                    </p>

                    <ul className="ul8">
                        <li>
                         <Link href="#" className="lnk7">
                         Харон
                         </Link>
                        </li>
                        <li>
                         почти половина размера Плутона
                        </li>
                        <li>
                            иногда их называют двойной системой
                        </li>
                    </ul>
                </div>
            </div>
        </section>

         <section>
            <div className="container">
                <div className="pluton_info">
                   
                    <p className="txt74">
                        Орбита
                    </p>

                    <ul className="ul8">
                        <li>
                         Год = 248 земных лет 
                        </li>
                        <li>
                        Орбита сильно вытянута
                        </li>
                        <li>
                           иногда он ближе к Солнцу, чем Нептун
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