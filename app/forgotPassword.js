import { useCallback, useEffect } from "react"
import { ScrollView, Text, ActivityIndicator, View } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import { styles } from "./signin"
import { useForm } from "react-hook-form"
import { Auth } from "aws-amplify"


const ForgotPassword = () => {

    const route = useRouter()

    const { handleSubmit, control, reset, formState: { isSubmitSuccessful, isLoading, } } = useForm({
        defaultValues: {
            resetPassword: ""
        }
    })


    const onConfirmPressed = useCallback(async (data) => {
        await Auth.forgotPassword(data.username)
        route.push("/newPassword")
    }, [])

    useEffect(() => {
        if (isSubmitSuccessful) {

            reset({
                resetPassword: ""
            })
        }
    }, [isSubmitSuccessful])




    const handleSignInPressed = useCallback(async () => {

        route.push("/signin")
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator />
            </View>
        )
    }




    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>

            <Text>User Name</Text>
            <CustomInput rules={{ required: "user name should not be empty" }} placeholder="enter user name" control={control} name="resetPassword" />

            <CustomButton title="Send" onPress={handleSubmit(onConfirmPressed)} />
            <CustomButton title="Back to sign in" onPress={handleSignInPressed} bg="white" fc="#000" />


        </ScrollView>
    )
}

export default ForgotPassword