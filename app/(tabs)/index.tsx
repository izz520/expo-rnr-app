import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView className='px-4'>
      <Text>Home</Text>
      <View className=' h-screen flex gap-4'>
        <View className='p-4' >
          <Text>Hello</Text>
        </View>
        <View className='p-4'>
          <Text>Hello</Text>
        </View>
        <Pressable onPress={() => router.push('/Detail')}>
          <View className='bg-blue-500 p-4'>
            <Text>Detail</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Home