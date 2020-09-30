import React, { Fragment } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const BloodRequestList = ({
  handleUpdate,
  bloodRequests,
  deleteBloodRequest,
}) => {
  return (
    <div>
      <h3 className='text-center form-title mb-4'>Blood Request List</h3>
      <hr />
      <div className='table-responsive'>
        <table className='table table-sm table-hover table-bordered caption-top'>
          <caption>
            {bloodRequests && bloodRequests.length} records were found
          </caption>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>P. ID</th>
              <th>B. Name</th>
              <th>B. Group</th>
              <th>Plasma</th>
              <th>Platelet</th>
              <th>RBC</th>
              <th>Whole Blood</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bloodRequests &&
              bloodRequests.map((request) => {
                return (
                  <tr
                    key={request._id}
                    id={request._id % 2 === 0 ? 'orange' : 'green'}
                  >
                    <td>
                      <Moment format='YYYY-MM-DD HH:mm:ss'>
                        {moment(request.date)}
                      </Moment>
                    </td>
                    <td>{request.patient_id}</td>
                    <td>{request.patient_name}</td>
                    <td>{request.blood_group}</td>
                    {request.blood_component.map((comp) => (
                      <Fragment key={comp._id}>
                        <td>{comp.plasma}</td>
                        <td>{comp.platelet}</td>
                        <td>{comp.rbc}</td>
                        <td>{comp.wb}</td>
                      </Fragment>
                    ))}
                    <td>
                      <button
                        onClick={() => handleUpdate(request)}
                        className='btn btn-outline-info btn-sm'
                      >
                        <EditIcon fontSize='small' />
                      </button>{' '}
                      <button
                        onClick={() => deleteBloodRequest(request._id)}
                        className='btn btn-outline-danger btn-sm'
                      >
                        <DeleteForeverIcon fontSize='small' />
                      </button>{' '}
                      <Link
                        to={`/blood-issue/${request._id}`}
                        // onClick={() => deleteBloodRequest(request._id)}
                        className='btn btn-outline-danger btn-sm'
                      >
                        S
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodRequestList;
