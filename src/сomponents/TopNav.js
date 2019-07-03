import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import Menu from './MenuItems';
import ShadowBg from './ShadowBg';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    const { menu } = this.state;
    this.setState({ menu: !menu });
    if (!menu) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  render() {
    const { img } = this.props;
    const { menu } = this.state;
    const style = {
      left: `${menu ? 0 : -320}px`,
      visibility: `${menu ? 'visible' : 'hidden'}`,
    };
    const menuItem = [
      { id: 1, name: 'Каталог', link: '/catalog' },
      { id: 2, name: 'Где купить', link: '/catalog' },
      { id: 3, name: 'Услуги', link: '/service' },
      { id: 4, name: 'Партнерам', link: '/catalog' },
    ];
    return (
      <nav>
        <Logo img={img} />
        <div
          id="burger-menu"
          role="button"
          tabIndex={0}
          onClick={this.menuToggle}
          onKeyDown={this.menuToggle}
        >
          <span />
          <span />
          <span />
        </div>
        <MenuToggle click={this.menuToggle} style={style} />
        <Menu className="menu" menu={menuItem} />
        {menu ? <ShadowBg click={this.menuToggle} /> : ''}
      </nav>
    );
  }
}

TopNav.propTypes = {
  img: PropTypes.string.isRequired,
};

export default TopNav;
