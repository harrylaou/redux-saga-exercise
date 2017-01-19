import React from 'react'
import * as BurgerMenu from 'react-burger-menu'

const SideMenu = ({ isOpen, children, pageWrapId, toggleMenu }) => (
  <div>
    <BurgerMenu.slide
      isOpen={isOpen}
      pageWrapId={pageWrapId || 'page-wrap'}
    >
      { children }
    </BurgerMenu.slide>
  </div>
)

SideMenu.propTypes = {
  isOpen: React.PropTypes.bool,
  children: React.PropTypes.array,
  pageWrapId: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

export default SideMenu
