import React, { useEffect } from 'react';
// Importing Pages
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
// Importing React Router
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            {/* Only one route is used */}
            {/* Both route paths render the home component */}
            <Route path={["/game/:id", "/"]}>
                <Home />
            </Route>
        </div>
    );
}

export default App;
