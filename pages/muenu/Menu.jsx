
import Image from "next/image";
import React, { useState } from "react";
import s from "./Menu.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { TbMail } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link"
function Menu() {
  const [first, setfirst] = useState(true);
  return (
    <div className={s.menusss}>
      <div className={s.menu}>
        <Image width={250} height={100} src="/logo.png" alt="q" />
        <div className={s.language}>
          <button className={s.bt}>RUS</button>
          <button className={s.bt}>KG</button>
          <button className={s.bt}>ENG</button>
        </div>
     
            <MenuIcon onClick={() => setfirst(!first)} className={s.IconButton} />
        
        
      </div>
      <div className={first ? s.bbtn : s.btn}>
        <div className={s.menus}>
          
            <div className={s.menu3}>
              <h1>Навигация</h1>
              <Link href="/">ГЛАВНАЯ</Link>
              <details>
                <summary>О НАС</summary>
                <div className={s.menu_summary}>
                <Link href="/aboutUs">О НАС</Link>
                      <p href="#">menu</p>
                
                    </div>
              </details>
              <details>
                <summary>ОБРАЗОВАНИЕ</summary>
                <div className={s.menu_summary}>
                <Link href="/education">education</Link>
                      <p href="#">menu</p>
              
                    </div>
              </details>
              <details>
                <summary>НАУКА</summary>
                <div className={s.menu_summary}>
                <Link href="/theScience">theScience</Link>
                      <p href="#">menu</p>
                      <p href="#">menu</p>
                      <p href="#">menu</p>
                    </div>
              </details>
              <details>
                <summary>МЕЖДУНАРОДНАЯ ДЕЯТЕЛЬНОСТЬ</summary>
                <div className={s.menu_summary}>
                <Link href="/internationalActivity">info</Link>
                      <p href="#">menu</p>
             
                    </div>
              </details>
              <details>
                <summary>АБИТУРИЕНТАМ</summary>
                <div className={s.menu_summary}>
                <Link href="/enrollee">enrollee</Link>
                      <p href="#">menu</p>
                      
                    </div>
              </details>
              <details>
                <summary>СТУДЕНЧЕСКАЯ ЖИЗНЬ</summary>
                <div className={s.menu_summary}>
                <Link href="/studentLife">studentLife</Link>
                      <p href="#">menu</p>
                    
                    </div>
              </details>

              <Link href="/contacts">КОНТАКТЫ</Link>
            </div>
            
            <div className={s.menu1_block}>
              <div className={s.block_menu1}>
                <BsTelephone className={s.TbMail} />
                <div className={s.block_menu_info}>
                  
                  <a href="tel:+312 66 03 47">+312 66 03 47</a>
                </div>
              </div>
              <div className={s.block_menu1}>
                <TbMail className={s.TbMail} />
                <div className={s.block_menu_info}>
                 
                  <a href="mailto:i.arabaev@mail.ru">i.arabaev@mail.ru</a>
                </div>
              </div>
              <div className={s.block_menu1}>
                <FiMapPin className={s.TbMail} />
                <div className={s.block_menu_info}>
               
                  <a href="#">720026, г.Бишкек, ул. Раззакова 51а</a>
                </div>
              </div>
            </div>
           
            <div className={s.Instagram}>
              <a className={s.a} href="#">
                <AiOutlineGooglePlus />
              </a>
              <a href="#">
                <AiOutlineInstagram />
              </a>
              <a href="#">
                <CiTwitter />
              </a>
              <a href="#">
                <CiFacebook />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
