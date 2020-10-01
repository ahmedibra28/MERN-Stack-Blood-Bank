import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const BloodStoreList = ({
  handleUpdate,
  bloodStores,
  deleteBloodStore,
  user,
}) => {
  return (
    <div>
      <h3 className="text-center form-title mb-4">Blood Store List</h3>
      <hr />
      <div className="table-responsive">
        <table className="table table-sm table-hover table-bordered caption-top">
          <caption>Current Database</caption>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>B. Group</th>
              <th>B. Component</th>
              <th>Unit</th>
              <th>Bag</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bloodStores &&
              bloodStores.map((store) => {
                if (store.status === "Stock") {
                  return (
                    <tr
                      key={store._id}
                      id={store._id % 2 === 0 ? "orange" : "green"}
                    >
                      <td>
                        <Moment format="YYYY-MM-DD HH:mm:ss">
                          {moment(store.date)}
                        </Moment>
                      </td>
                      <td>{store.blood_group}</td>
                      <td>{store.blood_component}</td>
                      <td>{store.unit}</td>
                      <td>{store.bag}</td>

                      <td>
                        <button
                          onClick={() => handleUpdate(store)}
                          className="btn btn-outline-info btn-sm"
                        >
                          <EditIcon fontSize="small" />
                        </button>{" "}
                        {user && user.role === "Admin" && (
                          <button
                            onClick={() => deleteBloodStore(store._id)}
                            className="btn btn-outline-danger btn-sm"
                          >
                            <DeleteForeverIcon fontSize="small" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodStoreList;
