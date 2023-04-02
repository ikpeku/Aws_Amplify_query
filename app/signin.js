import { useCallback } from "react"
import { StyleSheet, Image, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import SocialBtns from "../components/SocialBtns"
import { useForm } from "react-hook-form";

const Home = () => {
    const { height } = useWindowDimensions()


    const route = useRouter()

    const { handleSubmit, control } = useForm()



    const handleSignInWithEmailAndPasswordPressed = useCallback(async (data) => {
        console.log(data)
    }, [])

    const handleForgetPasswordPressed = useCallback(async () => {
        route.push("forgotPassword")
    }, [])

    const handleSignUpPressed = useCallback(async () => {
        route.push("/signup")
    }, [])




    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
            <Image style={[styles.logo, { height: height * 0.3 }]} source={require("../assets/signin.png")} resizeMode="contain" resizeMethod="auto" />


            <CustomInput rules={{
                required: 'Enter your e-mail',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid e-mail address',
                }
            }} placeholder="enter email" name="email" secureTextEntry={false} control={control} />
            <CustomInput rules={{ required: "password is required", minLength: { value: 3, message: "Password length should be more than three", max: { value: 6, message: "too much" } } }} placeholder="enter password" name="password" secureTextEntry={true} control={control} />


            <CustomButton title="Log in" onPress={handleSubmit(handleSignInWithEmailAndPasswordPressed)} />
            <CustomButton title="Forget Password" onPress={handleForgetPasswordPressed} type="Tertiary" />

            <SocialBtns />
            <CustomButton title="Dont have an account? signup" onPress={handleSignUpPressed} bg="white" fc="#000" />

        </ScrollView>
    )
}

export default Home

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10
    },
    logo: {
        width: "70%",
        maxHeight: 300,
        maxWidth: 300,
    },

})