import React from 'react';

class Page extends React.Component {
    render() {
        var styles = {
            minHeight: '400px'
        }

        return (
            <div className="border shadow mx-auto p-3 w-100" style={styles}>
                {this.props.children}
            </div>
        )
    };
};



export default Page;