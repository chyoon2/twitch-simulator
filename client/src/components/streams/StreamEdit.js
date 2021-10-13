import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);

// selectionReducer when a user clicks on a stream to edit isFinite, use this reducer to record what stream is being edited.
//use router. goes to a specific address of the stream they are trying to edit. put the id of the stream in the url .
//

// so mapStateToProps gives us the state, and the router gives us the id of the edited video. mapStateToProps gets called with two arg, the second is the props that shows up in the compoennet!!
