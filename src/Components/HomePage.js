import React from 'react';
import { Form, Icon, Input, Button, Checkbox, PageHeader } from 'antd';
import '../Css/HomePage.css';
import axios from'axios';
 
class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getData=()=>{
    
    var api = "http://127.0.0.1:3001/query";

    axios.get(api)
    .then( function(response){
     
      console.log(response.data)
    } )
    .catch( function(error){
      console.log(error)
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
 
  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <div className="welcome">
        
        <PageHeader title="Welcome"></PageHeader>

        <Button onClick={this.getData}>Test for AJAX requriement</Button>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
 


export default Form.create({ name: 'normal_login' })(Homepage);