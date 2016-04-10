require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HCardForm from './hcard/components/FormComponent';
import HCardPreview from './hcard/components/PreviewComponent';

class AppComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hCard: {
                givenName: '',
                surname: '',
                email: '',
                phone: '',
                houseName: '',
                street: '',
                suburb: '',
                state: '',
                postcode: '',
                country: '',
                avatarDataUrl: ''
            }
        };
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(e) {
        if(e.target instanceof FileReader) {
            this.setState({
                hCard: Object.assign({}, this.state.hCard, {avatarDataUrl : e.target.result})
            })
        } else {
            this.setState({
                hCard: Object.assign({}, this.state.hCard, {[e.target.name] : e.target.value})
            })
        }
    }
    
    render() {
        return (
            <div className="row h-card-builder">
                <div className="columns small-12 large-6 form">
                    <HCardForm formData={this.state.hCard} handleFormChange={this.handleFormChange}></HCardForm>
                </div>
                <div className="columns small-12 large-6 preview">
                    <HCardPreview previewData={this.state.hCard}></HCardPreview>
                </div>
            </div>
        );
    }
}


export default AppComponent;
