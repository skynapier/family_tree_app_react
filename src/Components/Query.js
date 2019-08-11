import React from 'react';
import { Input, Button, Popover } from 'antd';
import axios from'axios';


const {Search} = Input;

class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data:[]
          };
    }


    
    getData=()=>{
    
        var api = "http://127.0.0.1:3001/query";
        setTimeout(
          ()=>{
            axios.get(api)
            .then( (response)=>{
              console.log(response.data);

              this.setState({
                data:this.state.data.concat(response.data)
              });
              console.log(this.state.data);
              
            } )
            .catch( function(error){
              console.log(error)
            })
          },1000
        );
        
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
                <Button onClick={this.getData}>Test for AJAX request;</Button>
                <br></br>
                {
                  this.state.data.map( (value,key)=>{
                    var ret = []
                    var name = "";
                    for(var key in value){
                      if(key != "name"){
                        ret.push(<li key={key}>{key} : {value[key]} </li>);
                      }
                      else{
                        name = value[key];                        
                      }
                      
                    }

                    return (<Popover content={ret} title="Family Info">
                      <Button type="primary">{name}</Button>
                    </Popover>);
                  })
                }
             
                
                
            </div>
        );
    }
}

export default Query;