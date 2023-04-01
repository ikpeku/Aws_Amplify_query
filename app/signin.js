import { useCallback, useState } from "react"
import { StyleSheet, Image, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { useRouter } from "expo-router"
import SocialBtns from "../components/SocialBtns"
import { useForm, Controller } from "react-hook-form";

const Home = () => {
    const { height } = useWindowDimensions()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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


            {/* <CustomInput placeholder="enter email" value={email} setValue={setEmail} secureTextEntry={false} />
            <CustomInput placeholder="enter password" value={password} setValue={setPassword} secureTextEntry={true} /> */}
            <Controller name="email" control={control} render={({ field: { onBlur, onChange, value } }) => (
                <TextInput placeholder="email" value={value} onChangeText={onChange} onBlur={onBlur} />
            )} />

            <TextInput placeholder="password" />

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