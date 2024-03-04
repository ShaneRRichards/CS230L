import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.leftItems}>
                <button style={styles.button}>Home</button>
                <button style={styles.button}>About</button>
                <button style={styles.button}>Contact</button>
            </div>

            <img style={styles.logo} src="/logo192.png" alt="Logo" />

            <div style={styles.rightItems}>
                <input type="text" placeholder="Search..." style={styles.searchBar} />
            </div>

        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#333',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, .7)',
    },

    leftItems: {
        display: 'flex',
        alignItems: 'left',
    },

    button: {
        display: 'flex',
        marginRight: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
    },

    rightItems: {
        display: 'flex',
        alignItems: 'right',
    },

    searchBar: {
        display: 'flex',
        padding: '4px',
        borderRadius: '20px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    
    logo: {
        display: 'flex',
        alignItems: 'center',
        width: '50px',
        height: 'auto',
    },
};

export default Navbar;
    