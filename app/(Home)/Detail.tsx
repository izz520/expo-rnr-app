import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'

const Detail = () => {
  const navigation = useNavigation()
  const { title } = useLocalSearchParams()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || "详情页"  // 使用传入的参数作为标题
    })
  }, [navigation, title])
  return (
    <SafeAreaView>
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