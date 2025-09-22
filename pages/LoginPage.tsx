import { View, Text, TextInput, Alert } from 'react-native';
import LoginButton from 'components/login-button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // exemplo pré-definido
    const validEmail = "user@example.com";
    const validPassword = "Password@123";

    const handleLogin = () => {
        if (email === validEmail && password === validPassword) {
            navigation.navigate("Home" as never); // ou qualquer página que vc tenha
        } else {
            Alert.alert("Erro", "E-mail ou senha incorretos!");
        }
    };

    return (
        <View className='p-5 w-full'>
            <Text className='mt-10 font-semibold text-2xl'>Login</Text>
            <View className='mt-10 flex flex-col gap-3 w-full'>

                {/* E-mail */}
                <View>
                    <Text>E-mail</Text>
                    <TextInput
                        className='border p-3 rounded w-full placeholder-zinc-400'
                        placeholder='Enter your e-mail'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text className='text-zinc-400 p-1'>
                        Please enter a valid e-mail. e.g.: user@example.com
                    </Text>
                </View>

                {/* Senha */}
                <View>
                    <Text>Password</Text>
                    <TextInput
                        className='border p-3 rounded w-full placeholder-zinc-400'
                        placeholder='Enter your password'
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text className='text-zinc-400 p-1'>Please enter a valid password</Text>
                    <Text className='text-zinc-400 p-1'>
                        - Minimum 8 characters, one uppercase letter, one lowercase letter, one numeric digit, one special character.
                    </Text>
                </View>

                {/* Botões */}
                <View className='flex flex-col gap-3'>
                    <LoginButton
                        bgColor='bg-zinc-950'
                        icon={require('./assets/mail.png')}
                        text='Login with E-mail'
                        onPress={handleLogin}
                    />
                    <LoginButton
                        bgColor='bg-sky-600'
                        icon={require('./assets/user.png')}
                        text='Login with Facebook'
                        onPress={() => Alert.alert("Facebook", "Ainda não implementado")}
                    />
                    <LoginButton
                        bgColor='bg-red-600'
                        icon={require('./assets/google.png')}
                        text='Login with Google'
                        onPress={() => Alert.alert("Google", "Ainda não implementado")}
                    />

                    <Text className='text-zinc-400 p-1 text-center mt-4'>
                        Don´t have an account? <Text className='text-sky-400'>Sign up</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}