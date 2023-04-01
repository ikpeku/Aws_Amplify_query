import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Stack } from "expo-router";

Amplify.configure(awsconfig)


export default function Layout() {
    return <Stack screenOptions={{ headerTitleAlign: "center", headerTintColor: "blue", headerTitleStyle: { fontSize: 24, fontWeight: "bold" }, headerShadowVisible: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='signin' />
        <Stack.Screen name='signup' options={{ title: "Create an account" }} />
        <Stack.Screen name='confirmSignup' options={{ title: "Confirm your email" }} />
        <Stack.Screen name='forgotPassword' options={{ title: "Forgot Password" }} />

    </Stack>;
}