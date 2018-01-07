import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Label } from 'react-bootstrap';

class PostArticle extends Component {
    renderField(field) {
        return (
        <div className="form-group">
            <Label>{field.label}</Label>
            <input
                className="form-control"
                type="text"
                {...field.input} 
            />
            {field.meta.error}
        </div>
        );
    }
    
    onSubmit(values) {
        console.log(values);
        axios.post('localhost:3000/postArticle', { values } );
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
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
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
        errors.categories = "Enter a Category"
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
})(PostArticle);