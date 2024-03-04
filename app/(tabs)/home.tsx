import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { createClient, Provider } from 'urql';
import React, {useState, useEffect} from 'react';
import { Link } from 'expo-router';
import { Button } from '../components/button';
import { router } from 'expo-router';
import { defaultPageTheme } from '../utility/style';
import { TextInput } from 'react-native';


export default function Page() {
  const [bidenSize, setBidenSize] = useState(130);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    // Here you would typically save the token to localStorage/sessionStorage and redirect the user

  return (
    <View style={defaultPageTheme().container}>
      <Image source={require('../../assets/ricehat.jpg')} style={{width: bidenSize, height: bidenSize}}/>

      <Text>babo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

