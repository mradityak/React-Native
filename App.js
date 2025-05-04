import { StyleSheet, SafeAreaView } from 'react-native';
import TaskItem from './componants/TaskItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,  // To avoid cutting off content at the top
    backgroundColor: '#fff', // Optional, adds clarity
  },
});
