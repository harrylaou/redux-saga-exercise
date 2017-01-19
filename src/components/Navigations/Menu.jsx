import React from 'react'

import SideMenu from './Menus/SideMenu'

const Menu = ({ isOpen, pageWrapId, toggleMenu }) => (
  <SideMenu
    isOpen={isOpen}
    toggleMenu={toggleMenu}
  >
    <h3 style={{ paddingTop: '50px' }}>
      Next Bootcamp in London
    </h3>
    <a href="https://reactjs.academy/react-redux-training-london" target="_blank" rel="noopener noreferrer">
      <img className="img-responsive" src="/public/img/offer-25-red.png" role="presentation" />
    </a>
    <p className="text-center">
      <a className="text-center" href="https://reactjs.academy/react-redux-training-london" target="_blank" rel="noopener noreferrer">
        <strong>25%</strong> discount voucher &#187;
      </a>
    </p>
    <p className="text-center">
      <a href="https://reactjs.academy/react-redux-training-london" target="_blank" rel="noopener noreferrer">
        welovejavascriptlondon25
      </a>
    </p>
    <hr />
    <h3>Beers I like:</h3>
    <p>
      This is exercise question 5 ;)
    </p>
  </SideMenu>
)

Menu.propTypes = {
  isOpen: React.PropTypes.bool,
  pageWrapId: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

export default Menu
