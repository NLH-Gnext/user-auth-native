import React from "react";
import { View } from "react-native";
import Input from "./Input";

const AuthForm = () => {
  const submitHandler = () => {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  };
  return (
    <View>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={updateValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={updateValueHandler.bind(this, "confirmEmail")}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={updateValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateValueHandler.bind(this, "confirmPassword")}
            secure
            value={enteredConfirmEmail}
            isInvalid={passwordsDontMatch}
          />
        )}
      </View>
    </View>
  );
};

export default AuthForm;
