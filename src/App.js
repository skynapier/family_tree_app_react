import React from 'react';
import Show from './Components/TreeStructure'
import HomePage from './Components/HomePage'; // 首页
import './Css/App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pageName: ["Home", "test"]

     };
  }

  render() {
    let breadcrumb;
    var elements = [];

    for (var i = 0; i <this.state.pageName.length; i++){
      console.log(this.state.pageName[i]);
      elements.push(<Breadcrumb.Item>{this.state.pageName[i]}</Breadcrumb.Item>);
    }

    if(this.state.pageName[0] === "Home"){
      breadcrumb =  <Breadcrumb style={{ margin: '16px 0' }}>
                      {elements}
                    </Breadcrumb>;
    }

    return (
      <Router>
        <div className = "App" >
        <Layout className="layout">
          <Header>
            <div className="logo" />
            
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              
              <Menu.Item key="1"><Link to= "/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to= "/Show">Show</Link></Menu.Item>
              <Menu.Item key="3">Query</Menu.Item>
            </Menu>
          </Header>
          
          <Content style={{ padding: '0 50px' }}>
            {breadcrumb}
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
