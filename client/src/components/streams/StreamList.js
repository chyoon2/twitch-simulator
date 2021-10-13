import React from "react";
import { connect } from "react-redux";
import { formValues } from "redux-form";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <button className='ui button primary'>Edit</button>
          <button className='ui button negative'>Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className='item' key={stream.id}>
          {this.renderAdmin(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streaming Now</h2>
        <div className='ui celled list'>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);

// leave data from a json in an object form,but then turn it into an array when adding it a componenet so its easier to map.
//Object.values(state.streams) is an js fxn that turns everything in an object to an array.
