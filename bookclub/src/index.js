import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserPage from './Components/Pages/userPage'
import { BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(<Router >
    <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/userpage" component={UserPage}/>
    </div>
</Router>, document.getElementById('root'));
