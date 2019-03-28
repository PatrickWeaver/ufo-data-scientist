const React = require('react');

const settings = require('../helpers/settings')
const dataStructures = require('../helpers/dataStructures')

const SelectDataProperty = require('./SelectDataProperty')
const NumberDataSetControls = require('./NumberDataSetControls')
const DateTimeDataSetControls = require('./DateTimeDataSetControls')

function DatasetControls(props) {

  const dataType = dataStructures[props.dataPropertyIndex].type
  const dataName = dataStructures[props.dataPropertyIndex].name

  const controlStyle = {
    border: '1px dashed purple',
    padding: '10px',
    margin: '10px'
  }

  var numberControls
  if (dataType === 'number') {
    numberControls = (
      <NumberDataSetControls
        label={dataName}
        key={dataName}
        rangeMin={props.ranges[props.dataPropertyIndex].min}
        rangeMax={props.ranges[props.dataPropertyIndex].max}
        min={props.min}
        max={props.max}
        onRangeMaxChanged={props.onRangeMaxChanged}
        onRangeMinChanged={props.onRangeMinChanged}
        dataLength={props.dataLength}
        numberZoom={props.numberZoom}
        maxNumberZoom={settings.maxNumberZoom}
        onNumberZoomChanged={props.onNumberZoomChanged}
      />
    )
  }
  
  var dateTimeControls
  if (dataType === 'datetime') {
    dateTimeControls = (
      <DateTimeDataSetControls
        label={dataName}
        key={dataName}
        datePart={props.datePart}
        onDatePartChanged={props.onDatePartChanged}
      />
    )
  }

  return (
    <div className="dataset-control" style={controlStyle} >
      <h2>Dataset Controls:</h2>    

      <SelectDataProperty
        dataPropertyIndex={props.dataPropertyIndex}
        onDataPropertyChanged={props.onDataPropertyChanged}
      />

      {numberControls}

      {dateTimeControls}
      

    </div>
  );
}


module.exports = DatasetControls;