import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.darkGreen,
          // borderTopLeftRadius: 30,
          borderRadius: 100,
          // borderTopRightRadius: 30,
          marginHorizontal: 15,
          height: 70,
          marginBottom: 10
        },
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#50653e',
          },
          headerTitle: 'AgriConnekt',
          headerTitleStyle: {
            fontSize: 30,
            color: 'white'
          },
          tabBarIcon: ({ color, focused }) => (
            <View style={{ height: 45, width: 45, marginTop: 12, borderRadius: 100, borderWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? '#fff' : 'transparent' }}>
              <TabBarIcon name={'home-outline'} color={focused ? '#000' : color} />
            </View>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ height: 45, marginTop: 5, width: 45, borderRadius: 100, borderWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? '#fff' : 'transparent' }}>
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={focused ? '#000' : color} />
            </View>
          ),
        }}
      /> */}
    </Tabs>
  );
}
