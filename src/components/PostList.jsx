import { useFetchPostsQuery, useDeletePostMutation} from "../api/apiSlice";

function PostList(){
    const {data, error, isLoading, isError} = useFetchPostsQuery();

    const [deletePost] = useDeletePostMutation();


    if (isLoading) return <div> Loading... </div>
    if (isError) return <div> Error: {error.message} </div>
    console.log(data)

    return (
        <div>
            <h1> Post List </h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <input type="button" value="Delete" onClick={()=>{deletePost(post.id)}} />
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default PostList;