import axios from "axios";
// import googleapi from "./APIkeys";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBooks: function(query) {
      console.log(BASEURL+query)
    return axios
    .get(BASEURL + query)
  },

  saveBooks: function(newData) {
    console.log("frontend API:", newData)
    return axios
    .post("/api/books/", newData)
  },

  getSavedBooks: function() {
    return axios
    .get("/api/books/")
  }
};