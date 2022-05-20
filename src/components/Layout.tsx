import React from 'react';
import { Layout, Menu} from 'antd';

const { Header } = Layout;

const Layout_content = () =>{
    return(
        <Layout>
          <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">ex 1</Menu.Item>
              <Menu.Item key="2">ex 2</Menu.Item>
              <Menu.Item key="3">ex 3</Menu.Item>
              <Menu.Item key="4">ex 4</Menu.Item>
              <Menu.Item key="5">ex 5</Menu.Item>
              <Menu.Item key="6">ex 6</Menu.Item>
              <Menu.Item key="7">ex 7</Menu.Item>
              <Menu.Item key="8">ex 8</Menu.Item>
              <Menu.Item key="9">ex 9</Menu.Item>
              <Menu.Item key="10">ex 10</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      )
}
export default Layout_content;