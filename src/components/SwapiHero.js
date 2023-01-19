import React from 'react';
import PropTypes from 'prop-types';

function SwapiHero({ name, onClick }) {
    // console.log('[SwapiHero] render')
    return <div onClick={onClick}>
        <div>Name: <b style={{ color: 'blue' }}>{name}</b></div>
    </div>
};

SwapiHero.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string
};

SwapiHero.defaultProps = {
    onClick: () => {},
    name: 'goida'
};

export default SwapiHero;