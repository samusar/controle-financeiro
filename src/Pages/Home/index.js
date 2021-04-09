import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { useNavigation } from '@react-navigation/native';

import setaVerde from '../../../assets/images/seta-verde.png'
import setaVermelha from '../../../assets/images/seta-vermelha.png'

import TextAplication from '../../Components/TextAplication';



export default function Home() {
  const navigation = useNavigation();


  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <TextAplication weight="500">
            Olá,
          </TextAplication> 
          <TextAplication size={20}>
            Jhoon Batera
          </TextAplication>
        </View>
        <View style={styles.balance}>
          <TextAplication size={32} color="#2FFF00" weight="500">
            R$ 200,00
          </TextAplication>
          <TextAplication >
            (Estimado para Abril)
          </TextAplication>
        </View>
      </View>
      <View style={styles.containerFilter}>
        <TextAplication size={18}>
          Ano referente:
        </TextAplication>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: '2019', value: '2019' },
            { label: '2020', value: '2020' },
            { label: '2021', value: '2021' },
            { label: '2022', value: '2022' },
          ]}
          style={{
            inputIOS: {
              backgroundColor: '#F4F4F4',
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            },
            inputAndroid: {
              backgroundColor: '#F4F4F4',
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            }
          }}
        />
      </View>
      <View style={{marginTop: 15}}>
        <TextAplication size={18}>
          Mês referente:
        </TextAplication>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Janeiro', value: '1' },
            { label: 'Feveiro', value: '2' },
            { label: 'Março', value: '3' },
            { label: 'Abril', value: '4' },
            { label: 'Maio', value: '5' },
            { label: 'Junho', value: '6' },
            { label: 'Julho', value: '7' },
            { label: 'Agosto', value: '8' },
            { label: 'Setembro', value: '9' },
            { label: 'Outubro', value: '10' },
            { label: 'Novembro', value: '11' },
            { label: 'Dezembro', value: '12' },
          ]}
          style={{
            inputIOS: {
              backgroundColor: '#F4F4F4',
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            },
            inputAndroid: {
              backgroundColor: '#F4F4F4',
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            }
          }}
        />
      </View>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate('RevenueList')
        }}
      >
        <View style={styles.boxRevenue}>
          <View style={styles.textBoxRevenue}>
            <TextAplication color="#2FFF00">
              TOTAL DE RECEITAS
            </TextAplication>
            <TextAplication size={28} weight="500" color="#2FFF00">
              R$ 800,00
            </TextAplication>
          </View>
          <View style={styles.setaBoxRevenue}>
            <Image source={setaVerde} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExpenditureList');
        }}
      >
        <View style={styles.boxExpenditure}>
          <View style={styles.textBoxExpenditure}>
            <TextAplication color="#FF3D00">
              TOTAL DE DESPESAS
            </TextAplication>
            <TextAplication size={28} weight="500" color="#FF3D00">
              R$ 600,00
            </TextAplication>
          </View>
          <View style={styles.setaBoxExpenditure}>
            <Image source={setaVermelha} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222422',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
  },
  profile: {
    flex: 1,
  },
  balance: {
    alignItems: 'flex-end',
  },
  containerFilter: {
    marginTop: 30,
  },
  boxRevenue: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: '#2FFF00',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353835',
  },
  textBoxRevenue: {
    flex: 1,
    paddingHorizontal: 20,
    height: 100,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  setaBoxRevenue: {
    backgroundColor: '#2B2E2B',
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  boxExpenditure: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#FF3D00',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353835',
  },
  textBoxExpenditure: {
    flex: 1,
    paddingHorizontal: 20,
    height: 100,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  setaBoxExpenditure: {
    backgroundColor: '#2B2E2B',
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});