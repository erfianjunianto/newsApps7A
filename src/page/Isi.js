import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Isi extends Component {
  render() {
    return (
      
    <View style={{padding:10}}>
        <Card style={{borderRadius:10}}>
            <CardItem cardBody button onPress={()=>{Actions.detail()}}>
            <Grid style={{height:100}}>
            <Col style={{width:'35%'}}>
                <Image source={require('../images/beach.jpeg')} style={{height:200, width: null, flex:1, borderRadius:10}}/>
            </Col>
            <Col style={{padding:10}}>
                <Body>
                <Text style={{fontWeight: "bold"}}>Politik</Text>
                <H3>Judul Berita Hari ini</H3>
                </Body>
            </Col>
            </Grid>
            
            </CardItem>
        </Card>
        <Card style={{borderRadius:10}}>
            <CardItem cardBody>
            <Grid style={{height:100}}>
            <Col style={{width:'35%'}}>
                <Image source={require('../images/beach.jpeg')} style={{height:200, width: null, flex:1, borderRadius:10}}/>
            </Col>
            <Col style={{padding:10}}>
                <Body>
                <Text style={{fontWeight: "bold"}}>Politik</Text>
                <H3>Judul Berita Hari ini</H3>
                </Body>
            </Col>
            </Grid>

            </CardItem>
        </Card>
        <Card style={{borderRadius:10}}>
            <CardItem cardBody>
            <Grid style={{height:100}}>
            <Col style={{width:'35%'}}>
                <Image source={require('../images/beach.jpeg')} style={{height:200, width: null, flex:1, borderRadius:10}}/>
            </Col>
            <Col style={{padding:10}}>
                <Body>
                <Text style={{fontWeight: "bold"}}>Politik</Text>
                <H3>Judul Berita Hari ini</H3>
                </Body>
            </Col>
            </Grid>

            </CardItem>
        </Card>
        <Card style={{borderRadius:10}}>
            <CardItem cardBody>
            <Grid style={{height:100}}>
            <Col style={{width:'35%'}}>
                <Image source={require('../images/beach.jpeg')} style={{height:200, width: null, flex:1, borderRadius:10}}/>
            </Col>
            <Col style={{padding:10}}>
                <Body>
                <Text style={{fontWeight: "bold"}}>Politik</Text>
                <H3>Judul Berita Hari ini</H3>
                </Body>
            </Col>
            </Grid>

            </CardItem>
        </Card>
    </View>
        
          
    );
  }
}