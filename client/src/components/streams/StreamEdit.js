import React from 'react';
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import StreamForm from './StreamForm'


class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render() {
        if (!this.props.stream) {
            return (<div>
                <div className="ui segment">
                    <div className="ui active dimmer">
                        <div className="ui text loader">Loading your Stream</div>
                    </div>
                    <p></p>
                </div>

            </div>
            )
        }
        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm onSubmit={this.onSubmit}
                    initialValues={this.props.stream} />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }

}


export default connect(mapStateToProps, { fetchStream })(StreamEdit)