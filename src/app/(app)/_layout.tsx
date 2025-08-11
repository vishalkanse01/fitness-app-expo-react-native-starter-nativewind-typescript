import { useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

function Layout() {
  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

  if (!isLoaded) {
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>;
  } else
    return (
      <Stack>
        <Stack.Protected guard={isSignedIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={!isSignedIn}>
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    );
}

export default Layout;
