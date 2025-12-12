import {
    ChartCanvas,
    Chart,
    CandlestickSeries,
    XAxis,
    YAxis,
} from "react-financial-charts";
import { withSize } from "react-financial-charts";
import { scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";

function OhlcvChart({ data, width, height }) {
    if (!data || data.length === 0) return null;

    const parseDate = timeParse("%Y-%m-%d");
    const formattedData = data.map(d => ({
        date: parseDate(d.id.date),
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close,
        volume: d.volume,
    }));

    return (
        <ChartCanvas
            width={width}
            height={height}
            ratio={2}
            data={formattedData}
            seriesName="OHLCV"
            xAccessor={(d) => d.date}
            xScale={scaleTime()}
            xExtents={[formattedData[0].date, formattedData[formattedData.length - 1].date]}
        >
            <Chart id={1} yExtents={d => [d.high, d.low]}>
                <XAxis />
                <YAxis />
                <CandlestickSeries />
            </Chart>
        </ChartCanvas>
    );
}

export default withSize({ style: { minHeight: 400 } })(OhlcvChart);