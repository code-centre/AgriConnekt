import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const SecondSection = () => {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 25, fontWeight: '700' }}>Información del Tomate</Text>
      <View style={{ gap: 15 }}>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <FontAwesome5 name="coins" size={24} color="black" />
          <View>
            <Text style={{ fontSize: 16 }}>Precio actual</Text>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>€2.50 / kg</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <View>
            <Text style={{ fontSize: 16 }}>Ventas semanales</Text>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>500 kg</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <Ionicons name="trending-up-sharp" size={24} color="black" />
          <View>
            <Text style={{ fontSize: 16 }}>Tendencia de precios</Text>
            <Text style={{ fontSize: 22, fontWeight: '700', color: 'green' }}>+5% esta semana</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SecondSection

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
})