import { Card, Divider, Image, Space } from "antd"

import ModuleTableComponent from "./module-table-component"
import TrackDataComponent from "./track-data-component";
import TrackDescriptionComponent from "./track-description-component";


function TrackDetailComponent() {
    return (
        <Space direction="vertical" size={"middle"} style={{ width: "80%", margin: "auto" }}>
            <Image
                alt="Track Thumbail.jpg"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                width={"100%"}
                height={500}
            />

            <Card title="Track Title" bordered={false}>
                <TrackDataComponent />
                <Divider />

                <ModuleTableComponent />
            </Card>

            <TrackDescriptionComponent />
        </Space>
    )
}

export default TrackDetailComponent