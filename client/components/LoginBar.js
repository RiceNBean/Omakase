import React from 'react';
import { Nav, Button } from 'react-bootstrap';

var LoginBar = (props) => (
    <Nav bsStyle="pills" className="button-bar">
        <a href="/"><img className="logo-center" src='./logo.jpg'/></a>
        <a href="/"><Button bsStyle="default" className="nav-button float-right pad-right"> Search for Food </Button></a>
        <a href="/about"><Button bsStyle="default" className="nav-button float-right"> About </Button></a>
    </Nav>
)

export default LoginBar;