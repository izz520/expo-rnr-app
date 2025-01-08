import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Pressable } from '@rn-primitives/slot'
import { useAuth } from '~/store/useAuth'

const Profile = () => {
  const { logout } = useAuth()
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Pressable onPress={() => logout()}>
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Profile