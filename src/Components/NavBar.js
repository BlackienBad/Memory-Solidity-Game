import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
function NavBar() {
    return (
        <div>
      <Navbar style={{backgroundColor:'#3caea3'}}>
        <NavbarBrand href="/" style={{color:'white'}}>Memory Doge</NavbarBrand>
      </Navbar>
    </div>
    );
  }
  
  export default NavBar;