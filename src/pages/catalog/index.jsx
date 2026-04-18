import Ellips from "@/widjets/ellips/indes"
import Footer from "@/widjets/footer"
import Menu from "@/widjets/menu"
import SideBar from "@/widjets/sideBar"
import Link from "next/link"


export default function Page(){
    return(
        <>
        <section>
            <div className="container">
         <SideBar/>

            <section className="bnr">
             <Menu/>

            <div className="banner_catalog">
              <Ellips/>
            </div>
            </section>
        </div>
        </section>


            <section>
                <div className="container">
                    <div className="catalog_grid">
                    
                    <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>
                     
                      <div className="ct_itm">
                       <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                       </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>


                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>


                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>


                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>



                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>

                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>

                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>

                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>

                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>

                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>


                     <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>
                    </div>
                </div>
            </section>

         <section>
            <div className="container">
                <div className="cokk_block">
                 <p className="txt15">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</p>

                 <div className="galaxy_grid">
                    <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>


                    <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>


                    <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>



                    <div className="ct_itm">
                        <Link href="#">
                        <div className="ct_img">
                        <img src="./catalog/galaxy.png" alt="galaxy" />
                        </div>
                        </Link>

                        <p className="txt14">Сахарное печенье DINO 300 г</p>
                    </div>

                    
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