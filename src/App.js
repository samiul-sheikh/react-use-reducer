import './App.css';
import ReduceCount from './Components/ReduceCount/ReduceCount';
import PatientManagement from './Components/PatientManagement/PatientManagement';

function App() {
    return (
        <div className="App">
            <ReduceCount></ReduceCount>
            <PatientManagement></PatientManagement>
        </div>
    );
}

export default App;
