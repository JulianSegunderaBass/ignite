import React, { useEffect } from 'react';
// Importing Pages and Components
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
// Importing React Router
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            {/* Only one route is used */}
            {/* Both route paths render the home component */}
            <Route path={["/game/:id", "/"]}>
                <Home />
            </Route>
        </div>
    );
}

export default App;
