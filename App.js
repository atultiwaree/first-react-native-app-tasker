import { StyleSheet, View, FlatList, Alert, ToastAndroid, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoal, setCourseGoals] = useState([]);
  const [modalIsVisible, setModelIsVisible] = useState(false);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals([...courseGoal, { text: enteredGoalText, id: Math.random().toString() }]);
    setModelIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoalList) => currentGoalList.filter((goals) => goals.id != id));
    ToastAndroid.show("selected goal was deleted", 3000);
  };

  const startAddGoalHandler = () => {
    setModelIsVisible(true);
  };

  const endGoalHandler = () => {
    setModelIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add your goals" color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} closeModal={endGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return <GoalItem onDeleteItem={deleteGoalHandler} id={itemData.item.id} text={itemData.item.text} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
