import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const BloodIssueList = ({
  handleUpdate,
  bloodIssues,
  deleteBloodIssue,
  user,
}) => {
  return (
    <div>
      <h3 className='text-center form-title mb-4'>Blood Issue List</h3>
      <hr />
      <div className='table-responsive'>
        <table className='table table-sm table-hover table-bordered caption-top'>
          <caption>
            {bloodIssues && bloodIssues.length} records were found
          </caption>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>P. ID</th>
              <th>P. Name</th>
              <th>Plasma</th>
              <th>Platelet</th>
              <th>rbc</th>
              <th>wb</th>
              <th>Action</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {bloodIssues &&
              bloodIssues.map((issue) => {
                return (
                  <tr
                    key={issue._id}
                    id={issue._id % 2 === 0 ? 'orange' : 'green'}
                  >
                    <td>
                      <Moment format='YYYY-MM-DD HH:mm:ss'>
                        {moment(issue.date)}
                      </Moment>
                    </td>
                    <td>{issue.patient.patient_id}</td>
                    <td>{issue.patient.patient_name}</td>
                    <td>{issue.blood_component.plasma}</td>
                    <td>{issue.blood_component.platelet}</td>
                    <td>{issue.blood_component.rbc}</td>
                    <td>{issue.blood_component.wb}</td>

                    {user && user.role === 'Admin' && (
                      <td>
                        {/* <button
                        onClick={() => handleUpdate(issue)}
                        className='btn btn-outline-info btn-sm'
                      >
                        <EditIcon fontSize='small' />
                      </button>{' '} */}
                        <button
                          onClick={() => deleteBloodIssue(issue._id)}
                          className='btn btn-outline-danger btn-sm'
                        >
                          <DeleteForeverIcon fontSize='small' />
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodIssueList;
