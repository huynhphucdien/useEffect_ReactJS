import { useEffect, useState } from 'react'

// 1. useEffect(callback): Ít dùng trong thực tế
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm elemengt vào DOM
// 2. useEffect(callback, [])
// - Chir goij callback 1 laanf sau khi component mounted
// 3. useEffect(callback, [deps]): callback là bắt buộc, deps ko bắt buộc
// - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

// -----------------------------------------------------------------
// callback luôn được gọi sau khi component mounted



function Content (){

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            return res.json()
        })
        .then(
            posts => setPosts(posts)
        )
    }, [])
    // useEffect(() => {
    //     document.title = title
    // })
    return (
        <div>
            <input 
      value = {title}
      onChange = {(e)=>{
        return setTitle(e.target.value)
      }}
      />
      <ul>
          {posts.map((post)=>{
             return <li key = {post.id}>{post.title}</li>})}
      </ul>
        </div>
    )
}
export default Content