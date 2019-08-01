import React from 'react';
import logo from '../../assets/img/nei_logo.jpeg'; 
import { Container, Image, Menu } from 'semantic-ui-react'
import TrackPath from './TrackPath'

class AppHeader extends React.Component {


    render() {

        return (
            <Menu className="top" inverted>
                <TrackPath />
                <Container>
                <Menu.Item as='a' header href="/" >
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                    Nei FB Analytics
                </Menu.Item>
                <Menu.Item as='a' href="/fb">FB Options</Menu.Item>

                </Container>
            </Menu>
        );
    }
}
  
export default AppHeader;

