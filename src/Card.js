import React from 'react';

const Card = ({ title, content, color}) => {
    return (
        <div style={{...styles.card, backgroundColor: color }}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

const CardContainer = () => {
    return (
        <div style={styles.cardContainer}>
            <Card title="Card 01" content="Content for Card 1" color="darkred" />
            <Card title="Card 02" content="Content for Card 2" style="background-color: red;" color="#5f6f05" />
            <Card title="Card 03" content="Content for Card 3 is longer than the other two but it doesnt matter, the box size will expand, and other boxes will adapt to stay consistent." color="darkgreen" />
        </div>
    );
};

const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    card: {
        color: 'white',
        width: '50%',
        height: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
            margin: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
    },
};

export default CardContainer;
