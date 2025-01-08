import { View, Text, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import { useAuth } from '../store/useAuth'
import { router } from 'expo-router'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = useAuth((state) => state.login)

  const handleLogin = async () => {
    try {
      await login(username, password)
      router.replace('/(tabs)') // 登录成功后跳转到首页
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <View className="flex-1 justify-center p-4">
      <TextInput
        className="border p-2 rounded mb-4"
        placeholder="用户名"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="border p-2 rounded mb-4"
        placeholder="密码"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable
        className="bg-blue-500 p-4 rounded"
        onPress={handleLogin}
      >
        <Text className="text-white text-center">登录</Text>
      </Pressable>
    </View>
  )
} 