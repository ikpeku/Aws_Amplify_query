
import { useCallback, useState } from "react"
import { ScrollView, Text } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { styles } from "./signin"
import { useRouter } from "expo-router"
import SocialBtns from "../components/SocialBtns"
import { useForm } from "react-hook-form"


const Signup = () => {
    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const route = useRouter()

    const password = watch("password")



    const handleSignUpWithEmailAndPasswordPressed = useCallback(async (data) => {
        console.warn("logged in", data)
    }, [])


    const handleSignInPressed = useCallback(async () => {
        route.push("/signin")
    }, [])


    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
            <CustomInput rules={{ required: "This field is required." }} control={control} placeholder="username" name="username" />
            <CustomInput rules={{
                required: "This field is required.", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid e-mail address',
                }
            }} control={control} placeholder="enter email" name="email" />
            <CustomInput rules={{ required: "This field is required." }} control={control} placeholder="enter password" name="password" secureTextEntry={true} />
            <CustomInput rules={{ validate: value => value === password || "password do not match" }} control={control} placeholder="repeat password" name="confirmPassword" secureTextEntry={true} />

            <CustomButton title="Create Account" onPress={handleSubmit(handleSignUpWithEmailAndPasswordPressed)} />

            <Text style={{ marginBottom: 30 }}>By registering you accept our terms and conditions</Text>

            <SocialBtns type="signup" />

            <CustomButton title="Already have an account? signIn" onPress={handleSignInPressed} bg="#fff" fc="#000" />

        </ScrollView>
    )
}

export default Signup