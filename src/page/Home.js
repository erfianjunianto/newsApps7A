import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H3 } from 'native-base';
import Isi from './Isi';
import Footernav  from './Footernav';
import { Actions } from 'react-native-router-flux';
export default class Home extends Component {
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
            <Title>NEWS APPS</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>{Actions.notification()}}>
              <Icon type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
        <Content>
          {/* <Image source={{uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg'}} style={{height:200, width: null, flex:1}}/> */}

          <Image source={require('../images/camp.jpeg')} style={{height:200, width: null, flex:1}}/>

          <Text style={{fontSize:24, textAlign: "center"}}>Populer</Text>
          
          <Isi />
          
        </Content>
        <Footernav />
      </Container>
    );
  }
}