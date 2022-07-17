import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList = ({data}) => {

    const elements = data.map(elem => {
        return (
            // <EmployeesListItem name={elem.name} salary={elem.salary} />
            <EmployeesListItem {...elem} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;