import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'react-native';
import instagramLogo from './img/igLogo.png';
import tombolTambah from './img/tambah.png';
import aktivitas from './img/aktivitas.png';
import dm from './img/dm.png';
import home from './img/home.png';
import search from './img/search.png';
import video from './img/video.png';
import shop from './img/shop.png';
import account from './img/account.jpg';
import {style} from "./style";

const App = () => {
  return (
      <View style={style.container}> 
        <BagianAtas />
        <Text style={{borderBottomWidth:1, marginBottom:20}}></Text>

        <BagianBawah />
      </View>
    
  )
}

// top component
class BagianAtas extends Component {
  render (){
    return (
      <View style={style.bagianAtas}>
        <View  style={style.igLogo}>
          <IgLogo />
        </View>
        <View  style={style.tambahPost}>
          <TambahPost />
        </View>
        <View  style={style.aktivitas}>
          <Aktivitas />
        </View>
        <View  style={style.aktivitas}>
          <Dm />
        </View>
      </View>
    )
  }
}

// middle component
// class BagianTengah extends Component {
//   render(){
//     return(
//       <View style={style.bagianTengah}>
//         <Story />
//       </View>
//     )
//   }
// }

// bottom component
class BagianBawah extends Component {
  render (){
    return (
      <View style={style.bagianBawah}>
        <View  style={style.home}>
          <Home />
        </View>
        <View  style={style.search}>
          <Seacrh />
        </View>
        <View  style={style.video}>
          <Video />
        </View>
        <View  style={style.shop}>
          <Shop />
        </View>
        <View  style={style.account}>
          <Account />
        </View>
      </View>
    )
  }
}

// all const
const IgLogo = () => {
  return (
    <Image source={instagramLogo} style={style.image}></Image>
  )
}
const TambahPost = () => {
  return (
    <Image source={tombolTambah} style={style.image}></Image>
  )
}
const Aktivitas = () => {
  return (
    <Image source={aktivitas} style={style.image}></Image>
  )
}
const Dm = () => {
  return (
    <Image source={dm} style={style.image}></Image>
  )
}

const Home = () => {
  return (
    <Image source={home} style={style.image}></Image>
  )
}
const Seacrh = () => {
  return (
    <Image source={search} style={style.image}></Image>
  )
}
const Video = () => {
  return (
    <Image source={video} style={style.image}></Image>
  )
}
const Shop = () => {
  return (
    <Image source={shop} style={style.image}></Image>
  )
}
const Story = () => {
  return (
    <Image source={account} style={style.image}></Image>
  )
}
const Account = () => {
  return (
    <Image source={account} style={style.imageAccount}></Image>
  )
}

export default App;