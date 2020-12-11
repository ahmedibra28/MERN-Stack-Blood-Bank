import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listBloodRequest,
  createBloodRequest,
  updateBloodRequest,
  deleteBloodRequest,
} from '../actions/bloodRequestActions'
import Pagination from '../components/Pagination'

const initialValues = {
  patient_id: '',
  patient_name: '',
  blood_group: '',
  platelet: '',
  plasma: '',
  rbc: '',
  wb: '',
}

const BloodRequestScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1

  const [values, setValues] = useState(initialValues)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()
  const bloodRequestList = useSelector((state) => state.bloodRequestList)
  const {
    bloodRequests,
    error,
    loading,
    pages,
    page,
    lastPage,
  } = bloodRequestList

  const bloodRequestCreate = useSelector((state) => state.bloodRequestCreate)
  const {
    error: errorCreate,
    loading: loadingCreate,
    success: successCreate,
  } = bloodRequestCreate

  const bloodRequestUpdate = useSelector((state) => state.bloodRequestUpdate)
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = bloodRequestUpdate

  const bloodRequestDelete = useSelector((state) => state.bloodRequestDelete)
  const {
    error: errorDelete,
    loading: loadingDelete,
    success: successDelete,
  } = bloodRequestDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const formCleanHandler = () => {
    setValues({
      ...values,
      patient_id: '',
      patient_name: '',
      blood_group: '',
      platelet: '',
      plasma: '',
      rbc: '',
      wb: '',
    })
  }

  useEffect(() => {
    dispatch(listBloodRequest(pageNumber))
    if (successCreate || successUpdate) {
      formCleanHandler()
    }
    // eslint-disable-next-line
  }, [dispatch, pageNumber, successCreate, successUpdate, successDelete])

  const deleteHandler = (id) => {
    if (window.confirm('Are you use?')) {
      dispatch(deleteBloodRequest(id))
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    edit
      ? dispatch(updateBloodRequest(values))
      : dispatch(createBloodRequest(values))
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const editHandler = (e) => {
    setValues({
      ...values,
      _id: e._id,
      patient_id: e.patient_id,
      patient_name: e.patient_name,
      blood_group: e.blood_group,
      platelet: e.blood_component.platelet,
      plasma: e.blood_component.plasma,
      rbc: e.blood_component.rbc,
      wb: e.blood_component.wb,
    })
    setEdit(true)
  }

  return (
    <>
      <div
        className='modal fade'
        id='editBloodRequestModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='editBloodRequestModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h5 className='modal-title' id='editBloodRequestModalLabel'>
                {edit ? 'Edit Blood Request' : 'Add Blood Request'}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={((e) => setEdit(false), formCleanHandler)}
              ></button>
            </div>
            <div className='modal-body'>
              {successCreate && (
                <Message variant='success'>
                  Blood Registered Successfully
                </Message>
              )}
              {loadingCreate ? (
                <Loader />
              ) : (
                errorCreate && <Message variant='danger'>{errorCreate}</Message>
              )}
              {successDelete && (
                <Message variant='success'>Blood Deleted Successfully</Message>
              )}
              {loadingDelete ? (
                <Loader />
              ) : (
                errorDelete && <Message variant='danger'>{errorDelete}</Message>
              )}
              {successUpdate && (
                <Message variant='success'>Blood Updated Successfully</Message>
              )}
              {loadingUpdate ? (
                <Loader />
              ) : (
                errorUpdate && <Message variant='danger'>{errorUpdate}</Message>
              )}
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : (
                <form onSubmit={submitHandler}>
                  <div className='row gy-2'>
                    <hr className='mt-0' />
                    <label htmlFor='patient_id'>Patient ID</label>
                    <div className='form-group'>
                      <input
                        name='patient_id'
                        onChange={handleChange}
                        type='text'
                        value={values.patient_id}
                        className='form-control '
                        placeholder='Enter patient ID'
                      />
                    </div>
                    <label htmlFor='patient_name'>Patient Name</label>
                    <div className='form-group'>
                      <input
                        name='patient_name'
                        onChange={handleChange}
                        type='text'
                        value={values.patient_name}
                        className='form-control '
                        placeholder='Enter patient name'
                      />
                    </div>
                    <label htmlFor='blood_group'>Blood Group</label>
                    <div className='form-group'>
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
                    <label htmlFor='plasma'>Plasma</label>
                    <div className='form-group'>
                      <input
                        name='plasma'
                        onChange={handleChange}
                        type='text'
                        value={values.plasma}
                        className='form-control '
                        placeholder='Enter plasma'
                      />
                    </div>
                    <label htmlFor='platelet'>Platelet</label>
                    <div className='form-group'>
                      <input
                        name='platelet'
                        onChange={handleChange}
                        type='text'
                        value={values.platelet}
                        className='form-control '
                        placeholder='Enter platelet'
                      />
                    </div>
                    <label htmlFor='rbc'>RBC</label>
                    <div className='form-group'>
                      <input
                        name='rbc'
                        onChange={handleChange}
                        type='text'
                        value={values.rbc}
                        className='form-control '
                        placeholder='Enter rbc'
                      />
                    </div>
                    <label htmlFor='wb'>Whole Blood</label>
                    <div className='form-group'>
                      <input
                        name='wb'
                        onChange={handleChange}
                        type='text'
                        value={values.wb}
                        className='form-control '
                        placeholder='Enter whole blood'
                      />
                    </div>

                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                        onClick={((e) => setEdit(false), formCleanHandler)}
                      >
                        Close
                      </button>
                      <button type='submit' className='btn btn-primary'>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <h1>Blood Request</h1>
        <button
          className='btn btn-light btn-sm'
          data-bs-toggle='modal'
          data-bs-target='#editBloodRequestModal'
        >
          {' '}
          <i className='fas fa-plus'></i> REGISTER NEW REQUEST
        </button>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <Pagination
          pages={pages}
          page={page}
          lastPage={lastPage}
          url={`/blood-request`}
        />
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='table-responsive'>
            <table className='table table-sm hover bordered striped'>
              <thead>
                <tr>
                  <th>DATE & TIME</th>
                  <th>P. ID</th>
                  <th>P. Name</th>
                  <th>B. Group</th>
                  <th>Plasma</th>
                  <th>Platelet</th>
                  <th>RBC</th>
                  <th>W. B</th>
                  <th>REGISTERER</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bloodRequests &&
                  bloodRequests.map((blood) => (
                    <tr key={blood._id}>
                      <td>
                        <Moment format='YYYY-MM-DD HH:mm:ss'>
                          {moment(blood.createdAt)}
                        </Moment>
                      </td>

                      <td>{blood.patient_id}</td>
                      <td>{blood.patient_name}</td>
                      <td>{blood.blood_group}</td>
                      <td>{blood.blood_component.plasma}</td>
                      <td>{blood.blood_component.platelet}</td>
                      <td>{blood.blood_component.rbc}</td>
                      <td>{blood.blood_component.wb}</td>

                      <td>{blood.user && blood.user.name}</td>

                      <td>
                        <button
                          className='btn btn-light btn-sm'
                          onClick={(e) => editHandler(blood)}
                          data-bs-toggle='modal'
                          data-bs-target='#editBloodRequestModal'
                        >
                          <i className='fas fa-edit'></i>
                        </button>
                        <Link
                          to={`/blood-issue/${blood._id}`}
                          className='btn btn-primary btn-sm'
                        >
                          <i className='fas fa-share'></i>
                        </Link>
                        {userInfo && userInfo.isAdmin && (
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={() => deleteHandler(blood._id)}
                          >
                            <i className='fas fa-trash'></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {bloodRequests && !loading && bloodRequests.length === 0 && (
              <span className='text-danger d-flex justify-content-center'>
                No data found!
              </span>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default BloodRequestScreen
