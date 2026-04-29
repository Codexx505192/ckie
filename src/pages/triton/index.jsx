import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";

export default function Page(){
    return(
        <>
        <section id="triton-page">
            <div className="container">
                <SideBar/>

                <div className="triton_block">
                    <div className="triton_itm">
                        <img src="./trnt/triton1.png" alt="triton1" />
                    </div>

                    <div className="triton_itm">
                        <img src="./trnt/triton2.png" alt="triton1" />
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <SideBar/>

                <div className="triton_block">
                    <div className="triton_itm">
                        <img src="./trnt/triton2.png" alt="triton1" />
                    </div>

                      <div className="triton_itm">
                        <img src="./trnt/triton3.png" alt="triton1" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <SideBar/>

                <div className="triton_block">
                    <div className="triton_itm">
                        <img src="./trnt/triton4.png" alt="triton1" />
                    </div>

                    <div className="triton_itm">
                        <img src="./trnt/triton5.png" alt="triton1" />
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="triton_info">
                    <p className="txt70">
                        Тритон
                    </p>

                    <p className="txt71">
                        Тритон — крупнейший спутник планеты  <br />
                        Нептун и один из самых необычных   <br />
                        объектов внешней Солнечной системы. Он  <br />
                        отличается ретроградным (обратным)   <br />
                        движением вокруг планеты и активной   <br />
                        геологией, редкой для ледяных лун.
                    </p>

                    <p className="txt72">
                        Ключевые факты
                    </p>

                    <ul className="ul8">
                        <li>
                            Открыт: 1846 год, астроном Уильям Лассел
                        </li>
                        <li>
                            Орбитальное расстояние от Нептуна: ≈ 354 760 км
                        </li>
                        <li>
                            Диаметр: около 2700 км
                        </li>
                        <li>
                            Масса: 2,14 × 10²² кг
                        </li>
                        <li>
                            Температура поверхности: ≈ −235 °C
                        </li>
                        <li>
                            Плотность атмосферы: около 0,01 мбар (азот + метан)
                        </li>
                    </ul>

                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="origin_block">
                    <p className="txt72">
                        Происхождение и орбита
                    </p>



                    <p className="txt71">
                        Тритон считается захваченным объектом из  <br />
                        пояс Койпера, что объясняет его  <br />
                        ретроградное обращение. Такое движение  <br />
                        постепенно снижает его орбиту из-за   <br />
                        приливного трения: через миллиарды лет   <br />
                        спутник может быть разрушен гравитацией   <br />
                        Нептуна и образовать временные кольца.  <br />
                        Наклон оси (157°) приводит к резким сменам  <br />
                        сезонов, длящихся десятилетиями.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="geology_block">
                    <p className="txt72">
                        Геология и активность
                    </p>

                    <p className="txt71">
                        Поверхность Тритона почти лишена  <br />
                        кратеров и состоит из водяного льда и  <br />
                        силикатных пород. Данные зонда Voyager 2  <br />
                        (1989) показали наличие криовулканов,  <br />
                        выбрасывающих струи азота на высоту до 8  <br />
                        км. Это указывает на внутреннее тепло и,  <br />
                        возможно, подповерхностный океан.    <br />
                        Геоморфология включает хребты, долины и   <br />
                        полярные равнины из замёрзшего азота и  <br />
                        метана.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="atmoshere_block">
                    <p className="txt72">
                       Атмосфера и климат
                    </p>

                    <p className="txt71">
                    Атмосфера разрежена и изменчива,   <br />
                    испытывает сезонные колебания давления и  <br />
                    температуры. Наблюдения ESO с телескопа   <br />
                    VLT выявили следы угарного газа (CO) и   <br />
                    подтверждение «летнего» повышения  <br />
                    давления из-за испарения льдов. Один сезон   <br />
                    на Тритоне длится около 40 земных лет
                    </p>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="research_block">
                 <p className="txt72">
                       Исследования и значение
                    </p>

                    <p className="txt71">
                    После пролёта Voyager 2 Тритон остаётся  <br />
                    малоизученным. Современные миссии,  <br />
                    такие как New Horizons, использовали его  <br />
                    для калибровки камер, а новые   <br />
                    проекты рассматривают использование   <br />
                    атмосферы Тритона для аэрозахвата при  <br />
                    будущих миссиях к Нептуну.  <br />
                    Благодаря сходству с Плутон, Тритон служит  <br />
                    ключом к пониманию ледяных миров пояса   <br />
                    Койпера и эволюции внешней Солнечной   <br />
                    системы.
                    </p>   
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