import { useState, useEffect } from 'react'

const tabs = ['Posts', 'Comment', 'Albums']

function CallAPI (){

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('Posts')
    
    console.log(type);

    useEffect(()=>{
        console.log('new');
        // fetch(`https://jsonplaceholder.typicode.com/${type}`)
        // .then((res)=>{
        //     return res.json()
        // })
        // .then(
        //     posts => setPosts(posts)
        // )
    }, [type])
    useEffect(() => {
        document.title = title
    })
    return (
        <div>
            <input 
      value = {title}
      onChange = {(e)=>{
        return setTitle(e.target.value)
      }}
      />
      {tabs.map(tab => 
        <button 
        key = {tab}
        style = {type === tab ? {
            color: '#fff',
            backgroundColor: '#008b8b'
        } : {}}
        onClick = {()=> setType(tab)}
        >
            {tab}
        </button>
        )}
        </div>
    )
}

export default CallAPI