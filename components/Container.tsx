import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

export function Container({ children }: { children: ReactNode }) {
  return <SafeAreaView className="m-5 flex flex-1 gap-2">{children}</SafeAreaView>;
}
