import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listBloodStore,
  createBloodStore,
  updateBloodStore,
  deleteBloodStore,
} from '../actions/bloodStoreActions'
import Pagination from '../components/Pagination'

const initialValues = {
  donor: '',
  hb: '',
  blood_component: '',
  blood_group: '',
  unit: '',
  status: 'Stock',
  bag: '',
}

const BloodStoreScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1

  const [values, setValues] = useState(initialValues)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()
  const bloodStoreList = useSelector((state) => state.bloodStoreList)
  const { bloodStores, error, loading, pages, page, lastPage } = bloodStoreList

  const bloodStoreCreate = useSelector((state) => state.bloodStoreCreate)
  const {
    error: errorCreate,
    loading: loadingCreate,
    success: successCreate,
  } = bloodStoreCreate

  const bloodStoreUpdate = useSelector((state) => state.bloodStoreUpdate)
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = bloodStoreUpdate

  const bloodStoreDelete = useSelector((state) => state.bloodStoreDelete)
  const {
    error: errorDelete,
    loading: loadingDelete,
    success: successDelete,
  } = bloodStoreDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const formCleanHandler = () => {
    setValues({
      ...values,
      donor: '',
      hb: '',
      blood_component: '',
      blood_group: '',
      unit: '',
      status: 'Stock',
      bag: '',
    })
  }

  useEffect(() => {
    dispatch(listBloodStore(pageNumber))
    if (successCreate || successUpdate) {
      formCleanHandler()
    }
    // eslint-disable-next-line
  }, [dispatch, pageNumber, successCreate, successUpdate, successDelete])

  const deleteHandler = (id) => {
    if (window.confirm('Are you use?')) {
      dispatch(deleteBloodStore(id))
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    edit
      ? dispatch(updateBloodStore(values))
      : dispatch(createBloodStore(values))
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const editHandler = (e) => {
    setValues({
      ...values,
      _id: e._id,
      donor: e.donor,
      hb: e.hb,
      blood_component: e.blood_component,
      blood_group: e.blood_group,
      unit: e.unit,
      bag: e.bag,
    })
    setEdit(true)
  }

  return (
    <>
      <div
        className='modal fade'
        id='editBloodStoreModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='editBloodStoreModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h5 className='modal-title' id='editBloodStoreModalLabel'>
                {edit ? 'Edit Blood Store' : 'Add Blood Store'}
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

                    <div className='form-group'>
                      <label htmlFor='donor'>Donor</label>
                      <input
                        required
                        name='donor'
                        onChange={handleChange}
                        type='text'
                        value={values.donor}
                        className='form-control '
                        placeholder='Enter donor name'
                      />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='hb'>HB</label>
                      <input
                        required
                        name='hb'
                        onChange={handleChange}
                        type='text'
                        value={values.hb}
                        className='form-control '
                        placeholder='Enter hb'
                      />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='blood_group'>Blood Group</label>
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

                    <div className='form-group'>
                      <label htmlFor='blood_component'>Blood Component</label>
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

                    <div className='form-group'>
                      <label htmlFor='unit'>Unit</label>
                      <input
                        required
                        name='unit'
                        onChange={handleChange}
                        type='text'
                        value={values.unit}
                        className='form-control '
                        placeholder='Enter unit per vol'
                      />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='bag'>Bag</label>
                      <input
                        required
                        name='bag'
                        onChange={handleChange}
                        type='text'
                        value={values.bag}
                        className='form-control '
                        placeholder='Enter bag number'
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
        <h1>Blood Store</h1>
        <button
          className='btn btn-light btn-sm'
          data-bs-toggle='modal'
          data-bs-target='#editBloodStoreModal'
        >
          {' '}
          <i className='fas fa-plus'></i> REGISTER NEW BLOOD
        </button>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <Pagination
          pages={pages}
          page={page}
          lastPage={lastPage}
          url={`/blood-store`}
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
                  <th>B. GROUP</th>
                  <th>B. COMPONENT</th>
                  <th>UNIT</th>
                  <th>BAG</th>
                  <th>REGISTERER</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bloodStores &&
                  bloodStores.map(
                    (blood) =>
                      blood.status === 'Stock' && (
                        <tr key={blood._id}>
                          <td>
                            <Moment format='YYYY-MM-DD HH:mm:ss'>
                              {moment(blood.createdAt)}
                            </Moment>
                          </td>
                          <td>{blood.blood_group}</td>
                          <td>{blood.blood_component}</td>
                          <td>{blood.unit}</td>
                          <td>{blood.bag}</td>
                          <td>{blood.user && blood.user.name}</td>

                          <td>
                            <button
                              className='btn btn-light btn-sm'
                              onClick={(e) => editHandler(blood)}
                              data-bs-toggle='modal'
                              data-bs-target='#editBloodStoreModal'
                            >
                              <i className='fas fa-edit'></i>
                            </button>
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
                      )
                  )}
              </tbody>
            </table>
            {bloodStores && !loading && bloodStores.length === 0 && (
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

export default BloodStoreScreen
