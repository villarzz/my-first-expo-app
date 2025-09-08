import { Text, TouchableOpacity, Image } from 'react-native';

interface buttonProps{
    bgColor: string;
    icon: any;
    text: string;
}

export default function LoginButton({ bgColor, icon, text }: buttonProps) {
    return (
        <TouchableOpacity
          className={`${bgColor} text-zinc-100 p-3 rounded w-full flex flex-row items-center gap-4 justify-center`}
        >
          <Image source={icon} style={{ width: 30, height: 30 }} />
          <Text className='text-white'>{text}</Text>
        </TouchableOpacity>
      );
}
