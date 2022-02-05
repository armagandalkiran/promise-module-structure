import axios from "axios";

export default async (user_id) => {

    const getUsers = () => {
        return new Promise(async (resolve,reject) => {
            const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
            resolve(user);
        });
    }

    const getPost = () => {
        return new Promise(async (resolve,reject) => {
            const { data:posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
            resolve(posts);
        });
    }

    (async () => {
        try{
            const users = await getUsers();
            const post = await getPost(1);
            users.posts = post;
            console.log(users);
            
        } catch (e) {
            console.log(e);
        }
    })();

    
}