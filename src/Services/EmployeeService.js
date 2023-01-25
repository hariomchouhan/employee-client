import axios from "axios";

export function saveEmployee(employee) {
    return axios.post('http://localhost:5500/employees', employee)
}

export function fetchAllEmployees() {
    return axios.get('http://localhost:5500/employees');
}

export function deleteEmployee(id) {
    return axios.delete(`http://localhost:5500/employees/${id}`);
}