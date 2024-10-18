import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Feather, FontAwesome6, SimpleLineIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const FirstSection = () => {
  return (
    <View style={{ gap: 25 }}>

      <View style={styles.card}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ width: '70%' }}>
            <Text style={styles.title}>Tomate rojo, Casa #1</Text>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
          </View>
          <Image style={styles.imageTomato} source={require('@/assets/images/tomate.png')} />
        </View>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={styles.containerIcon}>
              <Entypo name="drop" size={20} color="black" />
            </View>
            <Text>36%</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={styles.containerIcon}>
              <Feather name="sun" size={20} color="black" />
            </View>
            <Text>Nublado</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={styles.containerIcon}>
              <Entypo name="drop" size={20} color="black" />
            </View>
            <Text>36° C</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity style={{ backgroundColor: Colors.darkGreen, paddingHorizontal: 35, paddingVertical: 10, borderRadius: 10 }}>
            <Text style={{ color: 'white' }}>Regar</Text>
          </TouchableOpacity>
          <Switch />
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 5, flexWrap: 'wrap' }}>
        <View style={styles.miniCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Entypo name="leaf" size={24} color="black" />
            <TouchableOpacity style={{ width: 40, height: 40, borderWidth: 1, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
              <Feather name="arrow-up-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '600', fontSize: 20 }}>95%</Text>
            <Text style={{ fontSize: 14, fontWeight: '500' }}>Salud de las plantas</Text>
          </View>
        </View>

        <View style={styles.miniCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <SimpleLineIcons name="drop" size={24} color="black" />
            <TouchableOpacity style={{ width: 40, height: 40, borderWidth: 1, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
              <Feather name="arrow-up-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '600', fontSize: 20 }}>79%</Text>
            <Text style={{ fontSize: 14, fontWeight: '500' }}>Profundidad del agua</Text>
          </View>
        </View>

        <View style={styles.miniCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <FontAwesome6 name="sun-plant-wilt" size={24} color="black" />
            <TouchableOpacity style={{ width: 40, height: 40, borderWidth: 1, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
              <Feather name="arrow-up-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '600', fontSize: 20 }}>7.2 ph</Text>
            <Text style={{ fontSize: 14, fontWeight: '500' }}>Alcalinidad</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FirstSection

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
    borderColor: '#ccc',
    borderWidth: 1
  },
  location: {
    fontSize: 18,
    alignItems: 'center',
    fontWeight: '500'
  },
  grades: {
    fontSize: 24,
  },
  condition: {
    fontSize: 16,
    color: 'gray'
  },
  border: {
    borderWidth: 0.5,
    borderColor: '#aaa'
  },
  containerOptionsWeather: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  optionWeather: {
    alignItems: 'center'
  },
  titleOption: {
    color: 'gray'
  },
  quantityOption: {
    fontWeight: '600',
    fontSize: 16
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.darkGreen,
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPressed: {
    backgroundColor: Colors.darkGreen,
  },
  imageTomato: {
    height: 80,
    // width: 80,
    flex: 1,
    borderRadius: 10,
    // backgroundColor: 'lightblue'
  },
  title: {
    fontSize: 22,
    fontWeight: '600'
  },
  containerIcon: {
    backgroundColor: 'white',
    width: 35,
    borderRadius: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  miniCard: {
    width: '49%',
    backgroundColor: Colors.lightGreen,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderColor: '#ccc',
    borderWidth: 1
  },
})