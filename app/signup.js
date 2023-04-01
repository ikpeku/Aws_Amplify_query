
import { useCallback, useState } from "react"
import { ScrollView, Text } from 'react-native'
import { CustomButton, CustomInput } from '../components'
import { styles } from "./signin"
import { useRouter } from "expo-router"
import SocialBtns from "../components/SocialBtns"


const Signup = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const route = useRouter()


    const handleSignUpWithEmailAndPasswordPressed = useCallback(async () => {
        console.warn("logged in")
    }, [])


    const handleSignInPressed = useCallback(async () => {
        route.push("/signin")
    }, [])


    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
            <CustomInput placeholder="username" value={userName} setValue={setUserName} />
            <CustomInput placeholder="enter email" value={email} setValue={setEmail} />
            <CustomInput placeholder="enter password" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomInput placeholder="repeat password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />

            <CustomButton title="Create Account" onPress={handleSignUpWithEmailAndPasswordPressed} />

            <Text style={{ marginBottom: 30 }}>By registering you accept our terms and conditions</Text>

            <SocialBtns type="signup" />

            <CustomButton title="Already have an account? signIn" onPress={handleSignInPressed} bg="#fff" fc="#000" />

        </ScrollView>
    )
}

export default Signup