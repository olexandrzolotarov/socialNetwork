import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper container">
                <Header />
                <Sidebar />
                <Content />
            </div>
        </BrowserRouter>
    );
}


export default App;
