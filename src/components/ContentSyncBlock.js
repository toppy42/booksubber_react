import React from 'react';
import ContentArea from './ContentArea'

function ContentSyncBlock() {
    // Todo: For some reason the outer div is adding 8 px of space under the content
    return (
        <div className='border'>
            <div className="d-inline-block w-40" style={{height:'100px', backgroundColor: 'blue'}}>
                <ContentArea />
            </div>
            <div className="d-inline-block w-20" style={{height:'100px', backgroundColor: 'white'}}></div>
            <div className="d-inline-block w-40" style={{height:'100px', backgroundColor: 'red'}}></div>
        </div>
    );
}

export default ContentSyncBlock;