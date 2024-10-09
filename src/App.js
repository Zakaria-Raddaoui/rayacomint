import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Root from './pages/Root';
import Distribution from './pages/Distribution';
import './i18n';

function App() {
    return (

        <Router>
            <Routes>
                <Route path='/' Component={Root}/>
                <Route path="/distribution" element={<Distribution/>}/>
            </Routes>
        </Router>

    );
}

export default App;
