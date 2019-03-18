 <template> 
  <div>
    <h2 class="headline">Search vue books.</h2>
    <form v-on:submit.prevent="getBooks">
      <p>
        <label>
          Search for Book or Author:
          <input
            type="text"
            v-model="query"
            placeholder="e.g. Ernest Hemingway"
          >
        </label>
        <button type="submit" :disabled="query.length < 1">Go</button>
      </p>
    </form>

    <ul v-if="results && results.items.length > 0" class="results">
      <br>
      <hr>
      <spinner v-if="showSpinner"></spinner>
      <transition-group name="resultsIn" enter-active-class="animated fadeInLeftBig" appear>
        <li v-for="item in results.items" class="item" v-bind:key="item.id">
          <div v-if="item.volumeInfo.imageLinks" >
            <img 
              v-bind:src="item.volumeInfo.imageLinks.thumbnail"
              v-bind:alt="item.volumeInfo.title"
              class="cover"
              width="150px"
              height="250px"
            >
          </div>
          <!-- <div v-else="item.volumeInfo.imageLinks.thumbnail === 0"><img v-bind:src="./assets/No_image_available.jpg" alt="" class="cover"></div> -->
          <h2>{{item.volumeInfo.title}}</h2>

          <p v-for="author in item.volumeInfo.authors">
            by
            <b>{{author}}</b>
          </p>
          <h4>{{new Date(item.volumeInfo.publishedDate).toLocaleDateString("en-US")}}</h4>
          <h4>{{item.volumeInfo.publisher}}</h4>
          <h4>{{item.volumeInfo.pageCount}} pages</h4>
          <h4 v-for="category in item.volumeInfo.categories">{{category}}</h4>
          <p>{{item.volumeInfo.description}}</p>
        </li>
      </transition-group>
    </ul>

    <div v-if="results && results.items && (results.items.length === 0)" class="no-results">
      <h2>No Books Found</h2>
      <p>Please adjust your search to find more books.</p>
    </div>

    <ul v-if="errors.length > 0" class="errors">
      <li v-for="(error,index) in errors" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { API } from "@/common/api";
import AboutVuebooks from "@/components/AboutVuebooks";
import CubeSpinner from "@/components/CubeSpinner";

export default {
  name: "BookSearch",
  components: {
    spinner: CubeSpinner,
  },
  data() {
    return {
      results: null,
      errors: [],
      query: "",
      book: "",
      showSpinner: false,
    };
  },

  init() {
    // JavaScript to be fired on all pages
    const wow = new Wow();
    wow.init();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },

  methods: {
    getBooks: function() {
      this.showSpinner = true;
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
          this.showSpinner = false;
          console.log(response);
          this.results = response.data;
          // this.results={items:[]};  test for no items
        })
        .catch(error => {
          this.showSpinner = false;
          console.log(error);
          if (!error.message) {
            error.message = "Problem";
          }
          this.errors.push(error);
        });
    }
  }
};
</script>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js";

ul.results {
  list-style-type: none;
  padding: 0;
}

/*.results li {
  display: inline-block;
  margin: 10px;
  /*border-style: outset;*/
/*-webkit-box-shadow:0px 0px 15px 1px #0f0e0e ;
  -moz-box-shadow:0px 0px 15px 1px #0f0e0e ;
  box-shadow:0px 0px 15px 1px #0f0e0e ;
  border-width: 3px #333;
  padding: 0.5rem;
  width: 1000px;
  min-height: 100px;
  color: #3B3939;
  background: #D9D4D4;
}*/

@media only screen and (max-width: 2000px) {
  ul.results {
    list-style-type: none;
    padding: 0;
  }

  .results li {
    display: inline-block;
    margin: 10px;
    /*border-style: outset;*/
    -webkit-box-shadow: 0px 0px 15px 1px #0f0e0e;
    -moz-box-shadow: 0px 0px 15px 1px #0f0e0e;
    box-shadow: 0px 0px 15px 1px #0f0e0e;
    border-width: 3px #333;
    padding: 0.5rem;
    min-height: 100px;
    color: #3b3939;
    background: #d9d4d4;
  }
}

/*Got the following from CSS Tricks */
hr {
  overflow: visible; /* For IE */
  height: 30px;
  border-style: solid;
  border-color: white;
  border-width: 1px 0 0 0;
  border-radius: 20px;
}

hr:before {
  /* Not really supposed to work, but does */
  display: block;
  content: "";
  height: 30px;
  margin-top: -31px;
  border-style: solid;
  border-color: white;
  border-width: 0 0 1px 0;
  border-radius: 20px;
}

.no-results {
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

ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

h1,
h2 {
  font-weight: strong;
}

.headline {
  text-shadow: 0px 10px 50px #070707;
}

ul {
  list-style-type: none;
  padding: 0;
}

.cover {
  float: left;
  margin: 2rem;
  box-shadow: 4px 4px #4c4c4d;
}

ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>