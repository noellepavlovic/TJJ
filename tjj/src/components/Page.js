import React, { Component } from 'react';
import '../App.css';
import NavMenu from '../components/NavMenu.js'


class Page extends Component {

    componentDidMount() {
        this.props.getPage(this.props.match.params.page);
    } 

    componentDidUpdate(prevProps) {
        if (this.props.match.params.page !== prevProps.match.params.page) {
          this.props.getPage(this.props.match.params.page)
        }
      }

    render() {
        return (
            <div>
                <NavMenu />
                <div className="container" style={{color: 'black', marginTop: '100px'}}>
                    <div dangerouslySetInnerHTML={{__html: this.props.content}}></div> 
                </div>    
            </div>
        );
    }
}

export default Page;