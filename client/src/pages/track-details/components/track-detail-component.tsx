import { Card, Divider, Image, Space } from "antd"
import { ITrack } from "../../../interface";

import ModuleTableComponent from "./module-table-component"
import TrackDataComponent from "./track-data-component";
import TrackDescriptionComponent from "./track-description-component";

interface IProps {
    track:ITrack
}


function TrackDetailComponent({track}:IProps) {
    return (
        <Space direction="vertical" size={"middle"} style={{ width: "80%", margin: "auto", paddingLeft:"300px" }}>
            <Image
                alt="Track Thumbail.jpg"
                src={track.thumbnail}
                width={"100%"}
                height={500}
                style={{objectFit:"cover"}}
            />

            <Card title={track.title} bordered={false}>
                <TrackDataComponent 
                    author={track.author}
                    duration={track.durationInSeconds}
                    noOfModules={track.modulesCount}
                    views={track.numberOfViews}
                />
                <Divider />

                <ModuleTableComponent modules={track.modules}/>
            </Card>

            <TrackDescriptionComponent description={track.description}/>
        </Space>
    )
}

export default TrackDetailComponent