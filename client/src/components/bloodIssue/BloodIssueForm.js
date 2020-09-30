import React from 'react';

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
            @
          </span>
          <select
            name='patient'
            onChange={handleChange}
            value={values.patient}
            className='form-control py-2'
            required
          >
            <option value='' disabled>
              Patient...
            </option>
            {bloodRequests &&
              bloodRequests.map((request) => {
                if (request._id === blood_request_id) {
                  return (
                    <option key={request._id} value={blood_request_id}>
                      {request.patient_id}
                    </option>
                  );
                }
              })}
          </select>
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            @
          </span>
          {bloodRequests &&
            bloodRequests.map((request) => {
              if (request._id === blood_request_id) {
                return (
                  <input
                    key={request._id}
                    type='text'
                    name='patient'
                    onChange={handleChange}
                    value={request.patient_name}
                    className='form-control py-2'
                    disabled
                  />
                );
              }
            })}
        </div>

        {/* All Plasma */}
        {bloodRequests.map((request) => {
          if (
            request._id === blood_request_id &&
            request.blood_component[0].plasma > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  @
                </span>
                <select
                  name='plasma'
                  onChange={handleChange}
                  value={values.plasma}
                  className='form-control py-2'
                >
                  <option value='' disabled>
                    Plasma...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (store.blood_component === 'Plasma') {
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
            request.blood_component[0].platelet > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  @
                </span>
                <select
                  name='platelet'
                  onChange={handleChange}
                  value={values.platelet}
                  className='form-control py-2'
                >
                  <option value='' disabled>
                    Platelet...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (store.blood_component === 'Platelet') {
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
            request.blood_component[0].rbc > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  @
                </span>
                <select
                  name='rbc'
                  onChange={handleChange}
                  value={values.rbc}
                  className='form-control py-2'
                >
                  <option value='' disabled>
                    RBC...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (store.blood_component === 'RBC') {
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
            request.blood_component[0].wb > 0
          ) {
            return (
              <div className='input-group' key={request._id}>
                <span className='input-group-text' id='basic-addon1'>
                  @
                </span>
                <select
                  name='wb'
                  onChange={handleChange}
                  value={values.wb}
                  className='form-control py-2'
                >
                  <option value='' disabled>
                    Whole Blood...
                  </option>
                  {bloodStores &&
                    bloodStores.map((store) => {
                      if (store.blood_component === 'Whole Blood') {
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
