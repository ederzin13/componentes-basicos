import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/global";

type ScrollableProps = {
  children: React.ReactNode;
};

export default function Scrollable({ children }: ScrollableProps) {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={globalStyles.container}>{children}</View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="dark-content"></StatusBar>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
