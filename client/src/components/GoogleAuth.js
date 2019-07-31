import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '310301573783-b19u8i6paa4i2tfadlkf9qqo9fm81no9.apps.googleusercontent.com',
                /**Since this is client side code it will be exposed anyway, this is one of the reasons why 
                 * I have to set an authorized origins in the Google project associated with it.
                 * It will not hide the anything from the client, 
                 * but I'll certainly use Create React App's dotenv support to keep it out of version control, later.  */
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <div className="">
                    <div className="ui active inline loader">
                    </div>
                </div>
            )
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
            </button>
            )
        }

    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}


export default GoogleAuth