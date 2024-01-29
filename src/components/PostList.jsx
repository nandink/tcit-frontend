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
        <br/>
        <div>
            <table>
                <thead>
                    <tr>
                        <th> <strong>Title</strong></th>
                        <th><strong>Description</strong></th>
                        <th><strong>Action</strong></th>
                    </tr>
                </thead>
                <tbody> 
                    {filteredPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>
                                <input type="button" value="Delete" onClick={()=>{deletePost(post.id)}} />
                            </td>
                        </tr>
                    ))}
                 </tbody>
            </table>

        </div>
        </>
    )
}
export default PostList;