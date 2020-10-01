import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

const BloodRequestList = ({
  handleUpdate,
  bloodRequests,
  deleteBloodRequest,
  user,
}) => {
  return (
    <div>
      <h3 className="text-center form-title mb-4">Blood Request List</h3>
      <hr />
      <div className="table-responsive">
        <table className="table table-sm table-hover table-bordered caption-top">
          <caption>
            {/* {bloodRequests && bloodRequests.length} records were found */}
            Pending Request Order
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
                const plasma = request.blood_component[0].plasma;
                const platelet = request.blood_component[0].platelet;
                const rbc = request.blood_component[0].rbc;
                const wb = request.blood_component[0].wb;

                {
                  if (plasma > 0 || platelet > 0 || rbc > 0 || wb > 0) {
                    return (
                      <tr
                        key={request._id}
                        id={request._id % 2 === 0 ? "orange" : "green"}
                      >
                        <td>
                          <Moment format="YYYY-MM-DD HH:mm:ss">
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
                            className="btn btn-outline-info btn-sm"
                          >
                            <EditIcon fontSize="small" />
                          </button>{" "}
                          {user && user.role === "Admin" && (
                            <button
                              onClick={() => deleteBloodRequest(request._id)}
                              className="btn btn-outline-danger btn-sm"
                            >
                              <DeleteForeverIcon fontSize="small" />
                            </button>
                          )}{" "}
                          <Link
                            to={`/blood-issue/${request._id}`}
                            className="btn btn-outline-info btn-sm"
                          >
                            <SendIcon />
                          </Link>
                        </td>
                      </tr>
                    );
                  }
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodRequestList;
