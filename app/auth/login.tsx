import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native'
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
        Alert.alert('Error', result.message);
        console.log("line-15 -> Login.tsx: [ERROR] ", result.message);
      } else {
        console.log("line-17 -> Login.tsx: [SUCCESS] Login Successful");
      }

    } catch (error) {
      console.log("line-16 -> Login.tsx: [EXCEPTION] ", error);
    }

  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ 
        flex: 1, 
        marginHorizontal: 20
      }}>

        <View style={{ marginVertical: 20 }}>

          <Text style={{ 
            fontSize: 24, 
            fontWeight: 'bold', 
            marginVertical: 15 
          }}>Login</Text>

          <Text style={{ fontSize: 16 }}>Hello there, welcome back!</Text>

        </View>
        
        <View style={{ marginBottom: 20 }}>

          <Text style={{ 
            fontSize: 16, 
            fontWeight: 400, 
            marginVertical: 10
          }}>Email Address</Text>

          <View style={{ width: "100%", height: 50, borderColor: '#e0e0e0', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <TextInput style={{ width: "100%" }} placeholderTextColor='#666' placeholder='Enter your email address' value={email} onChangeText={(text: string) => setEmail(text)}></TextInput>
          </View>

        </View>

        <View style={{ marginBottom: 20 }}>

          <Text style={{ 
            fontSize: 16, 
            fontWeight: 400, 
            marginVertical: 10
          }}>Email Address</Text>

          <View style={{ width: "100%", height: 50, borderColor: '#e0e0e0', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <TextInput style={{ width: "100%" }} placeholderTextColor='#666' placeholder='Enter your password' value={password} onChangeText={(text: string) => setPassword(text)} secureTextEntry={true}></TextInput>
          </View>
          
        </View>
                
        <TouchableOpacity style={{ marginBottom: 20 }}>
          <Button color='#000' title="Login" onPress={handleLogin} ></Button>
        </TouchableOpacity>


        <Text style={{ 
            fontSize: 16, 
            fontWeight: 400,
            textAlign: 'center'
          }}>Don't have an account already? <Text style={{ color: '#000', fontWeight: 'bold' }} onPress={() => router.navigate("/auth/register")}>Register</Text></Text>
      </View>
    </View>
  )
}

export default Login