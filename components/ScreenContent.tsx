import { ReactNode } from 'react';
import { Text, View } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: ReactNode;
};

export function ScreenContent({ title, path, children }: ScreenContentProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">{title}</Text>
      {children}
    </View>
  );
}
