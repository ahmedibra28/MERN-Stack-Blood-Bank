import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import Moment from 'react-moment'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listBloodIssue,
  deleteBloodIssue,
  createBloodIssue,
} from '../actions/bloodIssueActions'

import { listBloodStore } from '../actions/bloodStoreActions'

import {
  listBloodRequest,
  // updateBloodRequest,
} from '../actions/bloodRequestActions'

const initialValues = {
  patient: '',
  plasma: '',
  platelet: '',
  rbc: '',
  wb: '',
}

const BloodIssueScreen = ({ match }) => {
  const bloodRequestId = match.params.id

  const [values, setValues] = useState(initialValues)
  const [edit, setEdit] = useState(false)
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const bloodIssueList = useSelector((state) => state.bloodIssueList)
  const { bloodIssues, error, loading } = bloodIssueList

  const bloodIssueCreate = useSelector((state) => state.bloodIssueCreate)
  const {
    error: errorCreate,
    loading: loadingCreate,
    success: successCreate,
  } = bloodIssueCreate

  const bloodIssueDelete = useSelector((state) => state.bloodIssueDelete)
  const {
    error: errorDelete,
    loading: loadingDelete,
    success: successDelete,
  } = bloodIssueDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const bloodRequestList = useSelector((state) => state.bloodRequestList)
  const { bloodRequests, loading: loadingBloodRequestList } = bloodRequestList

  const bloodRequestCreate = useSelector((state) => state.bloodRequestCreate)
  const { success: successCreateRequest } = bloodRequestCreate

  const bloodStoreList = useSelector((state) => state.bloodStoreList)
  const { bloodStores, loading: loadingBloodStoreList } = bloodStoreList

  const formCleanHandler = () => {
    setValues({
      ...values,
      patient: '',
      plasma: '',
      platelet: '',
      rbc: '',
      wb: '',
    })
    setEdit(false)
  }

  useEffect(() => {
    dispatch(listBloodRequest())
    dispatch(listBloodIssue())
    dispatch(listBloodStore())
    if (successCreate) {
      formCleanHandler()
    }
    // eslint-disable-next-line
  }, [dispatch, successCreate, successDelete, successCreateRequest])

  const deleteHandler = (id) => {
    if (window.confirm('Are you use?')) {
      dispatch(deleteBloodIssue(id))
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const { plasma, platelet, rbc, wb } = values

    if (!plasma && !platelet && !rbc && !wb) {
      setMessage('You have to select a transfusion BAG')
    } else {
      dispatch(createBloodIssue(values))
    }
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems =
    bloodIssues && bloodIssues.slice(indexOfFirstItem, indexOfLastItem)
  const totalItems = bloodIssues && Math.ceil(bloodIssues.length / itemsPerPage)

  return (
    <>
      <div
        className='modal fade'
        id='editBloodIssueModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='editBloodIssueModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h5 className='modal-title' id='editBloodIssueModalLabel'>
                {edit ? 'Edit Blood Issue' : 'Add Blood Issue'}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={formCleanHandler}
              ></button>
            </div>
            <div className='modal-body'>
              {message && <Message variant='danger'>{message}</Message>}
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

              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : (
                <form onSubmit={submitHandler}>
                  <div className='row gy-2'>
                    <hr className='mt-0' />

                    <label htmlFor='patient'>Patient</label>
                    <div className='form-group'>
                      <select
                        name='patient'
                        onChange={handleChange}
                        value={values.patient}
                        className='form-control '
                        required
                      >
                        <option value=''>Patient...</option>
                        {!loadingBloodRequestList &&
                          bloodRequests &&
                          bloodRequests.map(
                            (blood) =>
                              blood._id === bloodRequestId && (
                                <option key={blood._id} value={blood._id}>
                                  {blood.patient_name}
                                </option>
                              )
                          )}
                      </select>
                    </div>

                    {/* Plasma */}
                    {bloodRequests &&
                      bloodRequests.map(
                        (blood) =>
                          bloodRequestId === blood._id &&
                          blood.blood_component.plasma > 0 && (
                            <div className='form-group' key={blood._id}>
                              <label htmlFor='platelet'>Plasma</label>
                              <select
                                name='plasma'
                                onChange={handleChange}
                                value={values.plasma}
                                className='form-control '
                              >
                                <option value=''>Plasma...</option>
                                {!loadingBloodStoreList &&
                                  bloodStores &&
                                  bloodStores.map(
                                    (blood) =>
                                      blood.blood_component === 'Plasma' &&
                                      blood.active && (
                                        <option
                                          key={blood._id}
                                          value={blood._id}
                                        >
                                          {blood.bag}
                                        </option>
                                      )
                                  )}
                              </select>
                            </div>
                          )
                      )}

                    {/* Platelet */}
                    {bloodRequests &&
                      bloodRequests.map(
                        (blood) =>
                          bloodRequestId === blood._id &&
                          blood.blood_component.platelet > 0 && (
                            <div className='form-group' key={blood._id}>
                              <label htmlFor='platelet'>Platelet</label>
                              <select
                                name='platelet'
                                onChange={handleChange}
                                value={values.platelet}
                                className='form-control '
                              >
                                <option value=''>Platelet...</option>
                                {!loadingBloodStoreList &&
                                  bloodStores &&
                                  bloodStores.map(
                                    (blood) =>
                                      blood.blood_component === 'Platelet' &&
                                      blood.active && (
                                        <option
                                          key={blood._id}
                                          value={blood._id}
                                        >
                                          {blood.bag}
                                        </option>
                                      )
                                  )}
                              </select>
                            </div>
                          )
                      )}

                    {/* RBC */}
                    {bloodRequests &&
                      bloodRequests.map(
                        (blood) =>
                          bloodRequestId === blood._id &&
                          blood.blood_component.rbc > 0 && (
                            <div className='form-group' key={blood._id}>
                              <label htmlFor='rbc'>RBC</label>
                              <select
                                name='rbc'
                                onChange={handleChange}
                                value={values.rbc}
                                className='form-control '
                              >
                                <option value=''>RBC...</option>
                                {!loadingBloodStoreList &&
                                  bloodStores &&
                                  bloodStores.map(
                                    (blood) =>
                                      blood.blood_component === 'RBC' &&
                                      blood.active && (
                                        <option
                                          key={blood._id}
                                          value={blood._id}
                                        >
                                          {blood.bag}
                                        </option>
                                      )
                                  )}
                              </select>
                            </div>
                          )
                      )}

                    {/* Whole Blood */}
                    {bloodRequests &&
                      bloodRequests.map(
                        (blood) =>
                          bloodRequestId === blood._id &&
                          blood.blood_component.wb > 0 && (
                            <div className='form-group' key={blood._id}>
                              <label htmlFor='wb'>Whole Blood</label>
                              <select
                                name='wb'
                                onChange={handleChange}
                                value={values.wb}
                                className='form-control '
                              >
                                <option value=''>Whole Blood...</option>
                                {!loadingBloodStoreList &&
                                  bloodStores &&
                                  bloodStores.map(
                                    (blood) =>
                                      blood.blood_component === 'Whole Blood' &&
                                      blood.active && (
                                        <option
                                          key={blood._id}
                                          value={blood._id}
                                        >
                                          {blood.bag}
                                        </option>
                                      )
                                  )}
                              </select>
                            </div>
                          )
                      )}

                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                        onClick={formCleanHandler}
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
        <h1>Blood Issue</h1>
        <button
          className='btn btn-light btn-sm'
          data-bs-toggle='modal'
          data-bs-target='#editBloodIssueModal'
        >
          {' '}
          <i className='fas fa-plus'></i> REGISTER NEW BLOOD ISSUE
        </button>
      </div>

      {loadingDelete ? (
        <Loader />
      ) : (
        errorDelete && <Message variant='danger'>{errorDelete}</Message>
      )}
      {successDelete && (
        <Message variant='success'>Blood Deleted Successfully</Message>
      )}

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
                  <th>PLASMA</th>
                  <th>PLATELET</th>
                  <th>RBC</th>
                  <th>W.B</th>
                  <th>REGISTERER</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bloodIssues &&
                  currentItems.map((blood) => (
                    <tr key={blood._id}>
                      <td>
                        <Moment format='YYYY-MM-DD HH:mm:ss'>
                          {moment(blood.createdAt)}
                        </Moment>
                      </td>
                      <td>{blood.patient && blood.patient.patient_id}</td>
                      <td>{blood.patient && blood.patient.patient_name}</td>
                      <td>
                        {blood.blood_component &&
                          bloodStores &&
                          bloodStores.map(
                            (b) =>
                              b._id === blood.blood_component.plasma && b.bag
                          )}
                      </td>
                      <td>
                        {blood.blood_component &&
                          bloodStores &&
                          bloodStores.map(
                            (b) =>
                              b._id === blood.blood_component.platelet && b.bag
                          )}
                      </td>
                      <td>
                        {blood.blood_component &&
                          bloodStores &&
                          bloodStores.map(
                            (b) => b._id === blood.blood_component.rbc && b.bag
                          )}
                      </td>

                      <td>
                        {blood.blood_component &&
                          bloodStores &&
                          bloodStores.map(
                            (b) => b._id === blood.blood_component.wb && b.bag
                          )}
                      </td>
                      <td>{blood.user && blood.user.name}</td>

                      <td>
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
            {bloodIssues && !loading && bloodIssues.length === 0 && (
              <span className='text-danger d-flex justify-content-center'>
                No data found!
              </span>
            )}
            {bloodIssues && bloodIssues.length > itemsPerPage && (
              <div className='d-flex justify-content-center'>
                <ReactPaginate
                  previousLabel='previous'
                  previousClassName='page-item'
                  previousLinkClassName='page-link'
                  nextLabel='next'
                  nextClassName='page-item'
                  nextLinkClassName='page-link'
                  pageClassName='page-item'
                  pageLinkClassName='page-link'
                  activeClassName='page-item active'
                  activeLinkClassName={'page-link'}
                  breakLabel={'...'}
                  breakClassName={'page-item'}
                  breakLinkClassName={'page-link'}
                  pageCount={totalItems}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={(e) => setCurrentPage(e.selected + 1)}
                  containerClassName={'page pagination'}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default BloodIssueScreen
