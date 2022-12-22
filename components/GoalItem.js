import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "purple" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style={({ pressed }) => pressed && styles.reppel}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    margin: 8,
    // padding: 1,
    borderRadius: 6,
    color: "#fff",
  },
  // reppel: {
  //   opacity: " .1",
  // },
  goalText: {
    color: "white",
    padding: 10,
    // textAlign: "center",
  },
});

export default GoalItem;
