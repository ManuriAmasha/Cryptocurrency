import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import {TextInput, Button} from 'react-native-paper';
import {theme} from '../Core/theme';
import DatePicker from 'react-native-date-picker';

function AddEventsScreen({navigation}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={Styles.container}>
      <View style={{width: '98%', height: '70%'}}>
        <TextInput
          label="Event Title"
          underlineColor={theme.colors.primary}
          backgroundColor={theme.colors.white}
          // value={text}
          onChangeText={text => setName(text)}
        />
        <AutoGrowingTextInput
          style={Styles.textInput}
          placeholder={'Notes for visitors'}
        />
        <TextInput
          label="Ticket Details"
          underlineColor={theme.colors.primary}
          backgroundColor={theme.colors.white}
          // value={text}
          onChangeText={text => setDescription(text)}
        />
        <Button
          style={Styles.imageButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.imageButtonlabelStyle}
          onPress={() => Alert.alert('Select Image')}>
          Insert Image +
        </Button>

        <Button
          style={Styles.dateButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.dateButtonlabelStyle}
          onPress={() => setOpen(true)}>
          Select Date
        </Button>

        <DatePicker
          modal={true}
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            console.log(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Button
          style={Styles.publishButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.publishButtonlabelStyle}
          // onPress={() => setOpen(true)}
        >
          Publish Event
        </Button>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '75%',
    marginTop: '90%',
  },
  imageButton: {
    marginTop: '2%',
    height: 70,
    width: '98%',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    alignSelf: 'center',
  },
  imageButtonlabelStyle: {
    fontSize: 15,
    marginTop: 24,
    color: theme.colors.primary,
  },
  textInput: {
    paddingLeft: 10,
    width: '100%',
    height: '50%',
    fontSize: 17,
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 4,
  },
  dateButton: {
    marginTop: '2%',
    height: 50,
    borderWidth: 0,
    marginBottom: '-5%',
  },
  dateButtonlabelStyle: {
    marginTop: 13,
    color: theme.colors.primary,
  },
  publishButton: {
    marginTop: '10%',
    marginBottom: '-15%',
    width: '70%',
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
  },
  publishButtonlabelStyle: {
    color: theme.colors.white,
  },
});

export default AddEventsScreen;
