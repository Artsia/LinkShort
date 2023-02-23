
import './front.css';
//const axios = require('axios');
import axios from 'axios';
const tokenKey = "";
let longURL = '';
let shortURL = '';

let txtFieldId = document.getElementById('txtField');
let truncResultId = document.getElementById('truncResult');
let btnId = document.getElementById('btn');

function Front() {
    return (
        <div>
            <header>
                {/*Green header with 10vh , w = 100% with logo*/}
                <p id="logo">ShortURLs</p>
            </header>

            <div class="main">

                <h2>Shortten URL</h2>
                <h3>No Login Required</h3>
                <h4>Enter long URL</h4>

                <input type="textField" id="txtField" placeholder="Enter..." />

                <h4>Truncated URL Result</h4>

                <p id="truncResult"></p>

                <button id="btn" onclick="result()">Convert</button>

            </div>

        </div>
    );
}



/*Uses the Axios API
function truncateURL() {

    longURL = txtFieldId.value;

    axios.get(`https://tinyurl.com/api-create.php?url=${longURL}`, {
        headers: {
            'Authorization': `Bearer ${tokenKey}`,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        shortURL = response;
        truncResultId.textContent = shortURL;
        console.log(shortURL);
    })
        .catch(error => {
            console.error(error);
            //url has to be accesible to public, you can use a service like Port Adress Translation(PAT) 
            and Network Addresss Translation(NAT) to convert private IP address to public IP address.
            Convert intranet IP address for your bussiness to accessible IP address that can be found on the internet.
            these public Ip address can then be shortened.
        });
}
*/

export default Front;