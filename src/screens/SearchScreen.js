import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = function ({ navigation }) {
  console.log({ navigation });
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = (price) => {
    // price ==='$' ||'$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultList
          results={filterResultByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultList
          results={filterResultByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
