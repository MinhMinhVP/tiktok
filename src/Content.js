import { useEffect,useState   } from "react"

    // 1.useEffect(callback)
    // - gọi callback mỗi khi component re-render
    // - gọi callback sau khi component thêm element vào DOM
    // 2.useEffect(callback, [])
    // - chỉ gọi callback 1 lần khi component mounted
    // 3.useEffect(callback, [deps])
    // - callback sẽ được lại mỗi khi deps thay đổi
    // ---
    // 1. callback luôn được gọi sau khi componeent mounted (luôn đúng cả  3 trường hơp)
    
    const tabs=['posts','comments','albums']
function Content(){
   const [title,setTitle]=useState('')
   const [posts,setPosts]=useState([])
   const [type,setType]=useState('posts')

    console.log(type);
    
    useEffect(()=>{
        //console.log('Mounted')
        //document.title=title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts);
        })
    },[type])
   
    return (
        <div>

            <input
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            {tabs.map(tab=>(
                <button 
                    key={tab}
                    style={type === tab ? {
                        color:'#fff',
                        backgroundColor:'#333',
                    } : {}}
                    onClick={()=>setType(tab)}
                >{tab}</button>
            ))}
            <ul>
                {
                    posts.map(post =>(
                        <li key={post.id}>
                            {post.title ||post.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Content