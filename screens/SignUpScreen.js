import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("Sign up failed, Try again");
    }
    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="createing user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
