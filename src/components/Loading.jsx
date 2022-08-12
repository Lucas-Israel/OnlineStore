import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" style={ { width: '3rem', height: '3rem' } }>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loading;
