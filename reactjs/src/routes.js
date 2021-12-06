
import { BrowserRouter, routes ,Route } from 'react-router-dom';

import Lista from './pages/lista';


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/welcome' element={<Lista/>} /> 
        </BrowserRouter>
    )
}