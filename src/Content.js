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
    // 2. Cleanup function luôn được gọi trước khi component unmounted (luôn đúng cả  3 trường hơp)
    
    const tabs=['posts','comments','albums']
function Content(){
   const [title,setTitle]=useState('')
   const [posts,setPosts]=useState([])
   const [type,setType]=useState('posts')
    const[showGoToTop,setShowGoToTop]=useState(false)
    const [width,setWidth]=useState(window.innerWidth)
    //console.log(type);
    
    useEffect(()=>{
        //console.log('Mounted')
        //document.title=title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts);
        })
    },[type])
   
    useEffect(()=>{
        const handleScroll=()=>{
            console.log(window.scrollY);
            if(window.scrollY >=200){
                // show
                setShowGoToTop(true)
            }else{
                //hide
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        //console.log('mounting....');


        //Cleanup function
        return ()=>{
            //console.log('Umounting....');
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    useEffect(()=>{
        const handleResize=()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)

        //Cleanup function
        return()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return (
        <div>
            <h1>{width}</h1>
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
            {showGoToTop && (
                <button
                    style={{
                        position:'fixed',
                        right:20,
                        bottom:20
                    }}
                >Go to top</button>
            )}
        </div>
    )
}

export default Content