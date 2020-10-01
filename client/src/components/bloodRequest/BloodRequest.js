import React, { useState, useEffect } from "react";
import BloodRequestForm from "./BloodRequestForm";
import BloodRequestList from "./BloodRequestList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getBloodRequests,
  addBloodRequest,
  deleteBloodRequest,
  updateBloodRequest,
} from "../../actions/bloodRequest";
import Spinner from "../layout/Spinner";

const initialValues = {
  patient_id: "",
  patient_name: "",
  blood_group: "",
  platelet: "",
  plasma: "",
  rbc: "",
  wb: "",
};

function BloodRequest({
  bloodRequests: { loading, bloodRequests },
  deleteBloodRequest,
  getBloodRequests,
  addBloodRequest,
  updateBloodRequest,
  auth: { user },
}) {
  const [values, setValues] = useState(initialValues);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    setValues({
      ...values,
      _id: e._id,
      patient_id: e.patient_id,
      patient_name: e.patient_name,
      blood_group: e.blood_group,
      platelet: e.blood_component[0].platelet,
      plasma: e.blood_component[0].plasma,
      rbc: e.blood_component[0].rbc,
      wb: e.blood_component[0].wb,
    });
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? updateBloodRequest(values) : addBloodRequest(values);
  };

  useEffect(() => {
    getBloodRequests();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="row pt-4">
      <div className="col-md-4">
        <BloodRequestForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
        />
      </div>
      <div className="col-md-8">
        <BloodRequestList
          handleUpdate={handleUpdate}
          deleteBloodRequest={deleteBloodRequest}
          bloodRequests={bloodRequests}
          user={user}
        />
      </div>
    </div>
  );
}

BloodRequest.propTypes = {
  getBloodRequests: PropTypes.func.isRequired,
  addBloodRequest: PropTypes.func.isRequired,
  deleteBloodRequest: PropTypes.func.isRequired,
  updateBloodRequest: PropTypes.func.isRequired,
  bloodRequests: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bloodRequests: state.bloodRequest,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getBloodRequests,
  addBloodRequest,
  updateBloodRequest,
  deleteBloodRequest,
})(BloodRequest);
