import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome5, FontAwesome6, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';
import FirstSection from '@/components/miniSections/firstSection';
import SecondSection from '@/components/miniSections/secondSection';
import ThirdSection from '@/components/miniSections/ThirdSection';
import FourthSection from '@/components/miniSections/FourthSection';

export default function HomeScreen() {

  const [changeViewById, setChangeViewById] = useState(1)


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImageUser}>
          <View style={styles.imageUser}>
          </View>
          <View>
            <Text>Hola, David Aragón!</Text>
            <Text style={styles.greeting}>Buenos días</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={20} color="black" />
            <Text style={styles.location}> Bogotá, Cundinamarca</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text style={styles.grades}>+29°C |</Text>
            <Text>
              <AntDesign name="arrowup" size={17} color="black" />
              32° - <AntDesign name="arrowdown" size={17} color="black" /> 21°
            </Text>
          </View>
          <Text style={styles.condition}>Mayormente nublado</Text>
          <View style={styles.border} />
          <View style={styles.containerOptionsWeather}>
            <View style={styles.optionWeather}>
              <Text style={styles.titleOption}>Humedad</Text>
              <Text style={styles.quantityOption}>75%</Text>
            </View>
            <View style={styles.optionWeather}>
              <Text style={styles.titleOption}>Percepción</Text>
              <Text style={styles.quantityOption}>5 mm</Text>
            </View>
            <View style={styles.optionWeather}>
              <Text style={styles.titleOption}>Viento</Text>
              <Text style={styles.quantityOption}>13 km/h</Text>
            </View>
            <View style={styles.optionWeather}>
              <Text style={styles.titleOption}>Presión</Text>
              <Text style={styles.quantityOption}>1020hPa</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={() => setChangeViewById(1)} style={[
            styles.button,
            changeViewById === 1 ? styles.buttonPressed : null
          ]}>
            <MaterialCommunityIcons name="island" size={30} color={changeViewById === 1 ? 'white' : Colors.darkGreen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChangeViewById(2)} style={[
            styles.button,
            changeViewById === 2 ? styles.buttonPressed : null
          ]}>
            <Entypo name="leaf" size={30} color={changeViewById === 2 ? 'white' : Colors.darkGreen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChangeViewById(3)} style={[
            styles.button,
            changeViewById === 3 ? styles.buttonPressed : null
          ]}>
            <FontAwesome5 name="box-open" size={25} color={changeViewById === 3 ? 'white' : Colors.darkGreen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChangeViewById(4)} style={[
            styles.button,
            changeViewById === 4 ? styles.buttonPressed : null
          ]}>
            <MaterialCommunityIcons name="fish" size={34} color={changeViewById === 4 ? 'white' : Colors.darkGreen} />
          </TouchableOpacity>
        </View>
        {
          changeViewById === 1 && <FirstSection />
        }
        {
          changeViewById === 2 && <SecondSection />
        }
        {
          changeViewById === 3 && <ThirdSection />
        }
        {
          changeViewById === 4 && <FourthSection />
        }


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 25
  },
  containerImageUser: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  imageUser: {
    width: 60,
    height: 60,
    backgroundColor: Colors.lightGreen,
    borderRadius: 100
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.darkGreen
  },
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
    backgroundColor: 'lightblue'
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
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
