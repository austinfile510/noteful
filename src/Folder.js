import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Folder(props) {
    return (
        <div>
            <Link to={'/folder/' + props.id}><p>{props.name}</p></Link>
        </div>
    )
}

Folder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}

export default Folder;