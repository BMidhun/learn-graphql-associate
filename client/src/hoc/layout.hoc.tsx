import {Layout} from "antd";
import {Outlet} from 'react-router-dom'

const {Header,Footer,Content} = Layout

function LayoutHOC() {
    return (
        <Layout>
              <Header>
                 <h1>CatsAstro</h1>
              </Header>
              <Content>
                 <Outlet />
              </Content>
              <Footer></Footer>
        </Layout>
      )
}

export default LayoutHOC