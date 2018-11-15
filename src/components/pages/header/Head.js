import React, { Component } from 'react';
import { Layout ,Menu} from 'antd';
import User from '../../UserInfo'
const { Header} = Layout;
class Head extends Component {
  constructor(props){
    super(props);
    this.state={
      islogin:false
    }
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
         <Header>
         <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
         </Header>
      </div>
    );
  }
}

export default Head;
