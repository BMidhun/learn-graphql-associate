import ReactPlayer from "react-player";

interface IProp {
   videoUrl:string | undefined
}

function ModulePlayerComponent({videoUrl}:IProp) {
  return (
    <div>
       <ReactPlayer
        url={videoUrl}
        // controls={true}
        width="100%"
        height={"500px"}
       >
       </ReactPlayer>
    </div>
  )
}

export default ModulePlayerComponent