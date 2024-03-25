import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../utils/auth";
import { Alert } from "react-native";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await loginUser(email, password);
    } catch (error) {
      Alert.alert("Login Failed,Check your credentials");
    }
    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
