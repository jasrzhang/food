import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp
        .get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "Adelaide",
          },
        })
        .then();
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong");
      setResults([]);
    }
  };

  // call serchAPI when components first rendered
  // searchApi("pasta"); Bad code! this is going to cause a infinite loop!
  //useEffect, only load once, which is what we want
  useEffect(function () {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
