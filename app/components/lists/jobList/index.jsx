const React = require('react');


//component for rendering list of jobs
export class JobList extends React.Component{

  render(){
    const {job} = this.props;
    // Title Company  Location Sponsored
    return(
      <tr>
        <td >
          {job.jobtitle}
        </td>
        <td >
          {job.company}
        </td>
        <td >
          {job.formattedLocation}
        </td>
        <td >
          {job.sonsored}
        </td>
      </tr>
    );
  }
}


export default JobList;
