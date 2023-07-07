import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = () => <div>Home Page</div>;
const SearchPage = () => <div>Search Page</div>;
const DetailsPage = () => <div>Details Page</div>;

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/details" component={DetailsPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
