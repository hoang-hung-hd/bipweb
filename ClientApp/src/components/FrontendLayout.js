import React, { Component } from 'react';
//import { Container } from 'reactstrap';
//import { NavMenu } from './NavMenu';
//import {
//    MenuFoldOutlined,
//    MenuUnfoldOutlined,
//    UserOutlined,
//    TeamOutlined,
//    FileOutlined,
//    DesktopOutlined,
//    PieChartOutlined,
//} from '@ant-design/icons';
//import { Layout, Menu, Breadcrumb } from 'antd';
//const { Header, Sider, Content, Footer } = Layout;
import {
    Routes,
    Route,
    Outlet,
    Link,
    useSearchParams,
    useParams,
} from "react-router-dom";

export class FrontendLayout extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      return (
          <Outlet />
    );
  }
}
