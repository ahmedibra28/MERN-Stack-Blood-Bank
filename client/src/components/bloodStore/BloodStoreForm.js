import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DialpadIcon from '@material-ui/icons/Dialpad';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

function BloodStoreForm({ handleChange, handleSubmit, values }) {
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className='row gy-2'>
        <h3 className='text-center form-title mb-4'>Add Blood Store</h3>
        <hr className='mt-0' />

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <AccountCircleIcon fontSize='small' />
          </span>
          <input
            name='donor'
            onChange={handleChange}
            type='text'
            value={values.donor}
            className='form-control '
            placeholder='Enter donor name'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <DialpadIcon fontSize='small' />
          </span>
          <input
            name='hb'
            onChange={handleChange}
            type='text'
            value={values.hb}
            className='form-control '
            placeholder='Enter hb'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <BatteryFullIcon fontSize='small' />
          </span>
          <select
            name='blood_group'
            onChange={handleChange}
            value={values.blood_group}
            className='form-control '
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
            <BatteryFullIcon fontSize='small' />
          </span>
          <select
            name='blood_component'
            onChange={handleChange}
            value={values.blood_component}
            className='form-control '
          >
            <option value='' disabled>
              Blood Component...
            </option>
            <option value='Plasma'>Plasma</option>
            <option value='Platelet'>Platelet</option>
            <option value='RBC'>RBC</option>
            <option value='Whole Blood'>Whole Blood</option>
          </select>
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <DialpadIcon fontSize='small' />
          </span>
          <input
            name='unit'
            onChange={handleChange}
            type='text'
            value={values.unit}
            className='form-control '
            placeholder='Enter unit per vol'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <DialpadIcon fontSize='small' />
          </span>
          <input
            name='bag'
            onChange={handleChange}
            type='text'
            value={values.bag}
            className='form-control '
            placeholder='Enter bag number'
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

export default BloodStoreForm;
