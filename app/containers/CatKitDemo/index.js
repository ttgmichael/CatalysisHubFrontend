/*
 *
 * CatKitDemo
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { BulkInput } from './BulkInput';
import { BulkView } from './BulkView';
import { SlabInput } from './SlabInput';
import { SlabView } from './SlabView';

export class CatKitDemo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BulkInput />
        <BulkView />
        <SlabInput />
        <SlabView />
      </div>
    );
  }
}

CatKitDemo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CatKitDemo);