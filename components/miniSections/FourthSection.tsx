import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const FourthSection = () => {
  return (
    <View style={styles.card}>
      <View style={{
        flexDirection: 'row', gap: 8, backgroundColor: Colors.darkGreen, borderTopStartRadius: 15, borderTopEndRadius: 15,
        padding: 15
      }}>
        <MaterialCommunityIcons name="fish" size={34} color='white' />
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>
          Información sobre Pescados
        </Text>
      </View>
      {/* <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">

        </CardTitle>
      </CardHeader> */}
      <View style={{ gap: 20, paddingHorizontal: 15, paddingBottom: 15, }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <AntDesign name="hearto" size={30} color="red" />         
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Beneficios para la salud</Text>
            <Text style={{ fontSize: 16 }}>Rico en omega-3, proteínas.</Text>
          </View>
        </View>
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Consumo recomendado / s</Text>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>2-3 porciones</Text>
          </View>
          <View style={{ backgroundColor: '#d1d1d1', height: 8, borderRadius: 100 }}>
            <View style={{ backgroundColor: '#000', height: 8, width: '70%', borderRadius: 100 }} />
          </View>
        </View>
        <View style={{  justifyContent: 'space-between', gap: 20 }}>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Feather name="dollar-sign" size={30} color="green" />
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>Precio promedio</Text>
              <Text style={{ fontSize: 22, fontWeight: '700' }}>€12/kg</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Feather name="droplet" size={30} color="blue" />
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>Contenido de agua</Text>
              <Text style={{ fontSize: 22, fontWeight: '700' }}>70-80%</Text>
            </View>
          </View>
        </View>
        {/* <View className="bg-muted p-4 rounded-lg">
          <Text className="text-sm font-medium mb-2">Tipos populares de pescado:</Text>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Salmón</li>
            <li>Atún</li>
            <li>Bacalao</li>
            <li>Sardinas</li>
          </ul>
        </View>
        <View className="flex items-center justify-between bg-primary/10 p-4 rounded-lg">
          <Scale className="h-10 w-10 text-primary" />
          <Text className="text-sm font-medium ml-4 flex-grow">
            La pesca sostenible es crucial para mantener la salud de los océanos y garantizar el suministro futuro de pescado.
          </Text>
        </View> */}
      </View>
    </View>
  )
}

export default FourthSection

const styles = StyleSheet.create({
  card: {
    // backgroundColor: Colors.lightGreen,
    borderRadius: 30,
    // paddingHorizontal: 15,
    // paddingVertical: 20,
    gap: 15,
    borderColor: '#ccc',
    borderWidth: 1
  },
})