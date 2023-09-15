import React , {useContext, useState} from "react";
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from "reactstrap"

import {Link} from "react-router-dom"

import { UserContext } from "../Context/UserContext";

const Header = () => {

const context  = useContext(UserContext)

const [isOpen, setisOpen] = useState(false)


const toggle = () => setisOpen(!isOpen)

 return(
<Navbar color="info" light expand="md">
  <NavbarBrand>
    
    <Link to="/" className="text-white">ProfileHub</Link>
  </NavbarBrand>
    
    
    
  <NavbarText className="text-white">

       {context.user?.email ? context.user.email : " "}
 </NavbarText> 
     

 

  <NavbarToggler onClick={toggle} />
  <Collapse navbar isOpen={isOpen}>
    <Nav className="m-auto" navbar>

    {
  context.user ? (
    <NavItem>
      <NavLink className="text-white" onClick={()=>  {context.setUser(null)}}>LogOut</NavLink>
    </NavItem>
  ) : (
    <>
      <NavItem>
        <NavLink className="text-white" tag={Link} to="/signin" >SignIn</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="text-white" tag={Link} to="/signup">SignUp</NavLink>
      </NavItem>
    </>
  )
}


      
      
    </Nav>
  </Collapse>
</Navbar>



 )
}

export default Header