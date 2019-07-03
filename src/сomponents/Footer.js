import React from 'react';
import '../scss/modules/footer.scss';
import Menu from './MenuItems';
import Logo from './Logo';
import logo from '../img/logo1.png';

const menu = [
  { id: 1, name: 'Главная', link: '/' },
  { id: 2, name: 'Каталог', link: '/catalog' },
  { id: 3, name: 'Где купить', link: '/catalog' },
  { id: 4, name: 'Партнерам', link: '/catalog' },
  { id: 5, name: 'Гарантия и возврат', link: '/catalog' },
  { id: 7, name: 'О компании', link: '/catalog' },
  { id: 8, name: 'Новости', link: '/catalog' },
  { id: 9, name: 'Контакты', link: '/catalog' },
];

function Footer() {
  return (
    <footer>
      <div className="footer container">
        <Menu menu={menu} />
        <p>
          <span>© 2019 </span>
          БАЛАКОВО ЗАПЧАСТЬ
        </p>
        <Logo img={logo} />
        <div className="call">
          <div>ЗАКАЗАТЬ ЗВОНОК</div>
          <div>8 (800) 555-25-40</div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
