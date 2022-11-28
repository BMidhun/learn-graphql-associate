import { gql, useQuery } from '@apollo/client'
import { Col, Row } from 'antd';
import QueryResult from '../../components/query-result';
import { ITrack } from '../../interface';
import TrackComponent from './components/track.component';

const TRACKS = gql`
query TracksForHome {
  tracksForHome {
    id,
    title,
    thumbnail
    modulesCount
    length
    author {
      id
      name
      photo
      
    }
  }
}
`;



function Home() {
  const {data, loading, error} = useQuery<{tracksForHome: ITrack[]}>(TRACKS);
  console.log({data});

  return <QueryResult data={data} error={error?.message} loading={loading}>
            <Row gutter={2} wrap>
            {data?.tracksForHome?.map((_track) => {
               return <Col span={4}><TrackComponent track={_track} /></Col>
            })}
            </Row>
      
        </QueryResult>
}

export default Home