<template>
  <div>
    <h2>vue books. uses the Google API</h2>
    <!-- <message-container v-bind:messages="messages"></message-container> -->
    <form v-on:submit.prevent="getBooks">
      <p>
        <input type="text" v-model="query" placeholder="Gore Vidal">
        <button type="submit">Go</button>
      </p>
    </form>
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
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
}

a {
  color: #42b983;
}
</style>