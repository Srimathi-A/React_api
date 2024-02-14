import { useEffect,useState } from "react";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function EmpDetails(){
    const {empid} = useParams();
    const [empdata,setEmpdata] = useState({})

    useEffect (()=>{
        fetch("http://localhost:8000/employee/"+empid)
        .then((res)=>res.json())
        .then((data)=>setEmpdata(data))
        .catch((err)=>console.log(err.message))
    },[])
    return(
        <div>
            <div className="card" style={{'textAlign':'left'}}>
                <div className="card=title">
                <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    {
                        empdata &&
                        <div>
                            <h2>Employee Name: {empdata.name}</h2>
                            <h3>Contact Details</h3>
                            <h4>Email:{empdata.email}</h4>
                            <h4>Phone:{empdata.phone}</h4>
                            <Link to='/' className='btn btn-success'>Back to Listing</Link>
                         </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default EmpDetails;