import { gql, useMutation, useQuery } from '@apollo/client'
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import QueryResult from '../../components/query-result';
import { ITrack } from '../../interface';
import TrackComponent from './components/track.component';

const TRACKS = gql`
query TracksForHome {
  tracksForHome {
    id
    title
    thumbnail
    modulesCount
    durationInSeconds
    author {
      id
      name
      photo
      
    }
  }
}
`;


const INCREMENT_TRACKVIEWS = gql`
mutation INCREMENT_TRACKVIEWS($trackId: ID!) {
  incrementTrackViews(id: $trackId) {
    code,
    message,
    success,
    track {
      id,
      numberOfViews
    }
  }
}
`



function Home() {
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<{ tracksForHome: ITrack[] }>(TRACKS);
  const [incrementViews, { loading:updateLoading }] = useMutation(INCREMENT_TRACKVIEWS)

  function onTrackSelect(id: string) {
    incrementViews({
      variables:{trackId:id},
      onCompleted(data: any, clientOptions?: any) {
        navigate(`/track/${id}`);
      },
    })
  }



  return <QueryResult data={data} error={error?.message} loading={loading || updateLoading}>
    <Row gutter={[16, 24]} wrap style={{ paddingLeft: "90px" }}>
      {data?.tracksForHome?.map((_track: ITrack) => {
        return <Col key={_track.id}><TrackComponent track={_track} onTrackSelect={onTrackSelect}/></Col>
      })}
    </Row>


  </QueryResult>
}

export default Home