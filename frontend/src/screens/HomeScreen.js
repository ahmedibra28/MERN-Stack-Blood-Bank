import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBloodStore } from '../actions/bloodStoreActions'

import Message from '../components/Message'
import Loader from '../components/Loader'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const bloodStoreList = useSelector((state) => state.bloodStoreList)
  const { bloodStores, error, loading } = bloodStoreList

  useEffect(() => {
    dispatch(listBloodStore())
  }, [dispatch])

  const filteredBloodStore = (e) =>
    bloodStores &&
    bloodStores.filter(
      ({ active, blood_component, blood_group }) =>
        active === e.active &&
        blood_component === e.blood_component &&
        blood_group === e.blood_group
    )

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className=''>
          <div className='row mt-3'>
            <h3 className='text-center summary'>CURRENT SUMMARY BLOOD STORE</h3>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header'>Plasma</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Plasma',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-muted'>Today</div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header'>Platelet</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Platelet',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-muted'>Today</div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header'>RBC</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'RBC',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-muted'>Today</div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='card text-center'>
                <div className='card-header'>Whole Blood</div>
                <div className='card-body '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>A + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'A+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'B+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'AB+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O + </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'O+',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>A - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'A-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>B - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'B-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>AB - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'AB-',
                          }).length}
                      </strong>
                    </li>
                    <li className='list-group-item'>
                      <strong>O - </strong>{' '}
                      <i className='fas fa-arrow-right'></i>{' '}
                      <strong>
                        {bloodStores &&
                          filteredBloodStore({
                            active: true,
                            blood_component: 'Whole Blood',
                            blood_group: 'O-',
                          }).length}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className='card-footer text-muted'>Today</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {}
    </>
  )
}

export default HomeScreen
