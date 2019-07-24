import React from 'react';
import { Tree, Input } from 'antd';

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

    onLoadData = treeNode =>
    new Promise(resolve => {
      
      if (treeNode.props.children) {
        resolve();
        return;
      }
      
      console.log(this.state.treeData[0].title);
      
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
                
                <Tree loadData={this.onLoadData}>{this.renderTreeNodes(this.state.treeData)}</Tree>
            </div>
        );
    }
}

export default TreeStructure;