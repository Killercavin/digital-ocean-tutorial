import React from 'react';
import './AnimalCard.css';
import PropTypes from 'prop-types';

const AnimalCard = ({
    name,
    scientificName,
    size,
    diet,
    additional,
    showAdditional
}) => {
    return (
        <div className='animal-wrapper'>
            <h2>{name}</h2>
            <h3>{scientificName}</h3>
            <h4>{size}kg</h4>
            <div className='diet'>{diet.join(', ')}</div>
            <button onClick={ () => showAdditional(additional)}>More Info</button>
        </div>
    );
}


AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string
    }),
    showAdditional: PropTypes.func.isRequired
}

AnimalCard.defaultProps = {
    additional: {
        notes: 'No additional information.'
    }
}

export default AnimalCard;