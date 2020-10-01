import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const BloodIssueList = ({ handleUpdate, bloodIssues, deleteBloodIssue }) => {
  return (
    <div>
      <h3 className="text-center form-title mb-4">Blood Issue List</h3>
      <hr />
      <div className="table-responsive">
        <table className="table table-sm table-hover table-bordered caption-top">
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
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {bloodIssues &&
              bloodIssues.map((issue) => {
                return (
                  <tr
                    key={issue._id}
                    id={issue._id % 2 === 0 ? "orange" : "green"}
                  >
                    <td>
                      <Moment format="YYYY-MM-DD HH:mm:ss">
                        {moment(issue.date)}
                      </Moment>
                    </td>
                    <td>{issue.patient.patient_id}</td>
                    <td>{issue.patient.patient_name}</td>

                    {issue.blood_component.map((iss) => (
                      <Fragment key={iss._id}>
                        <td>{iss.plasma}</td>
                        <td>{iss.platelet}</td>
                        <td>{iss.rbc}</td>
                        <td>{iss.wb}</td>
                      </Fragment>
                    ))}

                    {/* <td>
                      <button
                        onClick={() => handleUpdate(issue)}
                        className='btn btn-outline-info btn-sm'
                      >
                        <EditIcon fontSize='small' />
                      </button>{' '}
                      <button
                        onClick={() => deleteBloodIssue(issue._id)}
                        className='btn btn-outline-danger btn-sm'
                      >
                        <DeleteForeverIcon fontSize='small' />
                      </button>
                    </td> */}
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
