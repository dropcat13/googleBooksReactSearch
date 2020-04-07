import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBooks: function(query) {
    return axios
    .get(BASEURL + query)
    .then(res => {
      const books = res.data.results;
      return books.map(book => {
        return {
          img: employee.picture.thumbnail,
          title: `${employee.name.first} ${employee.name.last}`, 
          author: employee.phone,
          blurb: book.blurb
        };
      });
    });
  }
};