import React, {Component} from 'react';
import axios from 'axios';

class FormShortenUrl extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        let url = this.url.value;
        axios.post('http://localhost:3000/', {url: url})
            .then(res => {
                if (res.status == 200) {
                    this.url.value = '';
                }
            });
    }

    render() {
        return (
            <div id="form_container" class="t-center mid-container foot-room">
                <form >
                    <fieldset>
                        <input id="shorten_url" type="text" className="shorten-input"
                               placeholder="Paste a link to shorten it" ref={(input) => this.url = input}/>
                        <button
                            className="button button-primary button-large shorten-button" onClick={this.submit}>Shorten
                        </button>
                    </fieldset>
                </form>
                <div id="shorten_actions">
                </div>
            </div>
        );
    }
}

export default FormShortenUrl;
