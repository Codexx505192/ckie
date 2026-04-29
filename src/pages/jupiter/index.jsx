import SideBar from "@/widjets/sideBar";

export default function Page(){
    return(
        <>
        <section id="jupiter-page">
          <div className="container">
            <SideBar/>

            <div className="jupiter_box">
               <div className="jptItm">
                <img src="./juptr/jpitm.png" alt="" />
               </div>
            </div>
          </div>
        </section>

        <section>
            <div className="container">
                <div className="jupiter_inf">
                    <p className="txt66">
                        Юпитер — это настоящий гигант среди планет. Он настолько большой, что в него поместились бы все  <br />
                        остальные планеты вместе взятые.
                    </p>

                    <p className="txt67">
                        Основные факты
                    </p>

                    <ul className="ul6">
                        <li>
                            Пятая планета от Солнце
                        </li>
                        <li>
                            Самая большая планета
                        </li>
                        <li>
                            Состоит в основном из газа (водород и гелий)
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="jupiter_inf2">
                    <p className="txt67">
                        Большое красное пятно
                    </p>

                    <ul className="ul6">
                        <li>
                           На Юпитере есть гигантский шторм — <br />
                           Большое красное пятно
                        </li>
                        <li>
                          бушует уже более 300 лет
                        </li>
                        <li>
                         больше Земли
                        </li>
                        <li>
                            это как огромный ураган, который никогда не заканчивается
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="jupiter_inf4">
                       <p className="txt67">
                        Поверхности нет
                        </p>

                    <ul className="ul6">
                        <li>
                           ты не сможешь «встать» на него
                        </li>
                        <li>
                          чем глубже — тем выше давление
                        </li>
                        <li>
                         в центре, возможно, есть твёрдое ядро
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="jupiter_inf_5">
                    <p className="txt67">
                        Погода
                     </p>

                    <ul className="ul6">
                        <li>
                           Сильнейшие ветры (до 600 км/ч)
                        </li>
                        <li>
                          Постоянные молнии
                        </li>
                        <li>
                         Огромные бури
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="jupiter_inf_6">
                     <p className="txt67">
                        Магнитное поле
                     </p>

                    <ul className="ul6">
                        <li>
                            У Юпитера самое мощное магнитное поле среди планет
                        </li>
                        <li>
                           оно опасно для космических аппаратов
                        </li>
                        <li>
                          создаёт сильную радиацию
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="jupiter_inf_7">
                    <p className="txt67">
                       Спутники
                     </p>

                    <ul className="ul6">
                        <li>
                            У Юпитера очень много лун (90+), самые известные:
                        </li>
                        <li>
                          Ио — самый вулканический объект
                        </li>
                        <li>
                         Европа — подо льдом может быть океан
                        </li>
                        <li>
                            Ганимед — самый большой спутник
                        </li>
                        <li>
                            Каллисто — весь в кратерах
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="jupiter_info_8">
                    <p className="txt67">
                       День и год
                     </p>

                    <ul className="ul6">
                        <li>
                            День: около 10 часов (очень быстро вращается)
                        </li>
                        <li>
                            Год: почти 12 земных лет
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