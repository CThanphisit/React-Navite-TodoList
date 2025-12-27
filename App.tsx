import { createStaticNavigation } from "@react-navigation/native";
import { RootStack } from "./navigation/rootNavigation";

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
