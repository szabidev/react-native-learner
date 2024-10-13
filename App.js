import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import InputScreen from "./src/screens/InputScreen";

/**
 * Creates a stack navigator with the specified route configuration and options.
 * @property {object} Home - The screen component for the "Home" route.
 * @property {object} Components - The screen component for the "Components" route.
 * @property {string} initialRouteName - The name of the initial route to render.
 * @property {object} defaultNavigationOptions - Default options for the navigator.
 * @property {string} defaultNavigationOptions.title - The default title for the navigator.
 */

const navigator = createStackNavigator(
  {
    // Define the routes for the navigator. Each route corresponds to a screen component.
    // A screen component is a React component that represents a screen or view in your application. Each screen component is associated with a route in the navigator. When a route is navigated to, the corresponding screen component is rendered.
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    InputScreen: InputScreen,
  },
  {
    // Configuration options for the navigator.
    initialRouteName: "Home", // The initial route to render when the app starts.
    defaultNavigationOptions: {
      title: "App", // Default title for the navigator.
    },
  }
);

// Wrap the navigator in a container component to manage the navigation state.
export default createAppContainer(navigator);
