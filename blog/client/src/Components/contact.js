import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postEmail } from '../actions';

class Contact extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className =  `form-group ${touched && error ? 'has-danger' : ''}`
        

        return (
        <div className={className} >
            <Label>{field.label}</Label>
            <input
                className="form-control"
                type="text"
                {...field.input} 
            />
            <div className="text-help">
                {touched ? error: ''}
            </div>
        </div>
        );
    }
    
    onSubmit(values) {
      console.log('values', values)
        this.props.postEmail(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="listContainer">
              <div className="name-field">
                <Field 
                    label="Name"
                    name="name"
                    component={this.renderField}
                />
              </div>
              <div className="email-field">
                <Field 
                    label="Email"
                    name="email"
                    component={this.renderField}
                />
              </div>
                <div className="message-content">
                <Field 
                    label="Comment"
                    name="message"
                    component={this.renderField}
                />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>

                <div>
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Your message has been sent!</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>An error occured while submitting the form.</p>
        </div>
      }
    </div>
            </form>
        );
    }
}

function validate(values) {
    //console.log(values -> {title: 'asdf', categories: 'qwerty'})
    const errors = {}

    //validate the inputs from the values
    if (!values.name) {
        errors.name = "Enter a Name"
    }
    if (!values.email) {
        errors.email = "Enter Your Email"
    }
    if (!values.message) {
        errors.message = "Enter Your Message"
    }
    //if errors is empty, the form is fine to submit
    //if errors has any properties, the form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsEmailForm'
})(
    connect(null, { postEmail })(Contact)
);