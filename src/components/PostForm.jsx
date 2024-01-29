import { useAddPostMutation } from "../api/apiSlice";

function PostForm(){

    const [addPost] = useAddPostMutation()

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.elements.title.value.trim()
        const description = e.target.elements.description.value.trim()

        const res = addPost({title, description})
        console.log(res)
        //console.log(title, description)

    };

    return (
        <form onSubmit={handleSubmit}>
            <strong>   Add Post </strong>
            <br/>
            <label>
                Title:
                <input type= "text" name="title" />
            </label>    
            <label>
                Description:
                <input type= "text" name="description" />
            </label>
            <button>Add Post</button>
        </form>    
    );
}

export default PostForm;