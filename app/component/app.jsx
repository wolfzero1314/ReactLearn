//app.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs.jsx';
import Tutorial from './tutorial.jsx';
import {Grid,Row,Col} from "react-bootstrap";

import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    FormGroup,
    FormControl,
    Button,
    Tab
    } from 'react-bootstrap';


class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar/>
                <Docs/>
            </div>

        )
    }
}


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
        this.state={eventKey:1}
    }
    handleSelect(eventKey){
        event.preventDefault();
        console.log(eventKey);
        this.setState({eventKey})

    }
    render(){
        return(
            //顶部导航
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="https://facebook.github.io/react/" style={{color:"#00d8ff",padding:"8px 15px"}}>
                            <img src="https://facebook.github.io/react/img/logo.svg" alt="react" style={{display:"inline-block",width:"36px",height:"36px"}}/>
                            React
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.handleSelect} activeKey={this.state.eventKey}>
                        <NavItem eventKey={1} href="docs.html">文档</NavItem>
                        <NavItem eventKey={2} href="tutorial.html">教程</NavItem>
                        <NavItem eventKey={3} href="community.html">社区</NavItem>
                        <NavItem eventKey={4} href="blog.html">博客</NavItem>
                    </Nav>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search"/>
                        </FormGroup>
                    </Navbar.Form>
                    <Nav pullRight onSelect={this.handleSelect} activeKey={this.state.eventKey}>
                        <NavItem eventKey={5} href="https://github.com/facebook/react">GitHub</NavItem>
                        <NavItem eventKey={6} href="https://github.com/facebook/react/releases">V15.6.1</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default App;