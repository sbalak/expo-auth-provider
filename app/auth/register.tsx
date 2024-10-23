import { View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useAuth();

  const handleRegister = async () => {
    try {
      const result = await register(email, password);
      if (result && result.error) {
        console.log("line-15 -> Register.tsx: [ERROR] ", result.message);
      } else {
        console.log("line-17 -> Register.tsx: [SUCCESS] Register Successful");
        const result = await login(email, password);
        if (result && result.error) {
          console.log("line-19 -> Register.tsx: [ERROR] ", result.message);
        } else {
          console.log("line-21 -> Register.tsx: [SUCCESS] Login Successful");
        }
      }

    } catch (error) {
      console.log("line-16 -> Register.tsx: [EXCEPTION] ", error);
    }

  }

  return (
    <View>
      <TextInput placeholder='Email' value={email} onChangeText={(text: string) => setEmail(text)}></TextInput>
      <TextInput placeholder='Password' value={password} onChangeText={(text: string) => setPassword(text)} secureTextEntry={true} ></TextInput>
      <Button title="Reigster" onPress={handleRegister}></Button>
    </View>
  )
}

export default Register