import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = function () {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={function (newTerm) {
          setTerm(newTerm);
        }}
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
