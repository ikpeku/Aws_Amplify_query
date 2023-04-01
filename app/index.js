import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter()
    return (
        <View>
            <Text onPress={() => router.push("/signin")} style={{ padding: 10, textAlign: "center", fontSize: 24, fontWeight: "bold" }}>goto signin</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})