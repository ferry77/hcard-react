'use strict';

import React from 'react';

require('styles/hcard/components/Form.scss');

// Need a class definition for using "refs" in uploadAvatar
class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.readFile = this.readFile.bind(this);
        this.uploadAvatar = this.uploadAvatar.bind(this);
    }

    readFile(e) {
        if (window.FileReader) {
            var input = e.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = this.props.handleFormChange;
                reader.readAsDataURL(input.files[0]);
            }
        }
    }

    uploadAvatar() {
        this.refs['avatar'].click();
    }

    render() {
        return (
            <div className="hcard-form">
                <h1>hCard Builder</h1>
                <form action="">
                    <p className="form-section-title">Personal Details</p>

                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Given Name
                                <input type="text" name="givenName" id="given-name"
                                       value={this.props.formData.givenName}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>Surname
                                <input type="text" name="surname" id="surname" value={this.props.formData.surname}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Email
                                <input type="email" name="email" id="email" value={this.props.formData.email}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>Phone
                                <input type="tel" name="phone" id="phone" value={this.props.formData.phone}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                    </div>

                    <p className="form-section-title">Address</p>

                    <div className="row">
                        <div className="medium-6 columns">
                            <label>House Name or #
                                <input type="text" name="houseName" id="house-name"
                                       value={this.props.formData.houseName}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>Street
                                <input type="text" name="street" id="street" value={this.props.formData.street}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Suburb
                                <input type="text" name="suburb" id="suburb" value={this.props.formData.suburb}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>State
                                <input type="tel" name="state" id="state" value={this.props.formData.state}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Postcode
                                <input type="text" name="postcode" id="postcode" value={this.props.formData.postcode}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                        <div className="medium-6 columns">
                            <label>Country
                                <input type="text" name="country" id="country" value={this.props.formData.country}
                                       onChange={this.props.handleFormChange}/>
                            </label>
                        </div>
                    </div>

                    <div className="row cta">
                        <div className="medium-6 columns">
                            <input type="file" id="avatar-data-url" name="avatarDataUrl" accept="image/jpeg"
                                   ref="avatar" onChange={this.readFile}/>
                            <button type="button" className="secondary expanded button" onClick={this.uploadAvatar}>
                                Upload
                                Avatar
                            </button>
                        </div>
                        <div className="medium-6 columns">
                            <button type="button" className="expanded button">Create hCard</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

FormComponent.displayName = 'HcardComponentsFormComponent';

FormComponent.propTypes = {
    formData: React.PropTypes.object.isRequired
};

export default FormComponent;
