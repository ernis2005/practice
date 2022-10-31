import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiPlay1, CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { TbMail } from "react-icons/tb";
import { BsPlay, BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { SlArrowRight } from "react-icons/sl";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { motion, AnimatePresence } from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

import { CiCalendarDate } from "react-icons/ci";


import Paginatin from "../contentd/Pagination/Pagination";
import Menu from "./muenu/Menu";
export default function Home({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  let [counteriesPerPage] = useState(4);
  const lastCountryIndex = currentPage * counteriesPerPage;
  const firstCounteryIndex = lastCountryIndex - counteriesPerPage;
  const currentCounter = data.slice(firstCounteryIndex, lastCountryIndex);
  const paginate = (pages) => setCurrentPage(pages);
  const left = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        },
        x: 0
    },

}
  const sections = [
    {
      id: 'section-1',
      color: 'teal',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      categorie: 1
    },
    {
      id: 'section-2',
      AiOutlineEye:"999",
      color: 'green',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      categorie: 1
    },
    {
      id: 'section-3',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      color: 'red',
      AiOutlineEye:"999",
      categorie: 1
    },
    {
      id: 'section-4',
      the_date:"2022 10 05 ",
      color: 'blue',
      AiOutlineEye:"999",
      categorie: 1,
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
    },
    {
      id: 'section-45',
      color: 'blue',
      AiOutlineEye:"999",
         info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
         the_date:"2022 10 05 ",
      categorie: 1
    },
    {
      id: 'section-49',
      AiOutlineEye:"999",
      color: 'blue',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      categorie: 1
    },
    {
      id: 'section-24',
      color: 'blue',
      AiOutlineEye:"999",
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      categorie: 1
    }, {
      id: 'section-99',
      color: 'blue',
      AiOutlineEye:"999",
      categorie: 1,
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      url: "/"

    },

  
    {
      id: 'section-5',
      AiOutlineEye:"999",
      color: 'teal',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      categorie: 2
    },
    {
      id: 'section-6',
      color: 'green',
      AiOutlineEye:"999",
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      categorie: 2
    },
    {
      id: 'section-7',
      color: 'red',
      AiOutlineEye:"999",
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      categorie: 2
    },
    {
      id: 'section-8',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      color: 'blue',
      AiOutlineEye:"999",
      categorie: 2

    },
  
    {
      id: 'section-9',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      color: 'teal',
      AiOutlineEye:"999",
      categorie: 3
    },
    {
      id: 'section-10',
         info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
         the_date:"2022 10 05 ",
         AiOutlineEye:"999",
      color: 'green',
      categorie: 3
    },
    {
      id: 'section-11',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      color: 'red',
      categorie: 3
    },
    {
      id: 'section-12',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      color: 'blue',
      categorie: 3
    },
    {
      id: 'section-13',
      color: 'blue',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",

      categorie: 3
    },
    {
      id: 'section-14',
      color: 'blue',
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      AiOutlineEye:"999",
      categorie: 3
    },
    {
      id: 'section-15',
      AiOutlineEye:"999",
      info:"МОЛОДЕЖЬ КЫРГЫЗСТАНА УЧАСТВУЕТ В КОНКУРСЕ ПО ОРФОГРАФИИ АНГЛИЙСКОГО",
      the_date:"2022 10 05 ",
      color: 'blue',
      categorie: 3
    }
  ]
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Арабаева</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_2.png" />
      </Head>

      <header className={styles.header}>

      
        <div className={styles.header_content}>

          <div className={styles.header_content_block22} >
            
            <Image src="/img4.jpg" alt="img"
              objectFit="cover"
              className={styles.header_content_block22_img}
              layout="fill"
            />
            <div className={styles.header_content_block22_infos}>
            <div className={styles.header_content_block22_info}>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita temporibus. Modi? Lorem ipsum, dolor 
</p>
<div>
  <p>
    <CiCalendarDate />
    2002 15 04
  </p>
  <p>
    <AiOutlineEye />
    999
  </p>
</div>

</div>
            </div>
         
          </div>
         
          <div className={styles.header_content_block2_2q}>
            <div className={styles.header_content_block2}

            >
              {sections.map((section, i) => (
                <motion.div initial="initial"
                whileInView="animate"
                exit="initial"

                variants={left}className={styles.sections} key={section.id}>
                  <div>    <p><CiCalendarDate /> {section.the_date}</p> <p><AiOutlineEye />{section.AiOutlineEye}</p></div>

                  <a className={styles.sections_a} href={'#'}>
                    {section.info}</a>
                </motion.div>
              ))}
            </div>
            <button className={styles.header_content_block2_button}> Все новости</button>
          </div>
        </div>
      </header>
       <div className={styles.info_block}>
        <div className={styles.info_blockk}>
      
