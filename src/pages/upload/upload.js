import React, { Component } from 'react'
import Header from "../../components/Header/Header";

export default class upload extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
    }
    
    render() {
        return (
          <div className="upload page">
            <Header hasBack={true} title="上传" {...this.props} />
          </div>
        );
    }

}
