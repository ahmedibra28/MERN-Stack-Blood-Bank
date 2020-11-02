import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '256px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
};
