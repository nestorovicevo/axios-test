<template>
  <div id="app">
    <h1>Posts</h1>
                                <!-- ///////3.korak        -->
    <div id="posts">                                            
      <div class=" posts" v-for="post in posts" :key="post.id">
        <h3>{{post.title}}</h3>
        {{post.body}}
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';   //1. korak   axios je biblioteka              4.korak a onda smo obrisali zbog POstService
import {postService} from './services/PostsService'    ////7 korak


export default {
  data(){
    return{
      posts: []
    }
  },

  created() {
    // axios.get('http://jsonplaceholder.typicode.com/posts')       /////2.korak   5.korak ovo smo iskopirail u postService metodu getPOst
    postService.getPosts()                        ////////////8.korak      zamena umesto ovog iznad obrisanog
    .then(response => response.data)
    .then(data => {
      this.posts = data;

      postService.create({           ///////10. korak
        name: 'Kiza',

        lastName: 'Nestorovic'
      })
      .then(response => response.data)
      .then(data=> {
            console.log(data)})
      .catch(e=> {
        console.log(e)
      })
      
    })
    .catch(e=> {
      console.log(e);
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
