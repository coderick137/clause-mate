/* eslint-disable prettier/prettier */
import { Link } from 'expo-router';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

import { Button } from './Button';

export function LoginForm() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-20 bg-zinc-100">
      <View className="flex w-full flex-col items-center gap-4 px-4">
        <Text className="mb-20 text-2xl font-bold">
          Faça uma pergunta e receba um relatório detalhado de como melhorar suas avaliações{' '}
          <Text className="text-indigo-500">agoras!</Text>
        </Text>
        <View className="mt-8 flex w-full flex-col gap-10">
          <TextInput placeholder="Email" className="rounded-lg border p-4" />
          <TextInput placeholder="Senha" className="rounded-lg border p-4" />
        </View>
        <Link href={{ pathname: '/chat', params: { name: 'Dan' } }} asChild className="mt-8 px-2">
          <Button title="Entrar" size="full" />
        </Link>
      </View>
      <View className="flex w-full flex-col items-center gap-4 ">
        <View className="flex flex-row items-center gap-2">
          <View className="my-7 h-[1px] w-32 bg-indigo-500/30" />
          <Text className="text-sm font-bold text-indigo-500">Outra opções de login</Text>
          <View className="my-7 h-[1px] w-32 bg-indigo-500/30" />
        </View>

        <View className="-mt-3 flex w-full flex-row justify-around px-10">
          <Button icon="logo-google" size="sm" variant="outline" iconColor="black" />
          <Button icon="logo-facebook" size="sm" variant="outline" iconColor="blue" />
          <Button icon="logo-apple" size="sm" variant="outline" iconColor="silver" />
        </View>
      </View>
    </SafeAreaView>
  );
}
