import React from "react";
import { connect, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Navbar, Nav, } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import HomeIcon from '@material-ui/icons/Home';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
// import ContactsIcon from '@material-ui/icons/Contacts';


const Header = () => {

    const dispatch = useDispatch();
    
    const handleOpen = () => {
        dispatch({ type: 'SHOW'});
    }

    return (

        <>
            <header>
                <div className="container-fluid">
                <button type="button" onClick={()=>handleOpen()} className="btn btn-success">click</button>
                    <Navbar expand="lg">
                        <Navbar.Brand to="/Home" >Albiorix</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/Home">  <AssignmentIndIcon /> User List</Link>
                                <Link to="/form"> Form</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </>

    );
}


export default Header;