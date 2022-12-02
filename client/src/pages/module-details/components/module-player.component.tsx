import ReactPlayer from "react-player";

function ModulePlayerComponent() {
  return (
    <div>
       <ReactPlayer
        url={"https://youtu.be/ImudUVWINXo"}
        // controls={true}
        width="100%"
        height={"500px"}
       >
       </ReactPlayer>
    </div>
  )
}

export default ModulePlayerComponent