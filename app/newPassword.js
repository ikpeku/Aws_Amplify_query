import { useCallback, useState } from "react"
import { ScrollView, Text, View } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import { styles } from "./signin"

const NewPassword = () => {


    const [password, setPassword] = useState("")
    const [confirmCode, setConfirmCode] = useState("")


    const route = useRouter()

    const onConfirmPressed = useCallback(async () => {
        console.warn("confirm")
    }, [])



    const handleSignInPressed = useCallback(async () => {
        route.push("/signin")
    }, [])




    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
            <Text>Confirmation Code*</Text>
            <CustomInput placeholder="enter code" value={confirmCode} setValue={setConfirmCode} />


            <Text>New Password*</Text>
            <CustomInput placeholder="enter password" value={password} setValue={setPassword} />


            <CustomButton title="Submit" onPress={onConfirmPressed} />

            <CustomButton title="Back to sign in" onPress={handleSignInPressed} bg="white" fc="#000" />

            {/* <Text></Text> */}

        </ScrollView>
    )
}

export default NewPassword