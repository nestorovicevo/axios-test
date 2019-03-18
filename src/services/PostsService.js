import axios from 'axios';   //////////6.korak
import { httpService } from './HttpService';

class PostsService {     
//////////14. korak zamena acios.post sa http
    create(post){
        // return axios.post('http://jsonplaceholder.typicode.com/posts', post)  ////9.korak  za kreiranje posta   isto i dole
        return httpService.post('/posts', post)
    }

    getPosts(){
        // return axios.get('http://jsonplaceholder.typicode.com/posts')
        return httpService.get('/posts')
    }
}

export const postService =  new PostsService();