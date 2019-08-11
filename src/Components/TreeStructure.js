import React from 'react';
import { Tree, Input, Button } from 'antd';
import axios from'axios';

const { TreeNode } = Tree;
const {Search} = Input;

class TreeStructure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [
                { title: 'Default Search', key: '0' },
              ],
          };
       
    }


    getData=()=>{
    
      var api = "http://127.0.0.1:3001/query";
  
      axios.get(api)
      .then( (response)=>{
        console.log(response.data);
        
        this.setState({
          treeData: [{title:response.data.name, }]
        });
      
        
      } )
      .catch( function(error){
        console.log(error)
      })
    }


    onLoadData = treeNode =>
    new Promise(resolve => {
      
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout( () => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ];
       
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    });

  renderTreeNodes = data =>
    data.map(item => {
      
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />
    });

    handleSearch = (value) =>{

      var temp = [{title:`${value}`, key:this.state.treeData.eventKey }]
      this.setState({
        treeData:[...temp]
      });
    
    }

    render() {
        return (
            <div>
                <Search
                placeholder="input search name"
                onSearch={this.handleSearch}
                style={{ width: 300, }}
                />
                <br></br>
                <Button onClick={this.getData}>Test for AJAX requriement</Button>
                <Tree loadData={this.onLoadData}>{this.renderTreeNodes(this.state.treeData)}</Tree>
            </div>
        );
    }
}

export default TreeStructure;