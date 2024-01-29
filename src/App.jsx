import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/postList'
import PostForm from './components/PostForm'


function App() {
	return (
    <>
    <h1>TCIT Challenge</h1>
    <br/>
    <PostList />
    <br/>
    <PostForm />
    </>
  )
}

export default App;
