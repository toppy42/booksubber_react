import React from 'react';

class Page extends React.Component {
    render() {
        var styles = {
            minHeight: '400px'
        }

        return (
            <div className="container border shadow" style={styles}>
                {this.props.children}
            </div>
        )
    };
};



export default Page;