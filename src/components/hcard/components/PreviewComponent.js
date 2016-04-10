'use strict';

import React from 'react';

require('styles/hcard/components/Preview.scss');

let PreviewComponent = (props) => {

    let avatarClass = '';
    if (!props.previewData.avatarDataUrl) {
        avatarClass = 'hide';
    }

    let fullName = () => `${props.previewData.givenName} ${props.previewData.surname}`;

    let addressLine1 = () => `${props.previewData.houseName} ${props.previewData.street}`;

    let addressLine2 = () => (props.previewData.suburb.length && props.previewData.state.length ?
            `${props.previewData.suburb}, ${props.previewData.state}` :
            `${props.previewData.suburb} ${props.previewData.state}`.trim()
    );


    return (
        <div className="card-preview">
            <p>HCard Preview</p>
            <div className="card">

                <div className="card-header">
                    <div className="photo">
                        <img className={avatarClass} src={props.previewData.avatarDataUrl} alt="avatar"/>
                    </div>
                    <h2>{fullName()}</h2>
                </div>

                <div className="card-body">

                    <dl>
                        <dt>Email</dt>
                        <dd>{props.previewData.email}</dd>
                        <dt>Phone</dt>
                        <dd>{props.previewData.phone}</dd>
                        <dt>Address</dt>
                        <dd>{addressLine1()}</dd>
                        <dd className="full">{addressLine2()}</dd>
                        <dt>Postcode</dt>
                        <dd className="short">{props.previewData.postcode}</dd>
                        <dt>Country</dt>
                        <dd className="short">{props.previewData.country}</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

PreviewComponent.displayName = 'HcardComponentsPreviewComponent';

PreviewComponent.propTypes = {
    previewData: React.PropTypes.object.isRequired
};

export default PreviewComponent;
