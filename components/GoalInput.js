import { TextInput, Button, StyleSheet, View, Alert, Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText != "") {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    } else Alert.alert("Make sure you enter atleast one goal.");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          value={enteredGoalText}
          placeholder="Please type your goal here..."
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.closeModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button style={styles.btn} title="Add to list" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 16,
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderWidth: 2,
    width: "100%",
    // marginRight: 5,
    padding: 16,
    borderRadius: 6,
    color: "#120438",
  },
  btn: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginTop: 8,
    marginHorizontal: 8,
  },
  image: {
    height: 300,
    width: 300,
    margin: 20,
  },
});

export default GoalInput;
