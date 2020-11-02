import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBloodStores } from '../../actions/bloodStore';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  bloodStores: { loading, bloodStores },
  getBloodStores,
}) => {
  useEffect(() => {
    getBloodStores();
  }, []);

  const filteredBloodStore = (e) =>
    bloodStores.filter(
      ({ status, blood_component, blood_group }) =>
        status === e.status &&
        blood_component === e.blood_component &&
        blood_group === e.blood_group
    );

  return loading ? (
    <Spinner />
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
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'A+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'B+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'AB+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'O+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>A - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'A-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'B-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'AB-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Plasma',
                        blood_group: 'O-',
                      }).length
                    }
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
            <div className='card-body text-left'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <strong>A + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'A+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'B+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'AB+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'O+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>A - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'A-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'B-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'AB-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Platelet',
                        blood_group: 'O-',
                      }).length
                    }
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
            <div className='card-body text-left'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <strong>A + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'A+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'B+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'AB+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'O+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>A - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'A-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'B-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'AB-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'RBC',
                        blood_group: 'O-',
                      }).length
                    }
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
            <div className='card-body text-left'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <strong>A + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'A+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'B+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'AB+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O + </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'O+',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>A - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'A-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>B - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'B-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>AB - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'AB-',
                      }).length
                    }
                  </strong>
                </li>
                <li className='list-group-item'>
                  <strong>O - </strong>{' '}
                  <strong>
                    {
                      filteredBloodStore({
                        status: 'Stock',
                        blood_component: 'Whole Blood',
                        blood_group: 'O-',
                      }).length
                    }
                  </strong>
                </li>
              </ul>
            </div>
            <div className='card-footer text-muted'>Today</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getBloodStores: PropTypes.func.isRequired,
  bloodStores: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bloodStores: state.bloodStore,
});

export default connect(mapStateToProps, {
  getBloodStores,
})(Dashboard);
