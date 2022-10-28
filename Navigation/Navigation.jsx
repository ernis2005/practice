
import React from 'react'
import Image from "next/image";
import Menu from '../pages/muenu/Menu';
import styles from "../styles/Home.module.scss";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiCalendarDate, CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { TbMail } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link"
function Navigation({children }) {
  return (
    <div>
           <header className={styles.header}>

<div className={styles.header_block1}>
  <div className={styles.menu3}>
    <div className={styles.menu_burger}>
      <Menu />
    </div>
    <div className={styles.menus}>
      <div className={styles.menu}>
        <div className={styles.Instagram}>

          <AiOutlineGooglePlus />

          <AiOutlineInstagram href="#" />


          <CiTwitter />


          <CiFacebook />

        </div>
        <div className={styles.info_menu}>
          <p href="#">РЕКТОРАТ</p>
          <p href="#">И.АРАБАЕВ - ПЕРВЫЙ УЧИТЕЛЬ</p>
          <p href="#">ФОТОГАЛЕРЕЯ</p>
          <p href="#">ВЕСТНИК КГУ</p>
          <p href="#">ПРЕСС-СЛУЖБА</p>
        </div>
        <div className={styles.language}>
          <button className={styles.btn}>RUS</button>
          <button className={styles.btn}>KG</button>
          <button className={styles.btn}>ENG</button>
        </div>
      </div>
      <div className={styles.menu1}>
        <div>
          <Image width={300} height={100} src="/logo.png" alt="q" />
        </div>
        <div className={styles.menu1_block}>
          <div className={styles.block_menu1}>
            <BsTelephone className={styles.TbMail} />
            <div className={styles.block_menu_info}>
              <p>приемная ректора</p>
              <a href="tel:+312 66 03 47">+312 66 03 47</a>
            </div>
          </div>
          <div className={styles.block_menu1}>
            <TbMail className={styles.TbMail} />
            <div className={styles.block_menu_info}>
              <p>email</p>
              <a href="mailto:i.arabaev@mail.ru">i.arabaev@mail.ru</a>
            </div>
          </div>
          <div className={styles.block_menu1}>
            <FiMapPin className={styles.TbMail} />
            <div className={styles.block_menu_info}>
              <p>адрес</p>
              <a href="#">720026, г.Бишкек, ул. Раззакова 51а</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.menu3}>
          <Link  href="/">ГЛАВНАЯ</Link>
          <details>
            <summary>О НАС</summary>
            <div className={styles.menu_summary}>
              <Link href="/aboutUs">О НАС</Link>
              <p href="#">menu</p>
              <p href="#">menu</p>
              <p href="#">menu</p>
            </div>

          </details>
          <details>
            <summary>ОБРАЗОВАНИЕ</summary>
            <div className={styles.menu_summary}>
              <Link href="/education">education</Link>
              <p href="#">menu</p>
              <p href="#">menu</p>
              <p href="#">menu</p>
            </div>

          </details>
          <details>
            <summary>НАУКА</summary>
            <div className={styles.menu_summary}>
              <Link href="/theScience">theScience</Link>
              <p href="#">menu</p>
              <p href="#">menu</p>
              <p href="#">menu</p>
            </div>

          </details>
          <details>
            <summary>МЕЖДУНАРОДНАЯ ДЕЯТЕЛЬНОСТЬ</summary>
            <div className={styles.menu_summary}>
              <Link href="/internationalActivity"> menu </Link>
              <p href="#">menu</p>
              <p href="#">menu</p>
              <p href="#">menu</p>
            </div>

          </details>
          <details>
            <summary>АБИТУРИЕНТАМ</summary>

            <div className={styles.menu_summary}>
              <Link href="/enrollee">enrollee</Link>
              <p href="#">menu</p>
              <p href="#">menu</p>
              <p href="#">menu</p>
            </div>

          </details>
          <details>
            <summary>СТУДЕНЧЕСКАЯ ЖИЗНЬ</summary>
            <div className={styles.menu_summary}>
              <Link href="/studentLife">studentLife</Link>
              <p href="#">menu</p>
              <p href="#">menu</p>
              <p href="#">menu</p>
            </div>

          </details>

          <Link href="/contacts">КОНТАКТЫ</Link>
        </div>
      </div>
    </div>
  </div>

</div>


</header>
<div className={styles.children}>
{children}
</div>

<footer>
        <div className={styles.footer_block}>
          <div className={styles.footer_block_logo}>
            <Image width={300} height={100} src="/logo.png" alt="q" />
          </div>
          <div className={styles.footer_block_contend_2}>
            <div className={styles.Instagram_2}>
              <a className={styles.a} href="#">
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
          <div className={styles.footer_block_3}>
            <p>
              720026, Г. БИШКЕК, УЛ. РАЗЗАКОВА,
              <br /> 51А <br />
              ПРИЁМНАЯ РЕКТОРА: +(0312) 66-03-47{" "}
            </p>
          </div>
        </div>
        <div className={styles.footer_block2}>
          <h4 className={styles.footer_block2_h2}>
            2015-2022 КГУ им. И.Арабаева ОИТ и ТОК . Все права защищены.
          </h4>
        </div>
      </footer>
    </div>
  )
}

export default Navigation

export async function getStaticProps() {
    //
  
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  
    let data = res.data;
  
    return {
      props: {
        data,
      },
      revalidate: 200,
    };
  }