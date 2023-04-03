import { useCallback, useState } from "react"
import { ScrollView, Text, View } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import { styles } from "./signin"
import { useForm } from "react-hook-form"
import { Auth } from "aws-amplify"

const NewPassword = () => {
    const route = useRouter()

    const { handleSubmit, control } = useForm({
        defaultValues: {
            password: "",
            confirmCode: ""
        }
    })


    const onConfirmPressed = useCallback(async (data) => {
        await Auth.forgotPasswordSubmit(data.username, data.confirmCode, data.password)
        route.push("/")
    }, [])



    const handleSignInPressed = useCallback(async () => {
        route.push("/signin")
    }, [])




    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
            <Text>Confirmation Code*</Text>
            <CustomInput placeholder="enter code" name="username" control={control} />

            <Text>Confirmation Code*</Text>
            <CustomInput placeholder="enter code" name="confirmCode" control={control} />


            <Text>New Password*</Text>
            <CustomInput placeholder="enter password" name={"password"} control={control} rules={{ required: "required" }} />


            <CustomButton title="Submit" onPress={handleSubmit(onConfirmPressed)} />

            <CustomButton title="Back to sign in" onPress={handleSignInPressed} bg="white" fc="#000" />

            {/* <Text></Text> */}

        </ScrollView>
    )
}

export default NewPassword