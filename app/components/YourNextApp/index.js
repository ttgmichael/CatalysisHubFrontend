/**
*
* YourNextApp
*
*/

import React from 'react';
import styled from 'styled-components';

import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';

import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
// import styled from 'styled-components';

const supportAtoms = [
  'Ag', 'Al', 'As', 'Au', 'B', 'Ba', 'Be', 'Bi', 'Ca', 'Cd', 'Co', 'Cr', 'Cs',
  'Cu', 'Fe', 'Ga', 'Ge', 'Hf', 'Hg', 'In', 'Ir', 'K', 'La', 'Li', 'Mg', 'Mn',
  'Mo', 'Na', 'Nb', 'Ni', 'O', 'Os', 'Pb', 'Pd', 'Pt', 'Rb', 'Re', 'Rh', 'Ru',
  'Sb', 'Sc', 'Si', 'Sn', 'Sr', 'Ta', 'Te', 'Ti', 'Tl', 'V', 'W', 'Y', 'Zn',
  'Zr',
];

const supportLength = supportAtoms.length;

const items = [];
for (let i = 0; i < supportLength; i += 1) {
  items.push(<MenuItem value={supportAtoms[i]}>{supportAtoms[i]}</MenuItem>);
}


class YourNextApp extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      m1: '',
      m2: '',
      facet: '',
      ads: '',
      conc: '',
      site: '',
      results: [],
    };
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  render() {
    return (
      <div>
        <h2>AtoML</h2>
        <div>
          {'Mockup of an AtoML app.'}
          <br />

          <FormControl
            style={{ minWidth: 120, margin: 12 }}
          >
            <InputLabel>Metal One</InputLabel>
            <Select
              onChange={this.handleChange('m1')}
              value={this.state.m1}
            >
              {items}
            </Select>
          </FormControl>
          {'   '}
          <FormControl
            style={{ minWidth: 120 }}
          >
            <InputLabel>Metal Two</InputLabel>
            <Select
              onChange={this.handleChange('m2')}
              value={this.state.m2}
            >
              {items}
            </Select>
          </FormControl>
          {'   '}
          <FormControl
            style={{ minWidth: 120 }}
          >
            <InputLabel>Facet</InputLabel>
            <Select
              onChange={this.handleChange('facet')}
              value={this.state.facet}
            >
              <MenuItem value="0001">0001</MenuItem>
              <MenuItem value="0001step">0001step</MenuItem>
              <MenuItem value="100">100</MenuItem>
              <MenuItem value="110">110</MenuItem>
              <MenuItem value="111">111</MenuItem>
              <MenuItem value="211">211</MenuItem>
              <MenuItem value="311">311</MenuItem>
              <MenuItem value="532">532</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl
            style={{ minWidth: 120, margin: 12 }}
          >
            <InputLabel>Adsorbate</InputLabel>
            <Select
              onChange={this.handleChange('ads')}
              value={this.state.ads}
            >
              <MenuItem value="graphene">graphene</MenuItem>
              <MenuItem value="CH2CH2">CH2CH2</MenuItem>
              <MenuItem value="CH3CH2CH3">CH3CH2CH3</MenuItem>
              <MenuItem value="CH3CH3">CH3CH3</MenuItem>
              <MenuItem value="CO">CO</MenuItem>
              <MenuItem value="CO2">CO2</MenuItem>
              <MenuItem value="H2O">H2O</MenuItem>
              <MenuItem value="HCN">HCN</MenuItem>
              <MenuItem value="NH3">NH3</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
              <MenuItem value="O2">O2</MenuItem>
              <MenuItem value="O">O</MenuItem>
            </Select>
          </FormControl>
          {'   '}
          <FormControl
            style={{ minWidth: 120 }}
          >
            <InputLabel>Concentration</InputLabel>
            <Select
              onChange={this.handleChange('conc')}
              value={this.state.conc}
            >
              <MenuItem value="0.25">0.25</MenuItem>
              <MenuItem value="0.50">0.50</MenuItem>
              <MenuItem value="0.75">0.75</MenuItem>
            </Select>
          </FormControl>
          {'   '}
          <FormControl
            style={{ minWidth: 120 }}
          >
            <InputLabel>Site</InputLabel>
            <Select
              onChange={this.handleChange('site')}
              value={this.state.site}
            >
              <MenuItem value="AA">AA</MenuItem>
              <MenuItem value="BA">BA</MenuItem>
              <MenuItem value="BB">BB</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <Button raised style={{ margin: 12 }}>
            Calculate
          </Button>
        </div>
      </div>
    );
  }
}

YourNextApp.propTypes = {

};

export default YourNextApp;
