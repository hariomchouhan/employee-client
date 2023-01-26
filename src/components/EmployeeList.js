import { useEffect, useState } from "react";
import { Alert, Button, Container, Table } from "react-bootstrap";
import { deleteEmployee, fetchAllEmployees } from "../Services/EmployeeService";

export function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const fetchEmployees = async()=>{
        const response = await fetchAllEmployees();
        setEmployees(response.data);
    }
    useEffect(()=>{
        fetchEmployees();
    },[]);
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert variant="success">List of Employee</Alert>
            </Container>
            <Container>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Salary</th>
                            <th>Department</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp)=>{
                                return(
                                    <tr className="text-center">
                                        <td>{emp.name}</td>
                                        <td>+91-{emp.phone}</td>
                                        <td>&#8377;{emp.salary}</td>
                                        <td>{emp.department}</td>
                                        <td><Button variant="danger" className="btn-sm" onClick={async()=>{
                                            await deleteEmployee(emp._id);
                                            fetchEmployees();
                                        }}>Remove</Button>
                                        <Button variant="primary" className="btn-sm mx-5">Edit List</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}