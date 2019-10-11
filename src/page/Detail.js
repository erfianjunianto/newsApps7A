import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H3 } from 'native-base';
import Footernav from './Footernav';
export default class Detail extends Component {
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
            <Title>DETAIL</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
        <Content>
          {/* <Image source={{uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg'}} style={{height:200, width: null, flex:1}}/> */}

          <Image source={require('../images/camp.jpeg')} style={{height:200, width: null, flex:1}}/>

          <Text style={{fontSize:24, textAlign: "center", padding:10}}>Populer</Text>
          <View style={{margin:10}}>
            <H3>JUDUL BERITANYA</H3>
            <Text>
            Isi berita hari ini adalah sebagai berikut yaitu. Isi berita hari ini adalah sebagai berikut yaitu. Isi berita hari ini adalah sebagai berikut yaitu. Isi berita hari ini adalah sebagai berikut yaitu. Isi berita hari ini adalah sebagai berikut yaitu. Isi berita hari ini adalah sebagai berikut yaitu. Isi berita hari ini adalah sebagai berikut yaitu. 
            </Text>
          </View>
          
          
          
        </Content>
        <Footernav />
      </Container>
    );
  }
}