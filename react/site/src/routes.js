
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Lista from './pages/Lista';
import Error from './pages/error';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Lista} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}