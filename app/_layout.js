import { Amplify, Auth, Hub } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Stack } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

Amplify.configure(awsconfig)


export default function Layout() {
    const [user, setUser] = useState(undefined)

    const checkAuthState = () => {
        try {
            const isAuthUser = Auth.currentAuthenticatedUser({ bypassCache: true })
            setUser(isAuthUser)
        } catch (error) {
            setUser(null)

        }
    }
    useEffect(() => {
        checkAuthState()

    }, [])

    useEffect(() => {

        const listener = (data) => {
            if (data.payload.event === "signIn" || data.payload.event === "signOut") {
                checkAuthState()
            }
            Hub.listen("auth", listener)
        }

        return listener
    }, [])

    if (user === undefined) {
        return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator color={"green"} />
        </View>
    }


    return <Stack screenOptions={{ headerTitleAlign: "center", headerTintColor: "blue", headerTitleStyle: { fontSize: 24, fontWeight: "bold" }, headerShadowVisible: false }}>
        {user ? <Stack.Screen name='index' />
            :
            <>
                <Stack.Screen name='signin' />
                <Stack.Screen name='signup' options={{ title: "Create an account" }} />
                <Stack.Screen name='confirmSignup' options={{ title: "Confirm your email" }} />
                <Stack.Screen name='forgotPassword' options={{ title: "Forgot Password" }} />

            </>

        }

    </Stack>;
}