import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { LoginForm } from '~/components/loginForm';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <Container>
        <LoginForm />
      </Container>
    </>
  );
}
