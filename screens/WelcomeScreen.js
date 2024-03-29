import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

const WelcomeScreen = () => {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    axios
      .get(
        "https://expense-tracker-native-5f1dc-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);
  return (
    <View>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {},
});
