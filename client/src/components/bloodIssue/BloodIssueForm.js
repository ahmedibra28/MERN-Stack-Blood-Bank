import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function BloodIssueForm({
  handleChange,
  handleSubmit,
  values,
  bloodRequests,
  blood_request_id,
  bloodStores,
}) {
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className='row gy-2'>
        <h3 className='text-center form-title mb-4'>Add Blood Issue</h3>
        <hr className='mt-0' />

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <AccountCircleIcon fontSize='small' />
          </span>
          <select
            name='patient'
            onChange={handleChange}
            value={values.patient}
            className='form-control '
            required
          >
            <option value='' disabled>
              Patient...
            </option>
            {bloodRequests &&
              bloodRequests.map(
                (request) =>
                  request._id === blood_request_id && (
                    <option key={request._id} value={blood_request_id}>
                      {request.patient_id}
                    </option>
                  )
              )}
          </select>
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <AccountCircleIcon fontSize='small' />
          </span>
          {bloodRequests &&
            bloodRequests.map(
              (request) =>
                request._id === blood_request_id && (
                  <input
                    key={request._id}
                    type='text'
                    name='patient'
                    onChange={handleChange}
                    value={request.patient_name}
                    className='form-control '
                    disabled
                  />
                )
            )}
        </div>

        {/* All Plasma */}
        {bloodRequests.map((request) => {
          if (
            request._id === blood_request_id &&
            request.blood_component.plasma > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  <AccountCircleIcon fontSize='small' />
                </span>
                <select
                  name='plasma'
                  onChange={handleChange}
                  value={values.plasma}
                  className='form-control '
                >
                  <option value='' disabled>
                    Plasma...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (
                        store.blood_component === 'Plasma' &&
                        store.status === 'Stock'
                      ) {
                        return (
                          <option key={store._id} value={store.bag}>
                            {store.bag}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
            );
          }
        })}

        {/* Platelet */}
        {bloodRequests.map((request) => {
          if (
            request._id === blood_request_id &&
            request.blood_component.platelet > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  <AccountCircleIcon fontSize='small' />
                </span>
                <select
                  name='platelet'
                  onChange={handleChange}
                  value={values.platelet}
                  className='form-control '
                >
                  <option value='' disabled>
                    Platelet...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (
                        store.blood_component === 'Platelet' &&
                        store.status === 'Stock'
                      ) {
                        return (
                          <option key={store._id} value={store.bag}>
                            {store.bag}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
            );
          }
        })}

        {/* RBC */}
        {bloodRequests.map((request) => {
          if (
            request._id === blood_request_id &&
            request.blood_component.rbc > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  <AccountCircleIcon fontSize='small' />
                </span>
                <select
                  name='rbc'
                  onChange={handleChange}
                  value={values.rbc}
                  className='form-control '
                >
                  <option value='' disabled>
                    RBC...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (
                        store.blood_component === 'RBC' &&
                        store.status === 'Stock'
                      ) {
                        return (
                          <option key={store._id} value={store.bag}>
                            {store.bag}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
            );
          }
        })}

        {/* Whole Blood */}
        {bloodRequests.map((request) => {
          if (
            request._id === blood_request_id &&
            request.blood_component.wb > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  <AccountCircleIcon fontSize='small' />
                </span>
                <select
                  name='wb'
                  onChange={handleChange}
                  value={values.wb}
                  className='form-control '
                >
                  <option value='' disabled>
                    Whole Blood...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (
                        store.blood_component === 'Whole Blood' &&
                        store.status === 'Stock'
                      ) {
                        return (
                          <option key={store._id} value={store.bag}>
                            {store.bag}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
            );
          }
        })}

        <div className='input-group mx-auto d-block text-right mt-2'>
          <button
            type='submit'
            className='btn-submit btn btn-primary shadow p-2 px-4'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default BloodIssueForm;
