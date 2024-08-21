import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  return (
    <div className="App">
      <MarksSheet name="VIVEK MARKS SHEET"
      engMarks="86"
      sanMarks="90"
      maths1AMarks="69"
      maths1BMarks="49"
      phyMarks="58"
      chemMarks="54"/>
      <MarksSheet name="VIRAT MARKS SHEET"
      engMarks="86"
      sanMarks="90"
      maths1AMarks="69"
      maths1BMarks="49"
      phyMarks="58"
      chemMarks="54"/>
      <MarksSheet name="DHONI MARKS SHEET"
      engMarks="26"
      sanMarks="30"
      maths1AMarks="99"
      maths1BMarks="29"
      phyMarks="68"
      chemMarks="14"/>
    </div>
  );
}

export default App;
