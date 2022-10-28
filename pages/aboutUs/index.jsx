import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import s from "./abputus.module.scss"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box
    className={s.box}
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={s.tabs}
        textColor="secondary"
        indicatorColor="secondary"
      >
        
        <Tab    label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel className={s.TabPanel} value={value} index={0}>
      
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim fuga voluptates aliquid rerum eveniet earum alias perspiciatis mollitia quam quae ducimus iusto, tempora, ea animi voluptatum excepturi ipsam labore sit optio magnam! Animi doloribus sint similique maiores rerum, aut dolor fugit vel ducimus odio quaerat deleniti debitis nulla nostrum temporibus!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit et similique ab tempore nisi totam unde recusandae temporibus eum.
      </TabPanel>
      <TabPanel className={s.TabPanel}  value={value} index={1}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic mollitia, omnis ipsum veniam repellat vel quae. Dolor quibusdam quidem possimus, vero soluta obcaecati est accusamus unde explicabo dolorum molestiae doloremque eaque iusto ad provident harum dolores reiciendis non, dignissimos natus iste, at eum. Nostrum quibusdam labore et. Odio repellat repellendus nemo qui ad. Aspernatur beatae maiores assumenda culpa facilis voluptas quas distinctio at, earum minus consequuntur a reprehenderit atque mollitia neque rem cum hic animi saepe numquam eum error possimus et. Quae iure quos qui veritatis accusamus iusto quas alias voluptate expedita odio adipisci sit laudantium, provident ratione eveniet a impedit animi aspernatur ab vero nesciunt at voluptas incidunt? Placeat ullam repudiandae blanditiis cupiditate sint voluptas assumenda, maxime temporibus. Iusto perspiciatis fugiat, nesciunt quibusdam nam exercitationem voluptates? Repellat quo quod sed dolores libero, nisi beatae molestias aperiam laborum dicta necessitatibus provident soluta eos illum deserunt dolorum at voluptatum. Nobis aliquam voluptatibus ab velit, quibusdam voluptates vero praesentium, adipisci ratione dolores non eum aut recusandae, deserunt temporibus dolor quos sapiente id incidunt tempore fugiat provident architecto laudantium. Expedita explicabo ad fugit omnis fugiat hic veniam ullam, illo voluptate cum iste quas non, eius doloribus, debitis deserunt corrupti magni tenetur! Molestiae sed et, sequi assumenda fugit atque impedit neque veritatis fugiat eaque totam? Cumque, harum hic illo non quis, magni, omnis impedit architecto voluptate assumenda odit molestiae ipsa tempora officia velit amet suscipit animi reiciendis consectetur ullam minus autem. Natus quasi iste delectus libero perspiciatis sint quibusdam! Corporis tenetur et officia cum modi beatae eligendi assumenda aut accusamus. Cum, neque dicta ex doloremque corporis incidunt laboriosam, temporibus quasi sapiente est totam veritatis aliquid adipisci nemo odit fugiat? Nostrum ipsam perferendis, aperiam nisi beatae dolore. Aliquam tempore voluptate quod dolore a magni reprehenderit eum quo iusto enim voluptatem, expedita omnis amet, commodi maxime minima rerum atque explicabo fuga facere maiores laboriosam exercitationem? Numquam facilis ab excepturi magnam. Omnis rerum magni natus nihil sunt soluta. Fuga quaerat excepturi, magni aliquid vitae placeat quam delectus quia iste sint nesciunt, rem architecto eos molestiae amet natus dolorum dolorem numquam dolores saepe culpa nostrum non maiores deserunt. Perferendis quam officia aperiam minima voluptate assumenda maxime quaerat accusantium maiores vitae repudiandae, suscipit ullam similique incidunt eligendi asperiores numquam aliquid impedit quas ratione tempora quibusdam odio expedita aut? Sed, tempora voluptatem animi veniam fugiat ipsum iste deserunt! Eligendi, mollitia. Sequi, distinctio laborum aspernatur illum impedit ipsum corporis reprehenderit. Mollitia doloribus consectetur labore nisi dicta at vero, quidem ea ipsum possimus itaque corrupti laboriosam minus nam adipisci aliquid blanditiis, sit rem soluta optio expedita? Sit, provident facere hic deserunt aliquid accusantium et quos cum beatae, numquam ullam eligendi corporis esse? Unde deserunt facilis odit doloribus minima fuga perferendis. Voluptatibus voluptate accusamus possimus maxime ab. Corrupti, fugit voluptatum iusto suscipit culpa eaque doloribus quo deserunt cumque expedita repellendus odit repudiandae molestiae in possimus rerum voluptatibus similique reprehenderit voluptates consequatur magnam. Dicta, earum maxime temporibus accusantium praesentium eveniet commodi ipsa sequi, vero hic, voluptate cumque itaque aspernatur aut nam quod aperiam ea obcaecati dolore eum saepe quos consequatur doloribus? Molestias repellat vel incidunt dolorem minus magni autem id, voluptatem, dolor at enim similique cum voluptate inventore ab facere aut qui expedita earum eveniet ex soluta. Laboriosam, iusto. Placeat quo vitae ab rerum dignissimos sequi culpa rem quas ullam sed distinctio impedit ipsum eius facere laudantium, molestias temporibus repellat adipisci deserunt ad. Enim, explicabo exercitationem aspernatur repellat ad, dignissimos excepturi alias harum dolor vero nostrum ut nam a rem assumenda, quisquam in nulla voluptatem doloribus dolorum laudantium! Deserunt nemo recusandae esse consectetur repudiandae, illo, eum, reprehenderit ipsa labore saepe ipsum pariatur? Nam aliquid quae consectetur, ratione debitis quasi ad recusandae natus eum iste facilis, autem et molestias odio eveniet maiores explicabo esse quia, inventore omnis in laboriosam. Soluta nesciunt modi eligendi, repudiandae hic, repellendus assumenda aut inventore, ut nostrum sint quas dolor mollitia velit atque maiores enim fuga dolorem consequuntur. Laborum, suscipit excepturi. Distinctio ea soluta, mollitia, quae facilis sapiente vel omnis quisquam repudiandae temporibus blanditiis in dolore vero assumenda atque fuga incidunt tempora odio illum iste numquam maiores accusantium. Exercitationem esse ullam neque aspernatur, voluptatem quod, cupiditate autem itaque numquam eum illo quasi, perferendis voluptates. Molestiae iste nulla quo animi aspernatur magnam iure itaque maiores non repellendus minus, cumque, nostrum ullam, commodi iusto? Beatae minus numquam tempora, ipsa repellendus molestias nam, ipsum commodi distinctio eveniet iste. Amet reprehenderit quia at quam, error eum modi nihil quo officiis magnam eaque! Sed voluptatum maiores rerum quam dolores. Sequi ducimus nisi atque libero, autem nesciunt magnam consectetur voluptas. Debitis hic perferendis delectus recusandae molestias quidem praesentium dignissimos eaque neque culpa ab sed illum voluptas voluptatum maxime quod eligendi fuga fugit tempora enim et voluptatem excepturi, obcaecati ex. Sit cumque laboriosam mollitia, deserunt soluta dolorem optio facere odit! Officiis odit dolores quibusdam suscipit harum culpa deserunt aspernatur cumque esse, perspiciatis voluptatem nemo! Distinctio vitae quis reprehenderit, aspernatur nobis, iusto nesciunt mollitia odit iure ex hic praesentium deleniti neque minima velit, voluptatum vel quos asperiores? Nesciunt quis praesentium esse reiciendis doloribus distinctio, omnis officiis optio officia aliquam quisquam animi deserunt nostrum nisi dolorum, nam ea, at libero quia magnam iure consequuntur repellat. Praesentium aliquam cupiditate minima tempore, accusamus distinctio pariatur odio esse a officiis quisquam eos, quidem voluptate architecto commodi iusto ipsam soluta sapiente aut voluptas! Nam culpa voluptas amet officiis deserunt consequatur ut facilis quis rerum voluptatem esse maxime perspiciatis, nobis a corrupti delectus numquam blanditiis minus iste! Obcaecati delectus ea impedit ratione excepturi iure aliquid sapiente et dolores non. Iste nobis recusandae cum temporibus possimus, unde reiciendis voluptate! Velit minus quos minima incidunt aperiam molestias, sunt delectus. Nemo similique odio, saepe commodi quasi, quidem architecto aut hic omnis, quaerat doloribus explicabo ut. Itaque sed perferendis, consectetur cumque, eaque assumenda quae illo quasi culpa optio odit, voluptatem quibusdam cum ducimus. Rerum illo et, ducimus dolorem ex aut unde veritatis vitae modi? Cum exercitationem rerum voluptatibus dolores. Laudantium, temporibus ex? Reiciendis officia perspiciatis dolore rem ipsa corrupti maiores. Cum minus autem eos deleniti. Quos, eligendi temporibus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem libero ipsam maxime commodi laboriosam, sed atque fugit praesentium nostrum facilis corporis, iusto ratione nesciunt doloribus expedita magnam earum aspernatur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur accusamus alias ipsa perspiciatis mollitia error dignissimos earum nihil reiciendis!
      </TabPanel>
      <TabPanel className={s.TabPanel}  value={value} index={2}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus soluta nobis ad quae totam debitis doloremque ratione aliquam dolor.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sint, at impedit debitis magnam officia, earum aliquid excepturi aliquam, recusandae amet atque cum distinctio. Neque optio asperiores molestiae corrupti vitae!
      </TabPanel>
      <TabPanel className={s.TabPanel}  value={value} index={3}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nesciunt iste quod, facere, laboriosam temporibus totam animi doloribus eum, praesentium ab iusto quisquam voluptas! Obcaecati, recusandae non adipisci vitae modi corporis officiis nulla tempore beatae eaque quis totam hic, earum ut unde ea, eum harum ullam enim aliquid quas ex!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quae est nemo expedita beatae autem cupiditate veritatis facilis voluptate cumque?
      </TabPanel>
      <TabPanel className={s.TabPanel}  value={value} index={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates iste quis odio est, ratione cupiditate ipsa sit minus molestias sed voluptatibus animi obcaecati, illo expedita corrupti odit quidem quae, maxime unde ad repellendus eveniet? Impedit, quis odit ad ea soluta fugit ipsum, consequuntur tempora assumenda veritatis facilis! Expedita, ipsa!
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi natus sunt, explicabo officia fuga corrupti? Earum aut sequi commodi porro!
      </TabPanel>
      <TabPanel className={s.TabPanel}  value={value} index={5}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero neque tempora dolorem officiis? Eius natus in reprehenderit suscipit deserunt reiciendis, atque doloremque, velit libero, iusto dolorem nam quam. Rem, quas tempora, eum architecto odio harum ipsum dolore quibusdam deserunt, blanditiis qui tempore error provident assumenda et hic quis earum nesciunt.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, in a? Debitis voluptatem quos harum similique quia, ad fuga ratione.
      </TabPanel>
      <TabPanel className={s.TabPanel}  value={value} index={6}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ut, aut velit fugiat explicabo ipsum, quo voluptate vero quibusdam perferendis dicta, numquam hic quod qui ipsam quam nostrum ad libero excepturi consectetur eos quia facilis veritatis. Ipsum aliquam at consectetur cumque placeat, voluptatem natus? Earum iusto enim porro provident nostrum!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ducimus. Ullam eligendi, aliquam quisquam totam necessitatibus deserunt nemo molestias at!
      </TabPanel>
    </Box>
  );
}
