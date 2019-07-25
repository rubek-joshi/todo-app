import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/home';
import TodoScreen from './src/screens/todo';
import EditTodoScreen from './src/screens/editTodo';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Todo: TodoScreen,
  EditTodo: EditTodoScreen 
});

export default createAppContainer(AppNavigator);
