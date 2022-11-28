import {Avatar, Layout, Typography, Space} from "antd";
import {Outlet} from 'react-router-dom'

import styles from "./layout.module.css";

const {Header,Footer,Content} = Layout;
const {Title, Paragraph} = Typography;

function LayoutHOC() {
    return (
        <Layout className={styles.layout}>
              <Header className={styles.layoutHeader}>
                  <Space>
                     <Avatar src="https://joeschmoe.io/api/v1/cat" size={50}></Avatar>
                     <Title level={2} style={{margin:"auto 0"}}>CatsAstro</Title>
                  </Space>
              
              </Header>
              <Content className={styles.layoutContent}>
                 <Outlet />
              </Content>
              <Footer className={styles.layoutFooter}>
                  <Paragraph>&copy; All Rights Reserved CatsAstro</Paragraph>
              </Footer>
        </Layout>
      )
}

export default LayoutHOC