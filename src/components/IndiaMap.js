import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';


const INDIA_TOPO_JSON = require('../india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  '#ffedea',
  '#ffcec5',
  '#ffad9f',
  '#ff8a75',
  '#ff5533',
  '#e2492d',
  '#be3d26',
  '#9a311f',
  '#782618'
];

const DEFAULT_COLOR = '#EEE';


const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};



function IndiaMap() {
  const [tooltipContent, setTooltipContent] = useState('');
  
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    fetch('https://data.covid19india.org/v4/min/data.min.json')
        .then(res => {
            return res.json();
        })
        .then(result => {
          // console.log();
          setCounter(result);
          
          setTimeout(() => {
            setData(getHeatMapData());
         }, 3500);
        });
}, [])

  // will generate random heatmap data on every call
const getHeatMapData = () => {
  if (counter === null) {
    // console.log('called');
    return [];
  }else{
    // console.log('called after data');
  return [
    { id: 'AP', state: 'Andhra Pradesh', value: counter.AP.total.confirmed },
    { id: 'AR', state: 'Arunachal Pradesh', value: counter.AR.total.confirmed },
    { id: 'AS', state: 'Assam', value: counter.AS.total.confirmed },
    { id: 'BR', state: 'Bihar', value: counter.BR.total.confirmed },
    { id: 'CT', state: 'Chhattisgarh', value: counter.CT.total.confirmed },
    { id: 'GA', state: 'Goa', value: counter.GA.total.confirmed },
    { id: 'GJ', state: 'Gujarat', value: counter.GJ.total.confirmed },
    { id: 'HR', state: 'Haryana', value: counter.HR.total.confirmed },
    { id: 'HP', state: 'Himachal Pradesh', value: counter.HP.total.confirmed },
    { id: 'JH', state: 'Jharkhand', value: counter.JH.total.confirmed },
    { id: 'KA', state: 'Karnataka', value: counter.KA.total.confirmed },
    { id: 'KL', state: 'Kerala', value: counter.KL.total.confirmed },
    { id: 'MP', state: 'Madhya Pradesh', value: counter.MP.total.confirmed },
    { id: 'MH', state: 'Maharashtra', value: counter.MH.total.confirmed },
    { id: 'MN', state: 'Manipur', value: counter.MN.total.confirmed },
    { id: 'ML', state: 'Meghalaya', value: counter.ML.total.confirmed },
    { id: 'MZ', state: 'Mizoram', value: counter.MZ.total.confirmed },
    { id: 'NL', state: 'Nagaland', value: counter.NL.total.confirmed },
    { id: 'OR', state: 'Odisha', value: counter.OR.total.confirmed },
    { id: 'PB', state: 'Punjab', value: counter.PB.total.confirmed },
    { id: 'RJ', state: 'Rajasthan', value: counter.RJ.total.confirmed },
    { id: 'SK', state: 'Sikkim', value: counter.SK.total.confirmed },
    { id: 'TN', state: 'Tamil Nadu', value: counter.TN.total.confirmed },
    { id: 'TG', state: 'Telangana', value: counter.TG.total.confirmed },
    { id: 'TR', state: 'Tripura', value: counter.TR.total.confirmed },
    { id: 'UT', state: 'Uttarakhand', value: counter.UT.total.confirmed },
    { id: 'UP', state: 'Uttar Pradesh', value: counter.UP.total.confirmed },
    { id: 'WB', state: 'West Bengal', value: counter.WB.total.confirmed },
    { id: 'WB', state: 'West Bengal', value: counter.WB.total.confirmed },
    { id: 'AN', state: 'Andaman and Nicobar Islands', value: counter.AN.total.confirmed },
    { id: 'CH', state: 'Chandigarh', value: counter.CH.total.confirmed },
    { id: 'DN', state: 'Dadra and Nagar Haveli', value: counter.DN.total.confirmed },
    // { id: 'DD', state: 'Daman and Diu', value: counter.DD.total.confirmed },
    { id: 'DL', state: 'Delhi', value: counter.DL.total.confirmed },
    { id: 'JK', state: 'Jammu and Kashmir', value: counter.JK.total.confirmed },
    { id: 'LA', state: 'Ladakh', value: counter.LA.total.confirmed },
    { id: 'LD', state: 'Lakshadweep', value: counter.LD.total.confirmed },
    { id: 'PY', state: 'Puducherry', value: counter.PY.total.confirmed }
  ];}
};
const [data, setData] = useState(getHeatMapData());

    

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0)
  };

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };
  if(counter){
  return (
    <div className="full-width-height container">
      <h2 className="d-flex justify-content-center align-items-center container"></h2>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                //console.log(geo.id);
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
       
        <div className="d-flex justify-content-center align-items-center container">
          <button className="btn btn-info m-2 p-2" onClick={onChangeButtonClick}>Populate Data on Map</button>
        </div>
    </div>
  );
          }else{
            return (
              <div></div>
            );
          }
}

export default IndiaMap;
