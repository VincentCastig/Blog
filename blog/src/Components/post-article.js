import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostArticle extends Component {
    renderTitleField(field) {
        return (
        <div>
            <input
                type="text"
                {...field.input} 
            />
        </div>
        );
    }

    render() {
        return (
            <form>
                <Field 
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostArticle);