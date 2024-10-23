import { View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth';
import { router } from 'expo-router';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      if (result && result.error) {
        console.log("line-15 -> Login.tsx: [ERROR] ", result.message);
      } else {
        console.log("line-17 -> Login.tsx: [SUCCESS] Login Successful");
      }

    } catch (error) {
      console.log("line-16 -> Login.tsx: [EXCEPTION] ", error);
    }

  }

  return (
    <View>
      <TextInput placeholder='Email' value={email} onChangeText={(text: string) => setEmail(text)}></TextInput>
      <TextInput placeholder='Password' value={password} onChangeText={(text: string) => setPassword(text)} secureTextEntry={true} ></TextInput>
      <Button title="Sign In" onPress={handleLogin}></Button>
      <Button title="Register" onPress={() => router.navigate("/auth/register")}></Button>
    </View>
  )
}

export default Login