<div className={styles.info_block_h1}>
  <span></span>
  <h1>
    Победители и <br></br>
    призеры онлайн<br></br>
    олимпиады<br></br>
  </h1>
</div>
<div className={styles.info_block_h1}>
  <span></span>
  <h1>
    Институты и<br />
    факультеты КГУ
    <br />
    им. И.Арабаева
    <br />
  </h1>
</div>
<div className={styles.info_block_h1}>
  <span></span>
  <h1>
    Условие <br />
    проведения
    <br />
    онлайн олимпиады <br />
  </h1>
</div>
<div className={styles.STOP}>
  <p>
    STOP <br />
    КОРРУПЦИЯ
  </p>
</div>
        </div>
      
      </div>
       <div>
        <div className={styles.content}>
          <div className={styles.content_BLOCK}>
            <div className={styles.content_BLOCK_block}>
              <div>
                <h3>АРАБАЕВ </h3>
              </div>
              <div className={styles.content_BLOCK_block_div2}><Image src="/img4.jpg" alt="img"
                objectFit="cover"
                className={styles.content_BLOCK_block_div2_img}
                layout="fill"
              /></div>
              <p>№013 01 / МАРТ / 2022-ЖЫЛ</p>
            </div>
            <div className={styles.content_BLOCK_block}>
              <div>
                <h3>ЖАРЧЫ</h3>
              </div>
              <div className={styles.content_BLOCK_block_div2}><Image src="/img4.jpg" alt="img"
                objectFit="cover"
                className={styles.content_BLOCK_block_div2_img}
                layout="fill"
              /></div>
              <p>№013 01 / МАРТ / 2022-ЖЫЛ</p>
            </div>
          </div>
         <div className={styles.content_BLOCK3}>
            <div  >
              {currentCounter.map((res) => {
                return (
                  <motion.div key={res.id} 
                  initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}>
                    <div className={styles.map_card}>
                      <div className={styles.map_card_block1}><Image src="/img4.jpg" alt="img"
                        objectFit="cover"
                        className={styles.content_BLOCK_block_div2_img}
                        layout="fill"
                      /></div>
                      <div className={styles.map_card_block2}>
                        <h2>ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕР</h2>
                        <h3>{res.name}</h3>
                        <div>
                        <p><CiCalendarDate className={styles.CiCalendarDate}/> 2022 10 06</p>
                        <p><AiOutlineEye />29 ПРОСМОТРЫ</p>
                        </div>
                     
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <Paginatin
              currentPege={counteriesPerPage}
              totalCount={data.length}
              paginate={paginate}
              className={styles.Paginatin}
            />
          </div>
          <div className={styles.content_BLOCK_2}>
            <div className={styles.content_BLOCK_2_block}>

              <div>
                <h1>АKNpress</h1>
              </div>
              
            </div>

            <div className={styles.content_BLOCK_block3}>
              <div className={styles.content_BLOCK_block3_div}>
                <p>КАТЕГОРИИ</p>
              </div>
              <div>
                <p>

                  НОВОСТИ И ОБЪЯВЛЕНИЯ
                </p>
                <p>

                  НОВОСТИ И ОБЪЯВЛЕН
                </p>
                <p>

                  НОВОСТИ
                </p>
                <p>
                  <span className={styles.content_BLOCK_block3_div_span}></span>{" "}
                  НОВОСТИ
                </p>
              </div>
            </div>
            <div className={styles.ssss}>
              <div className={styles.content_BLOCK_block3_div2}>
                <p>ПОЛЕЗНЫЕ ССЫЛКИ</p>
              </div>

              <div className={styles.content_BLOCK_block3_p}>
                <p>МОИН</p>
                <p>МОИН</p>
                <p>МОИН</p>
                <p>МОИН</p>
                <p>МОИН</p>
                <p>МОИН</p>
                <p>МОИН</p>
              </div>
            </div>
          </div> 
        </div>
      <div className={styles.content_BLOCK_3}>
          <div className={styles.content_BLOCK_3_cards}>
            <span className={styles.content_BLOCK_we}><Image src="/img4.jpg" alt="img"
              className={styles.content_BLOCK_we}
              objectFit="cover"
              layout="fill"
            />
            </span>
            <span className={styles.content_BLOCK_we}><Image src="/img4.jpg" alt="img"
              className={styles.content_BLOCK_we}
              objectFit="cover"
              layout="fill"
            /></span>
            <span className={styles.content_BLOCK_we}><Image src="/img4.jpg" alt="img"
              className={styles.content_BLOCK_we}
              objectFit="cover"
              layout="fill"
            /></span>
            <span className={styles.content_BLOCK_we}><Image src="/img4.jpg" alt="img"
              className={styles.content_BLOCK_we}
              objectFit="cover"
              layout="fill"
            /></span>
          </div>

        </div> 
           <div className={styles.content_BLOCK_4}>
          <div className={styles.content_BLOCK_5}>
            <div className={styles.content_BLOCK_5_block}>
              <p>МААНИЛЇЇ МАТЕРИАЛДАР</p>
            </div>
            <div className={styles.content_BLOCK_5_block_cards}>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div
              initial="initial"
              whileInView="animate"
              exit="initial"

              variants={left}
              className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div  
              initial="initial"
              whileInView="animate"
              exit="initial"

              variants={left}
              className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div
              initial="initial"
              whileInView="animate"
              exit="initial"

              variants={left}
              className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
                <div className={styles.content_BLOCK_5_block_card_w}>
                  <p>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</p>
                  <SlArrowRight className={styles.SlArrowRight} />
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.content_BLOCK_5}>
            <div className={styles.content_BLOCK_5_block}>
              <p>МААНИЛЇЇ МАТЕРИАЛДАР</p>
            </div>
            <div className={styles.content_BLOCK_5_block_cards}>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div  initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div  initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
                <div className={styles.content_BLOCK_5_block_card_w}>
                  <p>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</p>
                  <SlArrowRight className={styles.SlArrowRight} />
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.content_BLOCK_5}>
            <div className={styles.content_BLOCK_5_block}>
              <p>МААНИЛЇЇ МАТЕРИАЛДАР</p>
            </div>
            <div className={styles.content_BLOCK_5_block_cards}>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_5_block_card}>
                <h3>ХИМИЯ ЖАНА АНЫ ОКУТУУНУН ТЕХНОЛОГИЯСЫ КАФЕДРАСЫНДА</h3>
                <div className={styles.content_BLOCK_5_block_card_date}>
                  <p>2022-03-17</p>
                  <p>94 ПРОСМОТРЫ</p>
                </div>
                <div className={styles.content_BLOCK_5_block_card_w}>
                  <p>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</p>
                  <SlArrowRight className={styles.SlArrowRight} />
                </div>
              </motion.div>
            </div>
          </div>
        </div> 
       <div className={styles.content_BLOCK_6}>
          <h3 className={styles.h3}>НАШИ ИНСТИТУТЫ И ФАКУЛЬТЕТЫ</h3>
          <div className={styles.content_BLOCK_6_catds}>
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>{" "}
            <div className={styles.content_BLOCK_6_catd}>
              <div className={styles.content_BLOCK_6_catd_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_6_catd_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>
                Наши
                <br />
                институты и
              </p>
              <div></div>
            </div>
          </div>
        </div> 
        <div className={styles.content_BLOCK_7}>
          <div className={styles.content_BLOCK_7_block}>
            <div className={styles.content_BLOCK_7_block_p}>
              <p>ТЕЛЕСТУДИЯ SAN</p>
            </div>
            <div className={styles.content_BLOCK_7_block_cards}>
              <motion.div
              initial="initial"
              whileInView="animate"
              exit="initial"

              variants={left}
              >
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />
                <div>
                  <BsPlay className={styles.AiOutlinePauseCircle} />
                </div>
              </motion.div>
              <motion.div 
              initial="initial"
              whileInView="animate"
              exit="initial"

              variants={left}
              >
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />

                <div>
            
              
                <a href="https://youtu.be/DuAp8g5_y_Y" target="https://youtu.be/DuAp8g5_y_Y">
                <BsPlay className={styles.AiOutlinePauseCircle}/> 
                  </a>  
                
               
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}>
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />

                <div>
                  <BsPlay className={styles.AiOutlinePauseCircle} />
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}>
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />
                <div>
                  <BsPlay className={styles.AiOutlinePauseCircle} />
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}>
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />

                <div>
                  <BsPlay className={styles.AiOutlinePauseCircle} />
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}>
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />

                <div>
                  <BsPlay className={styles.AiOutlinePauseCircle} />
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}>
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />

                <div>
                  <BsPlay className={styles.AiOutlinePauseCircle} />
                </div>
              </motion.div>
              <motion.div  initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left}>
                <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />

                 <div>
                  <BsPlay className={styles.AiOutlinePauseCircle} />
                </div> 
              </motion.div>
            </div>
            <div className={styles.content_BLOCK_7_cards_info}>
              <p>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</p>
              <SlArrowRight className={styles.SlArrowRight_2} />
            </div>
          </div>
          <div className={styles.content_BLOCK_8}>
            <div className={styles.content_BLOCK_8_block_p}>
              <p>ТЕЛЕСТУДИЯ SAN</p>
            </div>
          <div className={styles.content_BLOCK_8_block_cards}>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_8_block_card}>
                <div className={styles.content_BLOCK_8_block_card_img}> <Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                />
                </div>
                <div className={styles.content_BLOCK_8_block_card_info}>
                  <p>
                    ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕРОПРИЯТИЕ, ПОСВЯЩЕННОЕ
                    ВСЕМИРНОМУ ДНЮ СЛУХА
                  </p>
                  <div>
                    <p>2022-03-17</p>
                    <p>94 ПРОСМОТРЫ</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_8_block_card}>
                <div className={styles.content_BLOCK_8_block_card_img}><Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                /></div>
                <div className={styles.content_BLOCK_8_block_card_info}>
                  <p>
                    ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕРОПРИЯТИЕ, ПОСВЯЩЕННОЕ
                    ВСЕМИРНОМУ ДНЮ СЛУХА
                  </p>
                  <div>
                    <p>2022-03-17</p>
                    <p>94 ПРОСМОТРЫ</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_8_block_card}>
                <div className={styles.content_BLOCK_8_block_card_img}><Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                /></div>
                <div className={styles.content_BLOCK_8_block_card_info}>
                  <p>
                    ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕРОПРИЯТИЕ, ПОСВЯЩЕННОЕ
                    ВСЕМИРНОМУ ДНЮ СЛУХА
                  </p>
                  <div>
                    <p>2022-03-17</p>
                    <p>94 ПРОСМОТРЫ</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_8_block_card}>
                <div className={styles.content_BLOCK_8_block_card_img}><Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                /></div>
                <div className={styles.content_BLOCK_8_block_card_info}>
                  <p>
                    ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕРОПРИЯТИЕ, ПОСВЯЩЕННОЕ
                    ВСЕМИРНОМУ ДНЮ СЛУХА
                  </p>
                  <div>
                    <p>2022-03-17</p>
                    <p>94 ПРОСМОТРЫ</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_8_block_card}>
                <div className={styles.content_BLOCK_8_block_card_img}><Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                /></div>
                <div className={styles.content_BLOCK_8_block_card_info}>
                  <p>
                    ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕРОПРИЯТИЕ, ПОСВЯЩЕННОЕ
                    ВСЕМИРНОМУ ДНЮ СЛУХА
                  </p>
                  <div>
                    <p>2022-03-17</p>
                    <p>94 ПРОСМОТРЫ</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial="initial"
                  whileInView="animate"
                  exit="initial"

                  variants={left} className={styles.content_BLOCK_8_block_card}>
                <div className={styles.content_BLOCK_8_block_card_img}><Image src="/img4.jpg" alt="img"
                  objectFit="cover"
                  className={styles.content_BLOCK_block_div2_img}
                  layout="fill"
                /></div>
                <div className={styles.content_BLOCK_8_block_card_info}>
                  <p>
                    ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕРОПРИЯТИЕ, ПОСВЯЩЕННОЕ
                    ВСЕМИРНОМУ ДНЮ СЛУХА
                  </p>
                  <div>
                    <p>2022-03-17</p>
                    <p>94 ПРОСМОТРЫ</p>
                  </div>
                </div>
              </motion.div>
            </div> 
          </div>
        </div>  
        <div className={styles.content_BLOCK_9}>
          <p>С НАМИ СОТРУДНИЧАЮТ</p>
          <div className={styles.content_BLOCK_9_cards}>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
            <div className={styles.content_BLOCK_9_card}>
              <div className={styles.content_BLOCK_9_card_img}><Image src="/img4.jpg" alt="img"
                className={styles.content_BLOCK_9_card_img}
                objectFit="cover"
                layout="fill"
              /></div>
              <p>Университеты и колледжи</p>
            </div>
          </div>
        </div>
      </div> 
     

    </div>
  );
}

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
