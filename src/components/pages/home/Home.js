import React, { Component } from 'react';
import { Layout, BackTop } from 'antd';
import Head from '../header/Head';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            phone: '12121212121',
            email: '12121212121',
            consultation: '12121212121',
            report: '12121212121',
            formatDate: 'YYYY-MM-DD',
            isLoad1: false,
            isLoad2: false,
            isLoad3: false,
        }
    }
    componentDidMount(){

    }
    render() {
        return (
           <div>
               <Head/>
               <Layout></Layout      >
               <BackTop></BackTop>
           </div>
        );
    }
}

export default Home;
