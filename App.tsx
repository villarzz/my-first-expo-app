import './global.css';
import "./assets/mail.png"
import LoginButton from 'components/login-button';
import { View, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <View className='p-5 w-full'>
      <Text className='mt-10 font-semibold text-2xl'>Login</Text>
      <View className='mt-10 flex flex-col gap-3 w-full'>
        <View>
          <Text>E-mail</Text>
          <TextInput className='border p-3 rounded w-full placeholder-zinc-400' placeholder='Enter your e-mail' />
          <Text className='text-zinc-400 p-1'>Please enter a valid e-mail. e.g.: user@example.com</Text>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput className='border p-3 rounded w-full placeholder-zinc-400' placeholder='Enter your password' />
          <Text className='text-zinc-400 p-1'>Please enter a valid password</Text>
          <Text className='text-zinc-400 p-1'>-Minimum 8 characters, one uppercase letter, one lowercase letter, one numeric digit, one special character.</Text>
        </View>
        <View className='flex flex-col gap-3'>
          <LoginButton
            bgColor='bg-zinc-950'
            icon={require('./assets/mail.png')}
            text='Login with E-mail'
          />
          <LoginButton
            bgColor='bg-sky-600'
            icon={require('./assets/user.png')}
            text='Login with Facebook'
          />
          <LoginButton
            bgColor='bg-red-600'
            icon={require('./assets/google.png')}
            text='Login with Google'
          />
          <Text className='text-zinc-400 p-1 text-center mt-4'>
            Don´t have an account? <Text className='text-sky-400'>Sign up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
