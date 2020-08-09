import {APIURL} from '../helpers/Urls';
export const Update_Posts='Update_Posts'



export function fetchPosts(){
    
    return ((dispatch)=>{
        const url=APIURL.fetchPost()
        fetch(url).then(response=>response.json()).then((response)=>{
            //,
            dispatch(updatePosts(response.data.posts))
            console.log(response.data.posts)
        }   )
    })
}
    
// export function handleMovieSearch(movie){
//     //api call
//     const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
//     return function(dispatch){
//     fetch(url).then(response=>response.json()).then(hi=>{
//         console.log(hi)
//         dispatch(addMovieSearchtoresult(hi))
//     })
//     .catch(err=>console.log("error",err))
//     }
// }


export function updatePosts(post){
    return{
        type:Update_Posts,
        post:post
    }
}



