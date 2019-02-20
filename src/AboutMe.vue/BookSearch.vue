<template>
  <div>
    <h2 class="headline">vue books. uses the Google Books API</h2>
    <div class="links">
      <router-link v-bind:to="{ name: 'CurrentWeather'}">About vue books.</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'Forecast'}">About Me</router-link>
    
      <form v-on:submit.prevent="getBooks">
        <p>
          <input type="text" v-model="query" placeholder="Gore Vidal">
          <button type="submit">Go</button>
        </p>
       </form>
     </div>
          <ul v-if="results && results.items.length>0" class="results">
            <li v-for="item in results.items" class="item">
              <img v-bind:src="item.volumeInfo.imageLinks.thumbnail" alt="Book Cover" class="cover">
              <h2> {{item.volumeInfo.title}} </h2>
              <h4 v-for="author in item.volumeInfo.authors">{{author}}</h4>
              <h4> {{item.volumeInfo.publishedDate}} </h4>
              <h4> {{item.volumeInfo.publisher}} </h4>
              <p> {{item.volumeInfo.description}} </p>
            </li>
          </ul>
        </div>
</template>

<script>
import axios from 'axios';
import { API } from "@/common/api";

export default {
  name: "BookSearch",
  data() {
    return {
      results: null,
      errors:[],
      query: "",
      book: "",

    };
  },

  methods: {
    getBooks: function() {

      // axios({
      //   url: "https://www.googleapis.com/books/v1/volumes",
      //   method: "get",
      //   params: {
      //     APPID: 'AIzaSyDy0BTNGNSUteQAjcO2g4',
      //     q: "red"
         
      //   }
      // })

       API.get("", {
        params: {
          q: this.query
        }
      })

  
        .then(response => {
          console.log(response);
          this.results = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errors.push(error);
        });
    }
   },
  getCities: function() {
    this.results = null;
    this.showLoading = true;
  }
};
//}
</script>

<style scoped>
ul.results {
  list-style-type: none;
  padding: 0;
}
.results li {
  display: inline-block;
  margin: 10px;
  /*border-style: outset;*/
  -webkit-box-shadow:0px 0px 15px 1px #0f0e0e ;
  -moz-box-shadow:0px 0px 15px 1px #0f0e0e ;
  box-shadow:0px 0px 15px 1px #0f0e0e ;
  border-width: 3px #333;
  padding: 0.5rem;
  width: 1000px;
  min-height: 100px;
  color: #3B3939;
  background: #D9D4D4;
}


h1,
h2 {
  font-weight: strong;
}

.headline {
   text-shadow:0px 10px 50px #070707;
}

ul {
  list-style-type: none;
  padding: 0;
}

.cover {
  float:left;
  margin: 2rem;
  box-shadow: 4px 4px #4C4C4D;
}
/*li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
}*/

a {
  color: #42b983;
}
</style>