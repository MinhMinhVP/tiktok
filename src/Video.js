import { forwardRef,useImperativeHandle,useRef } from 'react'
import video1 from './Video/video_1.mp4'

function Video(props,ref){
    const videoRef=useRef()

    useImperativeHandle(ref,() =>({
        play() {
            videoRef.current.play()
        },
        pause (){
            videoRef.current.pause()
        }
    }))
    return (
        <video 

        ref={videoRef}
        src={video1}
        width={280}
        ></video>
    )
}

export default forwardRef(Video)