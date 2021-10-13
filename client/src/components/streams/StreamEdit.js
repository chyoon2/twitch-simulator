import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    console.log(this.props.match.params.id);

    this.props.editStream(this.props.match.params.id, formValues);
  }; //this will recieve form values from the user, and call parent fxn

  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h3> Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          //lodash to pick out things from state, to pass on.
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
//initialValues is a special redux form name
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

// selectionReducer when a user clicks on a stream to edit isFinite, use this reducer to record what stream is being edited.
//use router. goes to a specific address of the stream they are trying to edit. put the id of the stream in the url .
//

// so mapStateToProps gives us the state, and the router gives us the id of the edited video. mapStateToProps gets called with two arg, the second is the props that shows up in the compoennet!!
