import { useParams } from "react-router-dom";
import TrackDetailComponent from "./components/track-detail-component";

function TrackDetail() {

  const {id} = useParams();

  return (
    <TrackDetailComponent />
  )
}

export default TrackDetail