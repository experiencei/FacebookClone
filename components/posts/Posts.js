import  { useCollections } from "react-firebase-hooks/firestore"
import { db } from "../firebase/firebase"
import Post from "../post/Post"

function Posts( { posts }) {
     const [ realtimePosts , loading , error] = useCollections(
       db.collection("posts").orderBy("timestamp" , "desc")
     )

    return (
        <div>
           {    realtimePosts?
                realtimePosts?.docs.map(post => <Post
                 key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
            />) : (
                posts.map((post) => (<Post
                 key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
            />))
            )}
        </div>
    )
}

export default Posts
