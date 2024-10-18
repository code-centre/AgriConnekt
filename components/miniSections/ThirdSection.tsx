import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const ThirdSection = () => {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 25, fontWeight: '700' }}>Transporte de Verduras</Text>
      <View style={{ gap: 20 }}>
        <View style={{ gap: 15 }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <MaterialCommunityIcons name="truck-outline" size={30} color="black" />
            <View>
              <Text style={{ fontWeight: '500', fontSize: 15 }}>Tipo de vehículo</Text>
              <Text style={{ fontWeight: '700', fontSize: 20 }}>Camión refrigerado</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <MaterialIcons name="route" size={30} color="black" />
            <View>
              <Text style={{ fontWeight: '500', fontSize: 15 }}>Distancia promedio</Text>
              <Text style={{ fontWeight: '700', fontSize: 20 }}>300 km</Text>
            </View>
          </View>
        </View>
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '400', fontSize: 18 }}>Costo de transporte</Text>
            <Text style={{ fontWeight: '400', fontSize: 18 }}>€500 / viaje</Text>
          </View>
          <View style={{ backgroundColor: '#d1d1d1', height: 8, borderRadius: 100 }}>
            <View style={{ backgroundColor: '#000', height: 8, width: '70%', borderRadius: 100 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, }}>Combustible</Text>
            <Text style={{ fontSize: 14, }}>Mantenimiento</Text>
            <Text style={{ fontSize: 14, }}>Peajes</Text>
          </View>
        </View>
        <View style={{ gap: 15 }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Feather name="thermometer" size={30} color="black" />
            <View>
              <Text style={{ fontWeight: '500', fontSize: 15 }}>Temperatura de transporte</Text>
              <Text style={{ fontWeight: '700', fontSize: 20 }}>4°C - 7°C</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <AntDesign name="clockcircleo" size={30} color="black" />
            <View>
              <Text style={{ fontWeight: '500', fontSize: 15 }}>Tiempo promedio de entrega</Text>
              <Text style={{ fontWeight: '700', fontSize: 20 }}>5 horas</Text>
            </View>
          </View>
        </View>
        <View style={{
          backgroundColor: '#f2f2f2', padding: 8, borderRadius: 10, gap: 10, borderColor: '#ccc',
          borderWidth: 1
        }}>
          <Text style={{ fontSize: 16, fontWeight: '700' }}>Principales verduras transportadas:</Text>
          <View style={{ paddingLeft: 10, gap: 5 }}>
            <Text style={{ fontSize: 15 }}>Tomates</Text>
            <Text style={{ fontSize: 15 }}>Lechugas</Text>
            <Text style={{ fontSize: 15 }}>Zanahorias</Text>
            <Text style={{ fontSize: 15 }}>Pimientos</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ThirdSection

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
    borderWidth: 1,
    borderColor: '#ccc'
  },
})