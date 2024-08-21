import React from 'react'

function MarksSheet(props) { 
  let engMarks=Number(props.engMarks);
  let sanMarks=Number(props.sanMarks);
  let maths1AMarks=Number(props.maths1AMarks);
   let maths1BMarks=Number(props.maths1BMarks);
    let phyMarks=Number(props.phyMarks);
     let chemMarks=Number(props.chemMarks);

    let totalMarks=engMarks+sanMarks+maths1AMarks+maths1BMarks+phyMarks+chemMarks;
  return (
    <div>
      <table>
      <caption>{props.name}</caption>
        <thead>
          <tr>
            <th rowSpan="2">SUBJECT</th>
            <th colspan="3">I YEAR</th>
            <th colspan="3">II YEAR</th>
          </tr>
          <tr>
            <th>MAXIMUM MARKS(I)</th>
            <th>MARKS SECURED(I)</th>
            <th>RESULTS</th>
            <th>MAXIMUM MARKS(II)</th>
            <th>MARKS SECURED(II)</th>
            <th>RESULTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ENGLISH</th>
            <td>100</td>
            <td>{engMarks}</td>
            <th>{engMarks >= 35?"PASS":"FAIL"}</th>
            <td>100</td>
            <td>85</td>
            <th>PASS</th>
          </tr>
          <tr>
            <th>SANSKRIT</th>
            <td>100</td>      
            <td>{sanMarks}</td>
            <th>{sanMarks >= 35?"PASS":"FAIL"}</th>
            <td>100</td>
            <td>98</td>
            <th>PASS</th>
          </tr>
          <tr>
            <th>MATHEMATICS-A</th>
            <td>75</td>
            <td>{maths1AMarks}</td>
            <th>{maths1AMarks >= 35?"PASS":"FAIL"}</th>
            <td>75</td>
            <td>73</td>
            <th>PASS</th>
          </tr>
          <tr>
            <th>MATHEMATICS-B</th>
            <td>75</td>
            <td>{maths1BMarks}</td>
            <th>{maths1BMarks >= 35?"PASS":"FAIL"}</th>
            <td>75</td>
            <td>62</td>
            <th>PASS</th>
          </tr>
          <tr>
            <th>PHYSICS</th>
            <td>60</td>
            <td>{phyMarks}</td>
            <th>{phyMarks >= 35?"PASS":"FAIL"}</th>
            <td>60</td>
            <td>55</td>
            <th>PASS</th>
          </tr>
          <tr>
            <th>CHEMISTRY</th>
            <td>60</td>
            <td>{chemMarks}</td>
            <th>{chemMarks >= 35?"PASS":"FAIL"}</th>
            <td>60</td>
            <td>52</td>
            <th>PASS</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>TOTAL MARKS(I)</th>
            <th>470</th>           
            <th>{totalMarks}</th>
            <th>PASSED</th>
          </tr>
          <tr>
            <th>TOTAL MARKS(II)</th>
            <th colspan="3"></th>
            <th>470</th>
            <th>425</th>
            <th>PASSED</th>
          </tr>
          <tr>
            <th>TOTAL MARKS OBTAINED</th>
            <th colspan="6">891</th>
          </tr>

        </tfoot>
      </table>
    </div>
  )
}

export default MarksSheet
