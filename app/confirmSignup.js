import { useCallback, useState } from "react"
import { ScrollView, Text, View } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import { styles } from "./signin"

const ConfirmSignUp = () => {


    const [userName, setUserName] = useState("")
    const [confirmCode, setConfirmCode] = useState("")


    const route = useRouter()

    const onConfirmPressed = useCallback(async () => {
        console.warn("confirm")
    }, [])



    const handleCodeResendPressed = useCallback(async () => {
        console.warn("forget password")
    }, [])

    const handleSignInPressed = useCallback(async () => {
        route.push("/signin")
    }, [])




    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
            <Text>Username*</Text>
            <CustomInput placeholder="enter email" value={userName} setValue={setUserName} />

            <Text>Confirmation Code*</Text>
            <CustomInput placeholder="enter code" value={confirmCode} setValue={setConfirmCode} />

            <CustomButton title="Confirm" onPress={onConfirmPressed} />


            <View style={{ flexDirection: "row" }}>
                <CustomButton title="Resend code" onPress={handleCodeResendPressed} type="Tertiary" />

                <CustomButton title="Back to sign in" onPress={handleSignInPressed} bg="white" fc="#000" />
            </View>

        </ScrollView>
    )
}

export default ConfirmSignUp