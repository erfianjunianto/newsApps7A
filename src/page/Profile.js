import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H2 } from 'native-base';
import Footernav from './Footernav';
export default class Profile extends Component {
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
            <Title>PROFILE</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
        <Content>
         <Card style={{height:150, width:150, alignSelf:"center", borderRadius:100, marginTop:100}}>
           <CardItem cardBody style={{borderRadius:150}}>
              <Image source={require('../images/talin.jpeg')} style={{height: 150, width:null, flex:1, borderRadius:100}} />
           </CardItem>
         </Card>
         <View style={{alignItems:"center", paddingTop:30}}>
           <H2>ERFIAN JUNIANTO</H2>
           <Text>TEKNIK INFORMATIKA</Text>
           <Text>17.7A</Text>
         </View>
          
        </Content>
        <Footernav />
      </Container>
    );
  }
}