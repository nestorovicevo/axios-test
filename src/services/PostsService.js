import axios from 'axios';   //////////6.korak

class PostsService {     

    create(post){
        return axios.post('http://jsonplaceholder.typicode.com/posts', post)  ////9.korak  za kreiranje posta
    }

    getPosts(){
        return axios.get('http://jsonplaceholder.typicode.com/posts')
    }
}

export const postService =  new PostsService();