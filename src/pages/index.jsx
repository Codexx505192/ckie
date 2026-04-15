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
        <div className="company_block">
          <p className="txt5">Нам доверяют</p>

          <div className="company_grid">
            <div className="cmp">
              <div className="c_logo">
                <img src="./img/organic.png" alt="logo-company" />
              </div>
            </div>

            <div className="cmp">
              <div className="c_logo">
                <img src="./img/greenhouse.png" alt="logo-company" />
              </div>
            </div>


            <div className="cmp">
              <div className="c_logo">
                <img src="./img/pure.png" alt="logo-company" />
              </div>
            </div>

             <div className="cmp">
              <div className="c_logo">
                <img src="./img/organe.png" alt="logo-company" />
              </div>
            </div>

             <div className="cmp">
              <div className="c_logo">
                <img src="./img/coffee.png" alt="logo-company" />
              </div>
            </div>

             <div className="cmp">
              <div className="c_logo">
                <img src="./img/mrcoffee.png" alt="logo-company" />
              </div>
            </div>

             <div className="cmp">
              <div className="c_logo">
                <img src="./img/pure.png" alt="logo-company" />
              </div>
            </div>

             <div className="cmp">
              <div className="c_logo">
                <img src="./img/pure.png" alt="logo-company" />
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section>
      <div className="container">
        <div className="form_block">

          <form>
            <div className="form_cntr">
            <p className="txt6">Хочу стать партнером</p>

            <p className="txt7">
              Заполните  форму и мы предоставим  <br />
              вам интересное коммерческое предложение
            </p>

            <div className="inputs">
              <div className="inputs_t">
              <input type="text" className="np1" placeholder="имя,фамилия" />
              <input type="tel" className="np1" placeholder="Номер телефона" />
              </div>

              <div className="inputs_t">
              <input type="text" className="np1" placeholder="Компания" />
              <input type="email" className="np1" placeholder="Email" />
              </div>
            </div>

            <button className="btn3">
              Отправить
            </button>
          </div>
          </form>
        </div>
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
          <footer>
           <div className="top_footer">
            <div className="logo_footer">
             <img src="./img/logo.png" alt="logo_footer" />
            </div>


            <ul className="ul2">
              <div className="block_footer">
               <div className="ln">
                <p className="txt10">Карта сайта</p>
               </div>
            </div>

              <li className="li2">
                <Link href="#" className="lnk4">
                Каталог
                </Link>
              </li>

              <li className="li2">
                <Link href="#" className="lnk4">
                Партнерам
                </Link>
              </li>

              <li className="li2">
                <Link href="#" className="lnk4">
                Блог
                </Link>
              </li>

              <li className="li2">
                <Link href="#" className="lnk4">
                For kids
                </Link>
              </li>

              <li className="li2">
                <Link href="#" className="lnk4">
                Скачать каталог .pdf
                </Link>
              </li>
            </ul>

            <ul className="ul2">
              <li className="li2">
                <Link href="#" className="lnk4">
                Контакты
                </Link>
              </li>

              <li className="li2s">
                <img src="./img/phone_ic.svg" alt="phone" />
                +373 00000000
              </li>

              <li className="li2s">
                <img src="./img/mail_ic.svg" alt="phone" />
                 ami@mail.ru
              </li>

              <li className="li2s">
                 <img src="./img/location_ic.svg" alt="phone" />
                 2972 Westheimer Rd. Santa Ana, <br />
                  Illinois 85486
              </li>
            </ul>

            <div className="map_block">
              <img src="./img/map.png" alt="map" />
            </div>
           </div>

           <div className="bottom_footer">
           <p className="txt11">AMI 2020 </p>

           <p className="txt12">
            Политика конфиденциальности  <br />
             Created by be-adv.com
           </p>

           <div className="app_footer">
            <div className="app_f">
              <img src="./img/insta.svg" alt="insta" />
            </div>
           
           <div className="app_f">
             <img src="./img/youtub.svg" alt="insta" />
           </div>
            
            <div className="app_f">
              <img src="./img/facebook.svg" alt="insta" />
            </div>
           </div>
           </div>
          </footer>
      </div>
     </section>
    </>
  );
}
