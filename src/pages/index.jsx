import CompanyBlock from "@/shared/companyBlock";
import PartnersBlock from "@/shared/partnersBlock";
import Footer from "@/widjets/footer";
import Menu from "@/widjets/menu";
import SideBar from "@/widjets/sideBar";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
     <section>
      <div className="container">
        <div className="banner">
          <SideBar/>

          <div className="banner_right">

           <Menu/>
            <img src="./img/banner.png" alt="banner" />
          </div>
        </div>
      </div>
     </section>

     <section>
      <div className="container">
        <div className="block_grid">
          <div className="lm">
           <button className="btn">
            <Link href="#" className="lnk2" >
            Dolce Dimineața
            </Link>
           </button>
          </div>

          <div className="lm lm2">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Dolce Dimineața
            </Link>
           </button>
          </div>

          <div className="lm lm3">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            DINO
            </Link>
           </button>
          </div>

          <div className="lm lm4">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Champion
            </Link>
           </button>
          </div>

          <div className="lm lm5">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Galaxy
            </Link>
           </button>
          </div>

          <div className="lm lm6">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Galaxy
            </Link>
           </button>
          </div>

          <div className="lm lm7">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Galaxy
            </Link>
           </button>
          </div>
        </div>
      </div>
     </section>

     <section>
      <div className="container">
        <div className="ingredients_block">
          <p className="txt2">Мы самые вкусные</p>

          <div className="ingredients_grid">
            <div className="lmg">
            <div className="lmg_left">
              <p className="txt3">Качественные ингредиенты</p>

              <p className="txt4">
                Из отборного зерна и <br />
                высококачественных ингредиентов мы с <br />
                 любовью и заботой создаем продукты <br />
                  «AMI»
              </p>
            </div>

            <div className="lmg_right">
              <img src="./img/lmgr.png" alt="" />
            </div>
            </div>


             <div className="lmg">
            <div className="lmg_right">
              <img src="./img/ami.png" alt="" />
            </div>

            <div className="lmg_left lft2s">
              <p className="txt3s">Качественные ингредиенты</p>

              <p className="txt4s">
                Из отборного зерна и <br />
                высококачественных ингредиентов мы с <br />
                 любовью и заботой создаем продукты <br />
                  «AMI»
              </p>
            </div>
            </div>


            <div className="lmg">
            <div className="lmg_left">
              <p className="txt3">Подходит для детей</p>

              <p className="txt4">
                Наше печенье не только источник <br />
                необходимых микроэлементов, но и  <br />
                источник развития для вашего  <br />
                 ребенка
              </p>
            </div>

            <div className="lmg_right">
              <img src="./img/child.png" alt="" />
            </div>
            </div>

            <div className="lmg">
            <div className="lmg_right">
              <img src="./img/recipe.png" alt="" />
            </div>

            <div className="lmg_left ry">
              <p className="txt3s">Особый рецепт</p>

              <p className="txt4s">
                Печенье “AMI” готовится по особенному <br />
                рецепту, что даст возможность ощутить   <br />
                 себя в гостях у бабушки
              </p>
            </div>
            </div>
          </div>

        </div>
      </div>
     </section>

     <section>
      <div className="container">
        <CompanyBlock/>
      </div>
     </section>

     <section>
      <div className="container">
        <PartnersBlock/>
      </div>
     </section>

     <section>
      <div className="container">
        <div className="about_block">
          <div className="about_top">
            <p className="txt8">Узнайте о нас больше</p>
            
            <div className="about_app">
              <Link href="#" className=".ab_app">
              <img src="./img/insta.svg" alt="" />
              </Link> 

              <Link href="#" className=".ab_app">
              <img src="./img/youtub.svg" alt="" />
              </Link>

              <Link href="#" className=".ab_app">
              <img src="./img/facebook.svg" alt="" />
              </Link>
            </div>

            <p className="txt9">#ВСЕЛЮБЯТAMI</p>
          </div>

           <div className="about_grid">
            <div className="about_itm about2">
              <img src="./img/about.png" alt="" />
            </div>

             <div className="about_itm about3">
              <img src="./img/about2.png" alt="" />
            </div>

             <div className="about_itm about4">
              <img src="./img/about3.png" alt="" />
            </div>

            <div className="about_itm about4">
              <img src="./img/about4.png" alt="" />
            </div>

            <div className="about_itm about4">
              <img src="./img/about5.png" alt="" />
            </div>

             <div className="about_itm about4">
              <img src="./img/about6.png" alt="" />
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
  );
}
