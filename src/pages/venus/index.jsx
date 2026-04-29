import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section>
            <div className="container">
                <SideBar/>
                
                <div className="venus_box">
                    <div className="v_img">
                        <img src="./kids/venus.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container">
                <div className="venus_inf">
                    <p className="txt55">
                        Венера — одна из самых интересных и одновременно опасных планет в нашей Солнечной системе. Её  <br/> 
                        часто называют «сестрой Земли», но на деле условия там совершенно адские.
                    </p>

                    <p className="txt56">
                     Основные факты
                    </p>

                    <ul className="ul4">
                        <li>Вторая планета от Солнце</li>
                        <li>Почти такая же по размеру, как Земля</li>
                        <li>День на Венере длится дольше года (!)</li>
                    </ul>


                    <div className="venus_ver_2">
                        <p className="txt56">
                            Почему Венера такая горячая
                        </p>


                        <p className="txt55">
                            Температура на поверхности — около +470°C. Это даже больше, чем на Меркурий, хотя он ближе к <br />
                            Солнцу.
                        </p>


                        <p className="txt56">
                            Причина — сильный парниковый эффект:
                        </p>


                        <ul className="ul4">
                        <li>атмосфера состоит почти полностью из углекислого газа (CO₂)</li>
                        <li>плотные облака удерживают тепло</li>
                        <li>тепло не может «выйти» обратно в космос</li>
                    </ul>
                    </div>


                     <div className="venus_ver_3">
                        <p className="txt56">
                             Атмосфера и поверхность
                        </p>


                        <p className="txt55">
                            Температура на поверхности — около +470°C. Это даже больше, чем на Меркурий, хотя он ближе к <br />
                            Солнцу.
                        </p>


                        <p className="txt56">
                            Причина — сильный парниковый эффект:
                        </p>


                        <ul className="ul4">
                        <li>Давление в 90 раз больше, чем на Земле (как на глубине океана ~1 км)</li>
                        <li>Облака состоят из серной кислоты</li>
                        <li>Частые вулканы и лавовые равнины</li>
                        </ul>
                        
                    </div>
                    

                    <div className="venus_ver_4">
                        <p className="txt56">
                             Странное вращение
                        </p>


                        <ul className="ul4">
                        <li>Венера вращается в обратную сторону (ретроградно)</li>
                        <li>Солнце там встаёт на западе и заходит на востоке</li>
                        </ul>
                        
                    </div>

                    <div className="venus_ver_5">
                        <p className="txt56">
                            Почему она яркая на небе
                        </p>

                        <div className="txt55">
                            Венера — самый яркий объект после Луны. Её называют:
                        </div>

                         <ul className="ul4">
                        <li>«утренняя звезда»</li>
                        <li>«вечерняя звезда»</li>
                        </ul>
                        
                    </div>

                    
                    <div className="venus_ver_6">
                          <p className="txt56">
                             Исследования
                        </p>

                        <p className="txt55">
                           Венеру изучали многие миссии, например:
                        </p>

                         <ul className="ul4">
                        <li>
                            <Link href="/ussr" className="lnk7">
                            Венера (программа СССР)
                            </Link>
                        </li>
                        
                         <li>
                            <Link href="#" className="lnk7">
                            Magellan
                            </Link>
                        </li>
                        </ul>
                    </div>
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