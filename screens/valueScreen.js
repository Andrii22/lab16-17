import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { fetchData } from '../src/api';
import AppLoader from '../components/appLoader';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"palegreen" ,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  text:{
    margin: 7 ,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 2,
    color: "purple"
  },
  header:{
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical:10,
    borderBottomWidth: 2,
  }
});

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?';

export default class ValueScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rate: [], isLoading: true};
    this.dates = []; 
  }
  
  byField(field) {
    
  return (a, b) => a[field] > b[field] ? 1 : -1;
  }

  componentDidMount() {
    for(let i=0;i<7;i++){
      let date = new Date();
      date.setDate(date.getDate()-i);
      date = date.toLocaleDateString().split('.').reverse().join('');
      this.dates.push(date);
    }
    Promise.all(
      this.dates.map(date => fetchData(
        `${url}valcode=${this.props.route.params.name}&date=${date}&json`
      )))
      .then((res) => res.map((data) => data[0]))
      .then((rate) => this.setState({ rate, isLoading: false}));
      
      this.state.rate.sort(this.byField('exchangedate'));
  }

  render() {
    if (this.state.isLoading) {
      return <AppLoader />;
    } else {
      return (
        <View style={styles.container}><ScrollView>
        <Text style={styles.header}>Поточна валюта - {this.state.rate[0].txt}</Text>
          {this.state.rate.map((rateDay) => (
            <Text style={styles.text}>
              {rateDay.rate} грн.  - {rateDay.exchangedate} р.
            </Text>
          ))}
          </ScrollView>
        </View>
      );
    }
  }
}
