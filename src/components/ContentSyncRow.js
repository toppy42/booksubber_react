import React from 'react';
import ContentArea from './ContentArea'

class ContentSyncRow extends React.Component {
    render(){
        return (
            <div className='row border' style={{height:'100px'}}>
                <div className="col-sm" style={{backgroundColor: 'blue'}}>
                    <ContentArea />
                </div>
                <div className="col-sm-3" style={{backgroundColor: 'white'}}></div>
                <div className="col-sm" style={{backgroundColor: 'red'}}>
                    <ContentArea />
                </div>
            </div>
        );
    };
}

export default ContentSyncRow;