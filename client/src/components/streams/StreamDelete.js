import React from 'react';
import Modal from '../Modal'

const StreamDelete = () => {

    const Actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    )

    return (
        <div>
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete?"
                action={Actions}
            />
        </div>
    );
};


export default StreamDelete