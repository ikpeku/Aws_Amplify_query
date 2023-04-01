import { useCallback, useState } from "react"
import { ScrollView, Text, View } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import { styles } from "./signin"

const ForgotPassword = () => {


    const [userName, setUserName] = useState("")



    const route = useRouter()

    const onConfirmPressed = useCallback(async () => {
        console.warn("confirm")
    }, [])




    const handleSignInPressed = useCallback(async () => {
        route.push("/signin")
    }, [])




    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>

            <Text>User Name</Text>
            <CustomInput placeholder="enter user name" value={userName} setValue={setUserName} />

            <CustomButton title="Send" onPress={onConfirmPressed} />
            <CustomButton title="Back to sign in" onPress={handleSignInPressed} bg="white" fc="#000" />


        </ScrollView>
    )
}

export default ForgotPassword