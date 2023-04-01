import { View, Text } from 'react-native'
import React,{useCallback} from 'react'
import { CustomButton } from '.'

const SocialBtns = ({type="signin"}) => {

    const handleSignUpWithGoogledPressed = useCallback(async () => {
        console.warn("logged in with google")
    }, [])
    const handleSignUpWithFacebookPressed = useCallback(async () => {
        console.warn("logged in facebook")
    }, [])
    const handleSignUpWithApplePressed = useCallback(async () => {
        console.warn("logged in apple id")
    }, [])


  return (
    <>
       <CustomButton title={`Sign ${ type === "signin" ? "in" : "up"} with Facebook`} onPress={handleSignUpWithFacebookPressed} bg="red" fc='#4765A9' />
        <CustomButton title={`Sign  ${ type === "signin" ? "in" : "up"} with Google`} onPress={handleSignUpWithGoogledPressed} bg="purple" />
        <CustomButton title={`Sign  ${ type === "signin" ? "in" : "up"} with Apple`}onPress={handleSignUpWithApplePressed} bg="green" />
    </>
  )
}

export default SocialBtns