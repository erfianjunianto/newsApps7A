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
        <Content padder>
          
            <Grid style={{marginTop:10, borderBottomColor:"#000000", borderBottomWidth:1}}>
              <Col style={{height:50, width:50, alignSelf:"center"}}>
                <Image source={require('../images/icon-bell.png')} style={{height: 50, width:null, flex:1}} />
              </Col>
              <Col style={{padding:10}}>
                <H3>Judul Pesan atau Notifikasi</H3>
                <Text>Headline pesan atau notifikasi</Text>
              </Col>
            </Grid>

            <Grid style={{marginTop:10, borderBottomColor:"#000000", borderBottomWidth:1}}>
              <Col style={{height:50, width:50, alignSelf:"center"}}>
                <Image source={require('../images/icon-bell.png')} style={{height: 50, width:null, flex:1}} />
              </Col>
              <Col style={{padding:10}}>
                <H3>Judul Pesan atau Notifikasi</H3>
                <Text>Headline pesan atau notifikasi</Text>
              </Col>
            </Grid>

            <Grid style={{marginTop:10, borderBottomColor:"#000000", borderBottomWidth:1}}>
              <Col style={{height:50, width:50, alignSelf:"center"}}>
                <Image source={require('../images/icon-bell.png')} style={{height: 50, width:null, flex:1}} />
              </Col>
              <Col style={{padding:10}}>
                <H3>Judul Pesan atau Notifikasi</H3>
                <Text>Headline pesan atau notifikasi</Text>
              </Col>
            </Grid>

            <Grid style={{marginTop:10, borderBottomColor:"#000000", borderBottomWidth:1}}>
              <Col style={{height:50, width:50, alignSelf:"center"}}>
                <Image source={require('../images/icon-bell.png')} style={{height: 50, width:null, flex:1}} />
              </Col>
              <Col style={{padding:10}}>
                <H3>Judul Pesan atau Notifikasi</H3>
                <Text>Headline pesan atau notifikasi</Text>
              </Col>
            </Grid>
          
        </Content>
        <Footernav />
      </Container>
    );
  }
}