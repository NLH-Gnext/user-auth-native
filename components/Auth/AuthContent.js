import { View } from "react-native";
import AuthForm from "./AuthForm";
import FlatButton from "../ui/FlatButton";

const AuthContent = () => {
  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
};

export default AuthContent;
