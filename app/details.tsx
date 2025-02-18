import { Stack } from 'expo-router';
import { TextInput, View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Details() {
  return (
    <>
      <Stack.Screen options={{ title: 'Chat' }} />
      <Container>
        <View className="flex-1 items-center justify-center gap-8">
          <TextInput
            placeholder="Digite sua mensagem"
            className="h-48 w-full rounded-lg border p-4"
          />
          <View className="flex w-full flex-row items-center justify-between">
            <Button icon="send-sharp" size="lg" iconColor="zinc" />
            <Button icon="mic" size="md" iconColor="zinc" />
          </View>
        </View>
      </Container>
    </>
  );
}
