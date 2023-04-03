import { useCallback, useState } from "react"
import { StyleSheet, Image, useWindowDimensions, ScrollView, TextInput, Alert } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import SocialBtns from "../components/SocialBtns"
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify"

const Home = () => {
    const { height } = useWindowDimensions()
    const [isDisable, setIsDisable] = useState(false)


    const route = useRouter()

    const { handleSubmit, control } = useForm()



    const handleSignInWithEmailAndPasswordPressed = useCallback(async (data) => {
        setIsDisable(true)


        try {
            await Auth.signIn({ username: data.username, password: data.password })

            setIsDisable(false)

        } catch (error) {
            setIsDisable(false)
            Alert.alert("invalid credentials")

        }

        console.log(response)

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
                required: 'username required',

            }} placeholder="enter your username" name="username" secureTextEntry={false} control={control} />
            <CustomInput rules={{ required: "password is required", minLength: { value: 3, message: "Password length should be more than three", max: { value: 6, message: "too much" } } }} placeholder="enter password" name="password" secureTextEntry={true} control={control} />


            <CustomButton disabled={isDisable} title="Log in" onPress={handleSubmit(handleSignInWithEmailAndPasswordPressed)} />
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