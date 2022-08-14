import  {useCallback, useEffect,useState} from 'react'
import './App.css'
import AddPost from './Component/AddPost';
import Post from './Component/Post';
const App = () => {
const [posts, setPost] = useState([]);
const [search , setSearch]=useState('');
const onChange=useCallback((event)=>{
  setSearch(event.target.value);
},[])
const fetchData = useCallback(async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const post=await data.json()
  setPost(post);
}, [])
useEffect(() => {
  fetchData()
}, [fetchData])

const onAdd =useCallback( async (title,body) => {
    
  const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                        {
                        userId: 1,
                        title:title,
                        body:body
                        }),
                       }
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions )
      const data = await response.json()
  setPost((posts)=>[...posts,data]);
},[])
  
return(
  <>
     <div className='SearchInput'>
        <input type='text' className='inptAdd' id='inptAdd' placeholder='search posts (search by word in post title or body)'
        onChange={onChange} />
     </div>
     <AddPost onAdd={onAdd}/> 
  {
    posts.filter(posts=>
      posts.body.toLowerCase().includes(search)||posts.title.toLowerCase().includes(search)).map((post)=>(
      <Post id={post.id} title={post.title} body={post.body} key={post.id} />))
  }
</>)
}
export default App  