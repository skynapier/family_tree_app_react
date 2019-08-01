import React from 'react';
import Show from './Components/TreeStructure'
import HomePage from './Components/HomePage'; 
import './Css/App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const routes = [
  {
    path: '',
    breadcrumbName: 'home',
  },
  {
    path: 'Show',
    breadcrumbName: 'Show',
  },
  {
    path: 'Query',
    breadcrumbName: 'Query',
  },
];

function  itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }


  render() {

    return (
      <Router>
        <div className = "App" >
        <Layout className="layout">
          <Header>
            <div className="logo" />
            
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              
              <Menu.Item key="1"><Link to= "/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to= "/Show">Show</Link></Menu.Item>
              <Menu.Item key="3">Query</Menu.Item>
            </Menu>
          </Header>
          
          <Content style={{ padding: '0 50px' }}>

            <Breadcrumb itemRender={itemRender} routes={routes} style={ {margin: '16px 0'} } />
            <div className= "wrap">
              <Route path="/" exact component={HomePage} />
              <Route path="/Show/" component={Show} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

        
      </div>
      </Router>
    );
  }
}

export default App;
