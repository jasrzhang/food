import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer BLkeWxhjW90AQNcg-BXMjZjz1RzL3PwhNeKm0-VwCBMjQfcvoSR8JUqLun84Gf22845p1qi6LgjIOlFa-kZNiqbQGDuUY5_D7bX-jsIn3VZAQ9hnHLUmoObvYxUxZXYx",
  },
});
