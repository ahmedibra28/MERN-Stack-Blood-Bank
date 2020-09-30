import React, { useState, useEffect } from 'react';
import BloodIssueForm from './BloodIssueForm';
import BloodIssueList from './BloodIssueList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getBloodIssues,
  addBloodIssue,
  deleteBloodIssue,
  updateBloodIssue,
} from '../../actions/bloodIssue';
import { getBloodRequests } from '../../actions/bloodRequest';
import { getBloodStores } from '../../actions/bloodStore';
import Spinner from '../layout/Spinner';

const initialValues = {
  patient: '',
  plasma: '',
  platelet: '',
  rbc: '',
  wb: '',
};

function BloodIssue({
  bloodIssues: { loading, bloodIssues },
  deleteBloodIssue,
  getBloodIssues,
  addBloodIssue,
  updateBloodIssue,
  getBloodRequests,
  bloodRequests,
  getBloodStores,
  bloodStores,
  match,
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
      patient: e.patient,
      plasma: e.plasma,
      platelet: e.platelet,
      rbc: e.rbc,
      wb: e.wb,
    });
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? updateBloodIssue(values) : addBloodIssue(values);
    console.log(values);

    // Plasma
    if (values.plasma !== '') {
      bloodRequests.map((request) => {
        if (
          request.blood_component[0].plasma > 0 &&
          request._id === blood_request_id
        ) {
          console.log('Found plasma');
        }
      });
    }

    // Platelet
    if (values.platelet !== '') {
      bloodRequests.map((request) => {
        if (
          request.blood_component[0].platelet > 0 &&
          request._id === blood_request_id
        ) {
          console.log('Found platelet');
        }
      });
    }

    // RBC
    if (values.rbc !== '') {
      bloodRequests.map((request) => {
        if (
          request.blood_component[0].rbc > 0 &&
          request._id === blood_request_id
        ) {
          console.log('Found rbc');
        }
      });
    }

    // Whole Blood
    if (values.wb !== '') {
      bloodRequests.map((request) => {
        if (
          request.blood_component[0].wb > 0 &&
          request._id === blood_request_id
        ) {
          console.log('Found wb');
        }
      });
    }
  };

  useEffect(() => {
    getBloodIssues();
    getBloodRequests();
    getBloodStores();
  }, []);

  const blood_request_id = match.params.id;

  return loading ? (
    <Spinner />
  ) : (
    <div className='row pt-4'>
      <div className='col-md-4'>
        <BloodIssueForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          bloodRequests={bloodRequests}
          blood_request_id={blood_request_id}
          bloodStores={bloodStores}
        />
      </div>
      <div className='col-md-8'>
        <BloodIssueList
          handleUpdate={handleUpdate}
          deleteBloodIssue={deleteBloodIssue}
          bloodIssues={bloodIssues}
        />
      </div>
    </div>
  );
}

BloodIssue.propTypes = {
  getBloodIssues: PropTypes.func.isRequired,
  addBloodIssue: PropTypes.func.isRequired,
  deleteBloodIssue: PropTypes.func.isRequired,
  updateBloodIssue: PropTypes.func.isRequired,
  bloodIssues: PropTypes.object.isRequired,
  getBloodRequests: PropTypes.func.isRequired,
  bloodRequests: PropTypes.array.isRequired,
  bloodStores: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  bloodIssues: state.bloodIssue,
  bloodRequests: state.bloodRequest.bloodRequests,
  bloodStores: state.bloodStore.bloodStores,
});

export default connect(mapStateToProps, {
  getBloodIssues,
  addBloodIssue,
  updateBloodIssue,
  deleteBloodIssue,
  getBloodRequests,
  getBloodStores,
})(BloodIssue);
