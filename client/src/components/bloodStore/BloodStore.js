import React, { useState, useEffect } from 'react';
import BloodStoreForm from './BloodStoreForm';
import BloodStoreList from './BloodStoreList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getBloodStores,
  addBloodStore,
  deleteBloodStore,
  updateBloodStore,
} from '../../actions/bloodStore';
import Spinner from '../layout/Spinner';

const initialValues = {
  donor: '',
  hb: '',
  blood_component: '',
  blood_group: '',
  unit: '',
  status: 'Stock',
  bag: '',
};

function BloodStore({
  bloodStores: { loading, bloodStores },
  deleteBloodStore,
  getBloodStores,
  addBloodStore,
  updateBloodStore,
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
      donor: e.donor,
      hb: e.hb,
      blood_component: e.blood_component,
      blood_group: e.blood_group,
      unit: e.unit,
      bag: e.bag,
    });
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? updateBloodStore(values) : addBloodStore(values);
  };

  useEffect(() => {
    getBloodStores();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className='row pt-4'>
      <div className='col-md-4'>
        <BloodStoreForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
        />
      </div>
      <div className='col-md-8'>
        <BloodStoreList
          handleUpdate={handleUpdate}
          deleteBloodStore={deleteBloodStore}
          bloodStores={bloodStores}
          user={user}
        />
      </div>
    </div>
  );
}

BloodStore.propTypes = {
  getBloodStores: PropTypes.func.isRequired,
  addBloodStore: PropTypes.func.isRequired,
  deleteBloodStore: PropTypes.func.isRequired,
  updateBloodStore: PropTypes.func.isRequired,
  bloodStores: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bloodStores: state.bloodStore,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getBloodStores,
  addBloodStore,
  updateBloodStore,
  deleteBloodStore,
})(BloodStore);
