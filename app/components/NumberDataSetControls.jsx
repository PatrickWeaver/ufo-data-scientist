const React = require('react');

function NumberDataSetControls(props) {

  const controlStyle = {
    border: '1px solid green',
    padding: '10px',
    margin: '10px'
  }

  return (
    <div className="control" style={controlStyle} >
      <h2>Number Data Set: { props.label }</h2>
      <p>Number Zoom: {props.numberZoom}</p>
      <label>Number Zoom:</label>
      <div id="number-zoom-slider">
        <input
          type="range"
          min="2"
          max={props.data.length > props.maxNumberZoom ? props.maxNumberZoom : props.data.length}
          value={props.numberZoom}
          onChange={props.onNumberZoomChanged}
          className="slider"
          id="number-zoom"
        />
      </div>
      <p>Range Min: {props.rangeMin}</p>
      <p>Range Max: {props.rangeMax}</p>
      <div id="min-max-sliders">
        <label>Range Max:</label>
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.rangeMax}
          onChange={props.onRangeMaxChanged}
          className="slider"
          id="min-max"
        />
        <label>Range Min:</label>
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.rangeMin}
          onChange={props.onRangeMinChanged}
          className="slider"
          id="min-max"
        />
      </div>
    </div>
  );
}


module.exports = NumberDataSetControls;