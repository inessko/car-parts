import React from 'react';
import PropTypes from 'prop-types';
import Logo from './logo';
import Menu from './menu';
import MenuToggle from './menuToggle';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      hide: true,
    };
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    const { menu } = this.state;

    if (menu) {
      this.setState({ hide: true });
      setTimeout(() => {
        this.setState({ menu: false });
      }, 500);
    } else {
      this.setState({ menu: true, hide: false });
    }
  }

  render() {
    const { img } = this.props;
    const { menu, hide } = this.state;

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
        {menu ? <MenuToggle className={hide ? 'hide' : 'show'} click={this.menuToggle} /> : ''}
        <Menu className="menu" />
      </nav>
    );
  }
}

TopNav.propTypes = {
  img: PropTypes.string.isRequired,
};

export default TopNav;
