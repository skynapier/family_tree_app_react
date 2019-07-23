import React from 'react';
import Test1 from './Components/TreeStructure';
import './Css/App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Input } from 'antd';


const { Header, Content, Footer } = Layout;
const {Search} = Input;


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
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Show</Menu.Item>
            <Menu.Item key="3">Query</Menu.Item>
          </Menu>
        </Header>
        
        <Content style={{ padding: '0 50px' }}>
          {breadcrumb}
          <div className= "wrap">
            <Test1></Test1>
          </div>
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 1100, }}><Test1></Test1></div> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
    );
  }
}

export default App;
