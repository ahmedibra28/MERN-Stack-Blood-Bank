import React, { Fragment } from 'react';

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
        <table className='table table-sm table-hover caption-top'>
          <caption>
            {bloodRequests && bloodRequests.length} records were found
          </caption>
          <thead>
            <tr>
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
                        <svg
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='pencil-alt w-6 h-6'
                        >
                          <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                          <path
                            fillRule='evenodd'
                            d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteBloodRequest(request._id)}
                        className='btn btn-outline-info btn-sm'
                      >
                        Delete
                      </button>
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
