import React from "react";
import { Text, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { style } from "./style";
import tambah from './img/tambah.png';
import profile from './img/account.jpg';
import lock from './img/lock.png';
import arrowDown from './img/arrowDown.png';
import arrowUp from './img/arrowUp.png';
import list from './img/list.png';
import people from './img/discoverPeople.png';
import newHighlight from './img/highlight.png';
import hutao from './img/scam.png';
import sara from './img/sara.png';
import power from './img/power.jpg';
import posts from './img/grid.png';
import tagged from './img/tagged.png';

const ProfileInstagram = () => {
  return (
    <View style={style.container}>
      {/* 1st view */}
      <View style={style.line1}>
        <Image source={lock} style={style.image1stLock}></Image>
        <Text style={style.username}>Hayasaka</Text>
        <Image source={arrowDown} style={style.image1stArrowDown}></Image>
        <Text style={style.username}> </Text>
        <Image source={tambah} style={style.image1stTambah}></Image>
        <Image source={list} style={style.image1stList}></Image>
      </View>

      {/* 2nd view */}
      <View style={style.line2}>
        <Image source={profile} style={style.image2nd}></Image>
        <View style={style.cardWarp}>
          {/* <CardProfile angka='69' /> */}
          <CardProfile keterangan='Posts' />
        </View>
        <View style={style.cardWarp}>
          <CardProfile angka='1k' />
          <CardProfile keterangan='Follower' />
        </View>
        <View style={style.cardWarp}>
          <CardProfile angka='100' />
          <CardProfile keterangan='Following' />
        </View>
      </View>

      {/* 3rd view */}
      <View style={style.line3}>
        <CardDescription deskripsi='Hayasaka Ai' />
        <CardDescription deskripsi='Maid' />
        <CardDescription deskripsi='Student' />
        <CardDescription deskripsi='Agent' />
        <CardDescription deskripsi='Agent' />
        <CardDescription deskripsi='Agent' />
      </View>

      {/* 4th view */}
      <View style={style.line4}>
        <Pressable style={style.button}>
          <Text style={style.deskripsi}>Edit Profile</Text>
        </Pressable>
        <Pressable style={style.people4th}>
          <Image source={people} style={style.generalImage}></Image>
        </Pressable>
      </View>

      {/* 5th view */}
      <View style={style.line5}>
        <View style={style.teks5Line}>
          <CardDescription deskripsi='Story Highlights' />
          <Text>Keep your favorite stories on your profile</Text>
        </View>
        <Image style={style.image5thArrowUp} source={arrowUp}></Image>
      </View>

      {/* 6th view */}
      <View style={style.line6}>
        <CardStory story={newHighlight} />
        <CardStory story={sara} />
        <CardStory story={power} />
        <CardStory story={hutao} />
      </View>

      {/* 7th view */}
      <View style={style.line7}>
        <View style={style.post}>
          <Image source={posts} style={style.sevenThImage}></Image>
        </View>
        <View style={style.tagged}>
          <Image source={tagged} style={style.sevenThImage}></Image>
        </View>
      </View>

      {/* 8th view */}
      <View style={style.line8}>
        <CardPost post={power} />
        <CardPost post={profile} />
        <CardPost post={hutao} />
      </View>
    </View>
  )
}

// card
const CardProfile = (props) => {
  return (
    <View>
      <Text style={style.angka2nd}>{props.angka}</Text>
      <Text style={style.tulisan2nd}>{props.keterangan}</Text>
    </View>
  )
}
const CardDescription = (props) => {
  return (
    <View>
      <Text style={style.deskripsi}>{props.deskripsi}</Text>
    </View>
  )
}
const CardStory = (props) => {
  return (
    <View>
      <Image source={props.story} style={style.cardStory}></Image>
    </View>
  )
}
const CardPost = (props) => {
  return (
    <View>
      <Image source={props.post} style={style.cardPost}></Image>
    </View>
  )
}

export default ProfileInstagram;