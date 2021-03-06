import React from "react";
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import MadeData from "./Data";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries, BarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";
import { format } from "d3-format";
import { PriceCoordinate } from "react-stockcharts/lib/coordinates";
let ChartJS = (props) => {
  const { type, width, ratio } = props;
  const data = MadeData;
  const xAccessor = (d) => {
    return d.date;
  };
  return (
    <div className="ChartJS">
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={width}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={type}
        data={data}
        seriesName="MSFT"
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
      >
        {/* <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
        </Chart> */}
        <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <YAxis axisAt="right" orient="right" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />

          <PriceCoordinate
            at="left"
            orient="left"
            price={30}
            displayFormat={format(".2f")}
          />

          <PriceCoordinate
            at="right"
            orient="right"
            price={30}
            stroke="#3490DC"
            strokeWidth={1}
            fill="#FFFFFF"
            textFill="#22292F"
            arrowWidth={7}
            strokeDasharray="ShortDash"
            displayFormat={format(".2f")}
          />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

ChartJS.prototype = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

ChartJS.defaultProps = {
  type: "svg",
};

ChartJS = fitWidth(ChartJS);

export default ChartJS;
