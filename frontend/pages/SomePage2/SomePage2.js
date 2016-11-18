import { connect }  from  'react-redux' ;
import React from 'react' ;
import DispatchPage from '../DispatchPage' ;

class SomePage2 extends DispatchPage {
  constructor (props) {
    super(props);

    this.setDataObject = this.setDataObject.bind(this);
  }

  setDataObject () {
    let convertedData = this.props.pageStore.map((item) => {
      let result = parseFloat(item.value);

      return {
        x: item.value,
        y: isNaN(result) ? 0 : result
      };
    });

    return {
      label:  '',
      values: convertedData
    };
  }

  render () {
    const D3ReactComponentLineChart = require('react-d3-components').LineChart;
    const D3ReactComponentScatterPlot = require('react-d3-components').ScatterPlot;

    /**
     * data MUST BE ARRAY
     * BarChart
     *
     * data MUST BE OBJECT
     * ScatterPlot
     * LineChart
     * */
    let d3Props = {
      data:   this.setDataObject(),
      width:  500,
      height: 200,
      margin: {top: 10, bottom: 50, left: 50, right: 10},
      sort:   null
    };

    return (
      <div>
        <h3>This is SomePage2 page</h3>
        <D3ReactComponentLineChart { ...d3Props } d3Type='ScatterPlot' />
        <D3ReactComponentScatterPlot { ...d3Props } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageStore: state.TaskReducer
  };
};

export default connect(
  mapStateToProps,
  {}
)(SomePage2);
