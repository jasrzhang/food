import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = function ({ result }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image}></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ResultDetail;
