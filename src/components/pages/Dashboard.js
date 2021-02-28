import React,{ useState,useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import Nav from '../etc/Nav';
import 'tachyons';

function Dashboard(){
	const [filter,setFilter] = useState('null');
	useEffect(() => {
		console.log(filter);
	},[filter])
	return(
		<div>
		  <Nav />
		  <div >
		    <div className="pa4">
			  <div className="overflow-auto">
			    <div className="f6 w-100 mw8 center">
			    <label htmlFor="filter">
			    <FaFilter className="f6 w-100 mw8 center"/>
			    </label>
					<select className="f6 w-100 mw8 center" 
					onClick={(e) => setFilter(e.target.value)}
					name="filter" id="filter">
					  <option value="date">
					  {`Date`}
					  </option>
					  <option value="organisation">
					  {`Organisation`}
					  </option>
					  <option value="rating">
					  {`Rating`}
					  </option>
					</select>
			    
			    </div>

			    <table className="f6 w-100 mw8 center" cellSpacing="0">
			      <thead>
			        <tr className="stripe-dark">
			          <th className="fw6 tl pa3 bg-white">Name</th>
			          <th className="fw6 tl pa3 bg-white">Date</th>
			          <th className="fw6 tl pa3 bg-white">Phone Number</th>
			          <th className="fw6 tl pa3 bg-white">Organization</th>
			          <th className="fw6 tl pa3 bg-white">Ratings</th>
			        </tr>
			      </thead>
			      <tbody className="lh-copy">
			        
			        <tr className="stripe-dark">
			          <td className="pa3">Hassan Johnson</td>
			          <td className="pa3">@hassan</td>
			          <td className="pa3">hassan@companywithalongdomain.co</td>
			          <td className="pa3">14419232532474</td>
			          <td className="pa3">5</td>
			        </tr>
			        
			      </tbody>
			    </table>
			  </div>
			</div>
		  </div>
		</div>
		)
}

export default Dashboard;