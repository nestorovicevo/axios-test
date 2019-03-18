import axios from 'axios';   //////////6.korak

class PostsService {     
    getPosts(){
        return axios.get('http://jsonplaceholder.typicode.com/posts')
    }
}

export const postService =  new PostsService();