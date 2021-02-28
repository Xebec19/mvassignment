import React from 'react';
import Nav from '../etc/Nav';
import '../../App.css';
import 'tachyons';

function Create(){
	return(
		<div>
		<Nav />
		<table className="f6 w-100 mw8 center" cellSpacing="0">
	      <thead>
	        <tr className="stripe-dark">
	          <th className="fw6 tl pa3 bg-white">Parameters</th>
	          <th className="fw6 tl pa3 bg-white">Values</th>
	        </tr>
	      </thead>

	      <tbody className="lh-copy">
	        
	        <tr className="stripe-dark">
	          <td className="pa3">Name</td>
	          <td className="pa3">
	          <input type="text" />
	          </td>
	        </tr>
	        <tr className="stripe-dark">
	          <td className="pa3">Date</td>
	          <td className="pa3">
	          <input type="date" />
	          </td>
	        </tr>
	        <tr className="stripe-dark">
	          <td className="pa3">Phone Number</td>
	          <td className="pa3">
	          <input type="number" />
	          </td>
	        </tr>
	        <tr className="stripe-dark">
	          <td className="pa3">Organization</td>
	          <td className="pa3">
	          <div className="dropdown">
	          <button className="dropbtn">
	          Organization</button>
	          <div className="dropdown-content">
	          <p>Org1</p>
	          <p>Org2</p>
	          <p>Org3</p>
	          </div>
	          </div>
	          </td>
	        </tr>
	        <tr className="stripe-dark">
	          <td className="pa3">Ratings</td>
	          <td className="pa3">
	          <input type="text" />
	          </td>
	        </tr>
	        
	      </tbody>


	      <tfoot>
	        <tr className="stripe-dark center fw6 tl pa3 bg-white">
	          <td className="center fw6 tl pa3 bg-white"></td>
	          <td className="center fw6 tl pa3 bg-white">
	          <button>Submit</button>
	          </td>
	        </tr>
	      </tfoot>

		</table>
		</div>
		)
}

export default Create;