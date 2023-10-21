import React, { useState } from 'react';
import axios from 'axios';
import './front.css';

const tokenKey = "";

function Front() {
    const [longURL, setLongURL] = useState('');
    const [shortURL, setShortURL] = useState('');

    const truncateURL = () => {
        axios
            .get(`https://tinyurl.com/api-create.php?url=${longURL}`, {
                headers: {
                    'Authorization': `Bearer ${tokenKey}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setShortURL(response.data);
            })
            .catch((error) => {
                console.error(error);
                // Handle error here
            });
    };

    return (
        <div className="body">
            <header>
                <p id="logo">Tiny URL</p>
            </header>

            <div className="main">
                <h2>URL Shortener</h2>
                
                <input
                    type="text"
                    placeholder="Enter..."
                    value={longURL}
                    onChange={(e) => setLongURL(e.target.value)}
                />
                <h4>Truncated URL Result Below</h4>
                <p>{shortURL}</p>
                {/**remoning the () from truncateURL ensures that the code is executed only if the user clicks on th button */}
                <button id='btn' onClick={truncateURL}>Convert</button>
            </div>
        </div>
    );
}

export default Front;