import { Stack } from 'expo-router';
import { useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Chat() {
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  function sendMessage() {
    if (input.trim()) {
      const newMessage = { id: Date.now().toString(), text: input };
      setMessages([...messages, newMessage]);
      setInput('');
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }

  return (
    <>
      <Stack.Screen />
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1">
          <View className="mb-4 border-b border-zinc-200 pb-4">
            <Text className="text-center text-2xl font-bold text-zinc-700">
              ClauseMate.IA é um assistente virtual que te ajuda a entender e redigir cláusulas
              contratuais.
            </Text>
          </View>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="mb-4 flex flex-row items-center gap-4">
                <View className="rounded-lg bg-blue-500/30 p-4 font-semibold">
                  <Text className="text-zinc-700">{item.text}</Text>
                </View>
              </View>
            )}
            contentContainerStyle={{ flexGrow: 1 }}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          />
          <View className="flex w-full flex-row items-center justify-between pb-8">
            <TextInput
              placeholder="Digite sua mensagem"
              className="relative w-full rounded-lg border border-zinc-300 p-4"
              value={input}
              onChangeText={setInput}
              multiline
            />
            <View className="absolute -top-1 left-[25.2rem] flex w-full flex-row items-center justify-between">
              {input.trim() ? (
                <Button
                  icon="send-sharp"
                  variant="ghost"
                  size="sm"
                  iconColor="blue"
                  onPress={sendMessage}
                  disabled={!input.trim()}
                />
              ) : (
                <Button icon="mic" variant="ghost" size="sm" iconColor="blue" />
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
}
