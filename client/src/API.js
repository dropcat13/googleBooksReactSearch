import axios from "axios";
import googleapi from "./APIkeys";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBooks: function(query) {
      console.log(BASEURL+query)
    return axios
    .get(BASEURL + query)
    // .then(res => {
    //   const books = res.data.results;
    //   console.log(books)
    //   return books
    //   (res => {
    //     return {
    //       img: res.items.volumeInfo.thumbnail,
    //       title: res.items.volumeInfo.name.last, 
    //       author: res.items.volumeInfo.author,
    //       blurb: res.items.volumeInfo.description
    //     };
    //   });
    // });
  }
};