import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { axios } from 'axios'; 
import { Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postArticles } from '../actions';

class PostArticle extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className =  `form-group ${touched && error ? 'has-danger' : ''}`

        return (
        <div className={className}>
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
        console.log(values);
        this.props.postArticles(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Category"
                    name="category"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    //console.log(values -> {title: 'asdf', categories: 'qwerty'})
    const errors = {}

    //validate the inputs from the values
    if (!values.title) {
        errors.title = "Enter a Title"
    }
    if (!values.categories) {
        errors.category = "Enter a Category"
    }
    if (!values.content) {
        errors.content = "Enter Content"
    }
    //if errors is empty, the form is fine to submit
    //if errors has any properties, the form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { postArticles })(PostArticle)
);