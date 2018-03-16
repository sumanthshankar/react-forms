import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

  /*  <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" 
                           value={this.state.searchName} />
                    <br />
                    <label>License:</label>
                    <select value={this.state.value}>
                        <option value="mit">MIT</option>
                        <option value="isc">ISC</option>
                        <option value="apache-2.0">Apache</option>
                        <option value="gpl">GPL</option>
                    </select>
                    <br />
                    <label>Include Forked:</label>
                    <input type="checkbox" name="true" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div> */