import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H3 } from 'native-base';
import Footernav from './Footernav';
export default class Notification extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome" name='bars' />
            </Button>
          </Left>
          <Body>
            <Title>NOTIFICATION</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
        <Content>
         
          
        </Content>
        <Footernav />
      </Container>
    );
  }
}