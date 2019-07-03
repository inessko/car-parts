import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

function Feature() {
  return (
    <div className="tabs-right">
      <Tabs
        defaultTab="one"
        onChange={tabId => {
          console.log(tabId);
        }}
      >
        <TabList>
          <Tab tabFor="one">Характеристики</Tab>
          <Tab tabFor="two">О товаре</Tab>
          <Tab tabFor="three">Состав комплекта</Tab>
        </TabList>
        <TabPanel tabId="one">
          <div className="tab-desc-left">
            <p>
              <span>Артику: </span>
              06781
            </p>
            <p>
              <span>Каталожный номер: </span>
              2101-2202081
            </p>
            <p>
              <span>Штрих код: </span>
              4627130164943
            </p>
          </div>
          <div className="tab-desc-right">
            <p>
              <span>Модель авто:</span>
              ВАЗ 2101-07
            </p>
            <p>
              <span>Упаковка:</span> коробка
            </p>
          </div>
        </TabPanel>
        <TabPanel tabId="two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam
            distinctio ducimus earum enim harum iste itaque laboriosam, modi natus numquam officiis
            placeat quaerat, qui quo sequi soluta sunt tenetur vero. Blanditiis necessitatibus,
            possimus. Labore nisi velit voluptas voluptatem? Accusamus commodi quis repellendus. A,
            aliquam amet autem consequatur culpa cum cumque delectus dolore ducimus eligendi enim
            facere facilis, id incidunt inventore, iure laboriosam laudantium maxime molestiae
            mollitia natus nesciunt nisi non quam qui quis quo quod ratione repellendus rerum sequi
            sint sit sunt tempore ullam unde velit. Amet aspernatur, corporis doloremque dolorum eos
          </p>
        </TabPanel>
        <TabPanel tabId="three">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Feature;
