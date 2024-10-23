import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AuthProvider, { useAuth } from '@/hooks/useAuth'
import { router, Slot } from 'expo-router'

export default function _layout() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  )
}

const RootLayout = () => {
  const { authState } = useAuth();

  useEffect(() => {
    if (authState.authenticated) {
      router.replace("/store");
    }
    else {
      router.replace("/auth/login");
    }

  }, [authState.authenticated]);

  return (
    <Slot />
  );
}
