import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CurseRate from '../components/curseRate';
import Constants from 'expo-constants';
import AppLoader from '../components/appLoader';
import {fetchData} from '../src/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "bisque"
  },
  header:{
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 2,
    marginVertical: 10
  }
});

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rates: [] , isLoading: true};
  }

  getRates= async (url) => {
    const rates = await fetchData(url);
    this.setState({rates, isLoading: false});
  }


  componentDidMount() {
    this.getRates(url);
  }

  render() {
    if(this.state.isLoading){
      return <AppLoader />
    }
    else{
      return (
      <View style={styles.container}>
        <Text style={styles.header}>Сьогоднішня дата - {new Date().toLocaleDateString()}</Text>
        <ScrollView>
          {this.state.rates.map((elem) => (
            <CurseRate rate={elem} navigation = {this.props.navigation}/>
          ))}
        </ScrollView>
      </View>
    );
    }
    
  }
}
