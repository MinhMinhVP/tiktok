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
    // 3. Cleanup function luôn được gọi trước khi callback được gọi - trừ lần mounted đầu tiên

    const tabs=['posts','comments','albums']
     const lessons=[
        {
            id:1,
            name:"minh fdufhewurfewuir"
        },
        {
            id:2,
            name:"minh 123"
        },
        {
            id:3,
            name:"minh 345345"
        }
    ]
function Content(){
   const [title,setTitle]=useState('')
   const [posts,setPosts]=useState([])
   const [type,setType]=useState('posts')
    const[showGoToTop,setShowGoToTop]=useState(false)
    const [width,setWidth]=useState(window.innerWidth)
    const [countdown,setCountdown]=useState(180)
    const [avatar,setAvatar]=useState()
    const[lessonId,setLessonId]=useState(1)
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
   
    // hiển thị button go to top khi cuộn chuột quá 200px
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

    // show chiều dài của màn hình khi thay đổi kích thước màn  hình
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

    useEffect(()=>{
        const timerID=setInterval(() => {
            setCountdown(prev => prev-1)
        }, 1000);

        return clearInterval(timerID)
    },[])
    useEffect(()=>{

        //cleanup
        return ()=>{
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handlePreviewAvatar=(e)=>{
        const file=e.target.files[0]
        file.preview=URL.createObjectURL(file)
        setAvatar(file)
    }
    /////////////////////
    useEffect(()=>{
        const handleComment=({detail})=>{
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`,handleComment)
        
        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)

        }
        
    },[lessonId])
    return (
        <div>
            <ul>
                {
                    lessons.map(lesson =>(
                        <li
                            key={lesson.id}
                            style={{
                                color: lessonId===lesson.id?'red':'#333'
                            }}
                            onClick={()=>setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))
                }
            </ul>
            <h1>{width}</h1>
            <h5>{countdown}</h5>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%"/>
            )}
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