import React from 'react';

function BloodRequestForm({ handleChange, handleSubmit, values }) {
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className='row gy-2'>
        <h3 className='text-center form-title mb-4'>Add Request</h3>
        <hr className='mt-0' />

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='identification w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='patient_id'
            onChange={handleChange}
            type='text'
            value={values.patient_id}
            className='form-control py-2'
            placeholder='Enter patient ID'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='identification w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='patient_name'
            onChange={handleChange}
            type='text'
            value={values.patient_name}
            className='form-control py-2'
            placeholder='Enter patient name'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='office-building w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <select
            name='blood_group'
            onChange={handleChange}
            value={values.blood_group}
            className='form-control py-2'
          >
            <option value='' disabled>
              Blood Group...
            </option>
            <option value='A+'>A+</option>
            <option value='A-'>A-</option>
            <option value='B+'>B+</option>
            <option value='B-'>B-</option>
            <option value='AB+'>AB+</option>
            <option value='AB-'>AB-</option>
            <option value='O+'>O+</option>
            <option value='O-'>O-</option>
          </select>
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='hashtag w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='plasma'
            onChange={handleChange}
            type='text'
            value={values.plasma}
            className='form-control py-2'
            placeholder='Enter plasma'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='hashtag w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='platelet'
            onChange={handleChange}
            type='text'
            value={values.platelet}
            className='form-control py-2'
            placeholder='Enter platelet'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='hashtag w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='rbc'
            onChange={handleChange}
            type='text'
            value={values.rbc}
            className='form-control py-2'
            placeholder='Enter rbc'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='hashtag w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='wb'
            onChange={handleChange}
            type='text'
            value={values.wb}
            className='form-control py-2'
            placeholder='Enter whole blood'
          />
        </div>

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

export default BloodRequestForm;
