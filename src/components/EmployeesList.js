import React from 'react';

class EmployeesList extends React.Component {
  state = {
    searchQuery: ''
  }

  render() {
    const { employees } = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" onChange={(e) => {this.setState({searchQuery: e.target.value})}}/>
        </div>
        <ul className="employees-list">
          {employees && employees.filter(emp => emp.name.toLowerCase()
            .includes(this.state.searchQuery.toLowerCase()))
              .map(e => (<li key={e.name} data-testid="employee">{e.name}</li>))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
