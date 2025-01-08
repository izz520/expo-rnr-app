import '~/global.css';

import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';
import { PortalHost } from '@rn-primitives/portal';
import { ThemeToggle } from '~/components/ThemeToggle';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { useEffect } from 'react'
import { Stack, useSegments, useRouter } from 'expo-router'
import { useAuth } from '../store/useAuth'

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

function useProtectedRoute() {
  const segments = useSegments()
  const router = useRouter()
  const isAuthenticated = useAuth((state) => state.isAuthenticated)

  useEffect(() => {
    const inAuthGroup = segments[0] === 'login'

    if (!isAuthenticated && !inAuthGroup) {
      // 如果未登录且不在登录页面，重定向到登录页
      router.replace('/login')
    } else if (isAuthenticated && inAuthGroup) {
      // 如果已登录但在登录页面，重定向到首页
      router.replace('/(tabs)')
    }
  }, [isAuthenticated, segments])
}

export default function RootLayout() {
  useProtectedRoute()

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          // 禁用返回手势
          gestureEnabled: false
        }}
      />
    </Stack>
  )
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
