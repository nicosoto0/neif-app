import React from 'react';
import logo from '../../assets/img/nei_logo.jpeg'; 
import { Container, Image, Menu } from 'semantic-ui-react'

const AppHeader = () => (
    <Menu className="top" inverted>
        <Container>
        <Menu.Item as='a' header href="/" >
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            Nei FB Analytics
        </Menu.Item>
        <Menu.Item as='a' href="/fb">FB Options</Menu.Item>

        </Container>
    </Menu>
);
  
export default AppHeader;

