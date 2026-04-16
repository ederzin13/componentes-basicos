import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {children}
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="dark-content"></StatusBar>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf4e6",
    alignItems: "center",
  },
});
