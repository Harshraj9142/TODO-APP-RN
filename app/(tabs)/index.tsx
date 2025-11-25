import {StatusBar, Text,TouchableOpacity } from "react-native";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Index() {

  const { toggleDarkMode, colors} = useTheme();
  
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);

  if (isLoading) return <LoadingSpinner />;

  return(
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
    
    <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView style={homeStyles.safeArea}>
      <Header/>
      <TodoInput/>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Click Me</Text>
      </TouchableOpacity>

    
    </SafeAreaView>
    </LinearGradient>
  );
}


