import SideBar from "@/widjets/sideBar";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="neptune-page">
          <div className="container">
            <SideBar/>

            <div className="neptune_box">
                <div className="neptune_itm">
                    <img src="./nptn/nptn_itm.png" alt="neptune" />
                </div>
            </div>
          </div>
        </section>

        <section>
            <div className="container">
                <div className="neptun_inf">
                    <p className="txt68">
                        Нептун — самая дальняя планета от Солнце и один из самых загадочных ледяных гигантов.
                    </p>

                    <p className="txt69">
                        Основные факты
                    </p>
                  
                    <ul className="ul7">
                        <li>
                            8-я планета от Солнца
                        </li>
                        <li>
                            Относится к ледяным гигантам (вместе с Уран)
                        </li>
                        <li>
                            Очень холодная: около −200°C
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container">
                <div className="neptune_inf2">
                    <p className="txt68">
                        Самые сильные ветры
                    </p>

                    <p className="txt69">
                       Нептун — рекордсмен по ветрам:
                    </p>
                  
                    <ul className="ul7">
                        <li>
                           скорость до 2000+ км/ч 
                        </li>
                        <li>
                           это быстрее скорости звука на Земле
                        </li>
                        <li>
                           настоящие космические ураганы
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="neptune_inf3">
                     <p className="txt68">
                         Почему он синий
                    </p>

                    <p className="txt69">
                       Цвет Нептуна:
                    </p>
                  
                    <ul className="ul7">
                        <li>
                            из-за метана в атмосфере
                        </li>
                        <li>
                            он поглощает красный свет и отражает синий
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="neptune_inf4">
                     <p className="txt68">
                        «Лёд» — не совсем лёд
                    </p>

                    <p className="txt69">
                       Хотя его называют ледяным гигантом:
                    </p>
                  
                    <ul className="ul7">
                        <li>
                          «лёд» там — это не лёд как у нас
                        </li>
                        <li>
                          это смесь воды, аммиака и метана под огромным давлением
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="neptune_inf5">
                    <p className="txt68">
                       Спутники
                    </p>

                    <p className="txt69">
                     Самый известный спутник:
                    </p>
                  
                    <ul className="ul7">
                        <li>
                        <Link href="/triton" className="lnk7">
                         Тритон
                        </Link>
                        </li>
                        <li>
                          движется в обратную сторону
                        </li>
                        <li>
                            имеет гейзеры (выбрасывает лёд и газ)
                        </li>
                        <li>
                            считается захваченным объектом
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="neptune_inf6">
                    <p className="txt69">
                    Время
                    </p>
                  
                    <ul className="ul7">
                        <li>
                        День: ~16 часов
                        </li>
                        <li>
                         Год: около 165 земных лет
                        </li>
                    </ul> 
                </div>
            </div>
        </section>
        </>
    )
}