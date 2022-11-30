import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import QueryResult from "../../components/query-result";
import { ITrack } from "../../interface";
import TrackDetailComponent from "./components/track-detail-component";

const GET_TRACK = gql`
query GET_TRACK($trackId:ID!) {
  track(id: $trackId) {
   id
   thumbnail
   title
   numberOfViews
   modulesCount
   modules {
     id
     durationInSeconds
     title
     
   }
   description
   durationInSeconds
   author {
     id
     name
     photo
   }
 }
}
`

function TrackDetail() {

  const {id} = useParams();

  const {loading, data, error} = useQuery<{track:ITrack}>(GET_TRACK,{variables:{trackId:id}});

  const track = data?.track;

  return (
    <QueryResult data={track} loading={loading} error={error?.message}>
      { track ? <TrackDetailComponent track={track}/> : null }
    </QueryResult>
  
  )
}

export default TrackDetail