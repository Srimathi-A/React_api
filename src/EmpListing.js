import { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata,setEmpdata] = useState(null)
    const navigate=useNavigate();
    useEffect(() => {
        fetch("http://localhost:8000/employee")
        .then((res)=>res.json())
        .then((res)=>{
            setEmpdata(res);
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })
    const LoadEdit =(id) => {
        navigate('/employee/edit/'+id)
    }
    const LoadDetail =(id) =>{
        navigate('/employee/detail/'+id)
    }
    const RemoveFunction =(id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/employee/"+id,{
                method:"DELETE"
            })
            .then((res)=>{
                alert('Successfully deleted')
                window.location.reload();
            })
            .catch((err)=>console.log(err.message))
        }

    }
    return(
        <div>
            <div className='container'>
                <div className='card'>
                    <div className='card-title'>
                    <h2>Employee Listing</h2>
                    </div>
                    <div className='card-body'>
                        <div className='divbtn'>
                            <Link to = 'employee/create' className='btn btn-success'>AddNew(+)</Link>
                        </div>
                        <table className='table table-borderd'>
                            <thead className='table-dark text-white'>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Active</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empdata &&
                                    empdata.map((item)=>(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a onClick={()=>{LoadEdit(item.id)}}className='btn btn-success'>Edit</a>
                                                <a onClick={()=>{RemoveFunction(item.id)}}className='btn btn-danger'>Delete</a>
                                                <a onClick={()=>{LoadDetail(item.id)}}className='btn btn-primary'>Detail</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpListing