import { View, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'
import { useCount } from '~/store/useCount'

const Detail = () => {
  const navigation = useNavigation()
  const { title } = useLocalSearchParams()
  const { count, increment, decrement } = useCount()
  useEffect(() => {
    navigation.setOptions({
      title: title || "详情页"  // 使用传入的参数作为标题
    })
  }, [navigation, title])
  return (
    <SafeAreaView>
      <Text>{count}</Text>
      <Pressable onPress={increment}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable onPress={decrement}>
        <Text>Decrement</Text>
      </Pressable>
      <ScrollView
        bounces={false}  // iOS: 禁用弹性效果
        overScrollMode="never" // Android: 禁用过度滚动
      >
        <View className='mb-4'>
          <Text>内容1</Text>
        </View>
        <View className='mb-4'>
          <Text>内容2</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
        <View className='mb-4'>
          <Text>内容3</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Detail