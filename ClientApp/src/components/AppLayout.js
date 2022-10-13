import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

export class AppLayout extends Component {
  static displayName = Layout.name;
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false, 
            selectedKey: this.props.location.pathname,
            menus: [
                {
                    label: 'Home',
                    key: '/admin',
                    icon: <MenuUnfoldOutlined />,
                },
                {
                    label: 'Counter',
                    key: '/admin/counter',
                    icon: <MenuFoldOutlined />
                },
                {
                    label: 'Fetch data',
                    key: '/admin/fetch-data',
                    icon: <MenuFoldOutlined />,
                },
                {
                    label: 'Employee List',
                    key: '/admin/employee',
                    icon: <TeamOutlined />
                },
                {
                    label: 'Customer Contact',
                    key: '/admin/contact',
                    icon: <UserOutlined />
                },
                {
                    label: 'Category',
                    key: '/admin/category',
                    icon: <MenuFoldOutlined />
                },
                {
                    label: 'About',
                    key: '/admin/about',
                    icon: <FileOutlined />
                },
                {
                    label: 'Product',
                    key: '/admin/product',
                    icon: <DesktopOutlined />
                },
                {
                    label: 'Carousel',
                    key: '/admin/carousel',
                    icon: <PieChartOutlined />
                },
                {
                    label: 'Service',
                    key: '/admin/service',
                    icon: <DesktopOutlined />
                },
                {
                    label: 'Setting',
                    key: '/admin/setting',
                    icon: <MenuFoldOutlined />
                }
            ]
        };

        this.setCollapsed = this.setCollapsed.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    setCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleMenuClick(e) {
       // console.log(e)
       this.props.navigate(e.key)
    }

    //highlight(){
    //    if (this.state.selectedKey === '/') {
    //        return ['1']
    //    } else if (this.state.selectedKey === '/counter') {
    //        return ['2']
    //    }
    //    else if (this.state.selectedKey === '/fetch-data') {
    //        return ['3']
    //    }
    //    else if (this.state.selectedKey === '/employee') {
    //        return ['4']
    //    }
    //}

  render() {
      return (
          <Layout style={{
              minHeight: '100vh',
          }}>
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={(value) => this.setCollapsed(value)} >
                  <div className="logo" />
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={this.state.menus} onClick={this.handleMenuClick} />
              </Sider>
              <Layout className="site-layout">
                  <Header
                      className="site-layout-background"
                      style={{
                          padding: 0,
                      }}
                  />
                  <Content
                      className="site-layout-background"
                      style={{
                          margin: '0 16px',
                          padding: 24,
                          minHeight: 360,
                      }}
                  >
                      {this.props.children}
                  </Content>
                  <Footer
                      style={{
                          textAlign: 'center',
                      }}
                  >
                      Ant Design ©2018 Created by Ant UED
                  </Footer>
              </Layout>
          </Layout>
    );
  }
}
