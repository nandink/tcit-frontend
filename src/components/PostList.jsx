import { useState } from "react";
import { useFetchPostsQuery, useDeletePostMutation} from "../api/apiSlice";

function PostList(){
    const {data, error, isLoading, isError} = useFetchPostsQuery();

    const [deletePost] = useDeletePostMutation();
    const [searchQuery, setSearchQuery] = useState("");
    

    
    
    if (isLoading) return <div> Loading... </div>
    if (isError) return <div> Error: {error.message} </div>
    
    const filteredPosts = data.filter(
        (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(data)



    return (
        <>
        <div className="post-search">
            <div className="post-search__container">
            <input
                type="text"
                placeholder="Filter posts by title or description"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            </div>
        </div>
        <div>
            
            <ul>
                {filteredPosts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <input type="button" value="Delete" onClick={()=>{deletePost(post.id)}} />
                    </li>
                ))}
            </ul>

        </div>
        </>
    )
}
export default PostList;