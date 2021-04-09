import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import setaVerde from '../../../assets/images/seta-verde.png';
import addImg from '../../../assets/images/add.png';

import TextAplication from '../../Components/TextAplication';

export default function RevenueList() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.balance}>
          <TextAplication size={32} color="#2FFF00" weight="500">
            R$ 800,00
          </TextAplication>
          <TextAplication>
            (TOTAL DE RECEITAS)
          </TextAplication>
        </View>
        <View style={styles.buttonHeaderContainer}>
          <TouchableOpacity style={styles.buttonAdd}>
            <Image style={styles.imageButtonAdd} source={addImg} />
            <TextAplication>
              CADASTRAR
            </TextAplication>
          </TouchableOpacity>
        </View>
      </View>

      <TextAplication  size={20} weight="500">
        RELAÇÃO DE RECEITAS DE ABRIL
      </TextAplication>

      <FlatList
        style={{ marginTop: 20 }}
        keyExtractor={(item) => {return String(item.id)}}
        data={[
          {
            id: 1,
            description: 'Salário',
            classification: 'Mensal',
            value: 650,
            date: '04/04/2021',
          },
          {
            id: 2,
            description: 'Aluguel',
            classification: 'Mensal',
            value: 50,
            date: '10/04/2021',
          },
          {
            id: 3,
            description: 'Salário',
            classification: 'Mensal',
            value: 650,
            date: '20/04/2021',
          },
          {
            id: 4,
            description: 'Freelancer',
            classification: 'Unico',
            value: 2000,
            date: '25/04/2021',
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerItem}>
              <Image style={styles.imageSetaItem} source={setaVerde} />
              <View style={styles.containerInfoItem}>
                <TextAplication size={18} weight="500">
                  {item.description}
                </TextAplication>
                <TextAplication size={10}>
                  ({item.classification})
                </TextAplication>
              </View>
              <View style={styles.containerBalanceItem}>
                <TextAplication size={18} weight="500" color="#2FFF00">
                  + R${item.value}
                </TextAplication>
                <TextAplication size={10}>
                  {item.date}
                </TextAplication>
              </View>
            </View>
          );
        }}
      />
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
    marginBottom: 20,
  },
  balance: {
    alignItems: 'flex-end',
    marginRight: 'auto',
  },
  buttonAdd: {
    flexDirection: 'row',
    backgroundColor: '#2B2E2B',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  imageButtonAdd: {
    marginRight: 6,
  },
  buttonHeaderContainer: {
    justifyContent: 'center',
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageSetaItem: {
    width: 30,
    height: 30,
  },
  containerInfoItem: {
    flex: 1,
  },
  containerBalanceItem: {
    alignItems: 'flex-end'
  }
});