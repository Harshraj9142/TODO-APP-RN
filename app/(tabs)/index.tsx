import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import useTheme from "@/hooks/useTheme";

export default function Index() {
  
  const {toggleDarkMode} = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is the Todos Tab</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Click Me</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  content:{
    fontSize:22
  }
})
