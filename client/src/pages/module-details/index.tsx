import { Col, Divider, Row, Space } from 'antd'
import { useNavigate, useParams } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";

import ModuleDetailsViewComponent from './components/module-details-view.component';
import ModuleListComponent from './components/module-list/module-list.component';
import ModulePlayerComponent from './components/module-player.component';
import QueryResult from '../../components/query-result';
import { IModule, ITrack } from '../../interface';

const GET_TRACKINFO = gql`
  query GET_TRACKINFO($id: ID!) {
     track(id: $id) {
        id,
        title,
        modules{
          id,
          title,
          durationInSeconds
        }
     }
  }
`

const GET_MODULEINFO = gql`
query GET_MODULEINFO($id: ID!) {
  module(id: $id) {
    id,
    title,
    content,
    videoUrl
  }
}
`


function ModuleDetails() {
  const { trackId, moduleId = "" } = useParams();

  const navigate = useNavigate();

  const { data:trackData, loading:trackLoading, error:trackError } = useQuery<{track:ITrack}>(GET_TRACKINFO, { variables: { id: trackId } });
  const {data:moduleData, loading:moduleLoading, error:moduleError}= useQuery<{module:IModule}>(GET_MODULEINFO,{variables:{id: moduleId}})

  const selectModule = (id:string) => {
    navigate(`/track/${trackId}/module/${id}`);
  }

  return (
    <QueryResult data={trackData && moduleData} loading={trackLoading || moduleLoading} error={trackError?.message || moduleError?.message}>
      <Space direction='vertical' size={"middle"} style={{ width: "100%" }}>
        <Row gutter={16} style={{ background: "black", padding: "40px" }}>
          <Col span={18}>
            <ModulePlayerComponent videoUrl={moduleData?.module?.videoUrl}/>
          </Col>
          <Col span={6}>
            <ModuleListComponent 
            modules={trackData?.track?.modules} 
            currentModuleId={moduleId} 
            trackTitle={trackData?.track.title} 
            selectModule={selectModule}
            />
          </Col>
        </Row>
        <Divider></Divider>
        <ModuleDetailsViewComponent  title={moduleData?.module?.title} content={moduleData?.module?.content}/>
      </Space>
    </QueryResult>

  )
}

export default ModuleDetails