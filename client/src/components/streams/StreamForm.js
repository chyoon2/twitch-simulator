import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  //formValues has all the values from the form
  const errors = {};

  if (!formValues.title) {
    //only if user entered NO title, in which case must return an object that has for each invalid field, put a key-value pair on the object with the name of the field and the error message. errors={title: 'you must enter a title'}
    errors.title = "You must enter a Title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a Description";
  }
  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
