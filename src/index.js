/*___________________________________________
SOURCE CODE ASSET OF SAMUEL ROBENS-PARADISE © 2018-2019
DISTRIBUTION OF CODE WITHOUT WRITTEN CONSENT OF
SAMUEL ROBENS-PARADISE IS PROHIBITED UNLESS
ACCESSED THROUGH PUBLIC DOIMAIN SUCH AS GITHUB
OR ANY OTHER OPEN SOURCE PLATFORM ON WHICH ASSET
WAS PUBLISHED WITH AUTHOR CONSENT
________________________________________________
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
