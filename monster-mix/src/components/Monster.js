import React from 'react';

const Monster = ({ monster }) => {
    return (
        <div>
            <img src ={monster.image} alt={monster.name} />
        </div>
    );
};

export default Monster;
