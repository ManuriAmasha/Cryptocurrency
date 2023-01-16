import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {theme} from '../Core/theme';

function LandingScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <View style={{marginTop: '35%'}}>
        <Text style={Styles.title}>Cashium</Text>
      </View>
      <Image style={Styles.image} source={require('../Assets/landing04.png')} />
      <View style={Styles.buttonContainer}>
        <Button
          style={Styles.Button}
          mode="contained"
          uppercase={false}
          labelStyle={Styles.labelStyle}
          onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Button>
        <Button
          style={Styles.Button}
          mode="contained"
          uppercase={false}
          labelStyle={Styles.labelStyle}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Button>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 32,
    fontFamily: 'serif',
    color: theme.colors.dark,
    shadowColor: '#00A',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '75%',
    marginTop: '2%',
  },
  Button: {
    marginTop: '10%',
    height: 46,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 12,
    color: theme.colors.white,
  },
  image: {
    width: '110%',
    height: 350,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: '10%',
  },
});

export default LandingScreen;
