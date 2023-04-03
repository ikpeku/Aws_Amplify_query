import { useCallback } from "react"
import { Alert, ScrollView, Text, View } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import { styles } from "./signin"
import { useForm } from "react-hook-form"
import { Auth } from "aws-amplify"


const ConfirmSignUp = () => {
    const route = useRouter()
    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            userName: route?.params?.username,
            confirmCode: ""
        }
    })

    console.log(route.params.username)

    const user = watch("userName")





    const onConfirmPressed = useCallback(async (data) => {
        try {
            await Auth.confirmSignUp(data.userName, data.confirmCode)
            route.push("/")
        } catch (error) {
            Alert.alert("error")
        }
    }, [])



    const handleCodeResendPressed = useCallback(async () => {
        try {
            await Auth.resendSignUp(user)
            Alert.alert("Code resend")
        } catch (error) {
            Alert.alert("error")

        }
    }, [])

    const handleSignInPressed = useCallback(async () => {
        route.push("/signin")
    }, [])




    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
            <Text style={{ alignSelf: "stretch" }}>Username*</Text>
            <CustomInput placeholder="enter username" name="userName" control={control} rules={{ required: "required" }} />

            <Text style={{ alignSelf: "stretch" }}>Confirmation Code*</Text>
            <CustomInput placeholder="enter code" name="confirmCode" control={control} rules={{ required: "required" }} />

            <CustomButton title="Confirm" onPress={handleSubmit(onConfirmPressed)} />


            <View style={{ flexDirection: "row", gap: 20 }}>

                <View>
                    <CustomButton title="Resend code" onPress={handleCodeResendPressed} type="Tertiary" />
                </View>

                <View>
                    <CustomButton title="Back to sign in" onPress={handleSignInPressed} bg="white" fc="#000" />
                </View>
            </View>

        </ScrollView>
    )
}

export default ConfirmSignUp