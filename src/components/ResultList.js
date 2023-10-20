import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ResultDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultList = function ({ title, results, navigation }) {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={function () {
                navigation.navigate("ResultShow", { id: item.id });
              }}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultList);
