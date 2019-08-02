import React from 'react';
import { Input, Button } from 'antd';
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
                <Button onClick={this.getData}>Test for AJAX requrie</Button>
                <br></br>
                {
                  this.state.data.map( (value,key)=>{

                    return <li key={key}>name:{value.name} father name: {value["father name"]}</li>;
                  })
                }
             
                
                
            </div>
        );
    }
}

export default Query;