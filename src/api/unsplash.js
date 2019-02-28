import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f2630cf749c0853b2c6bee9dba030aa5bf576cf927e9957e142d2f8908dd18ea"
  }
});
