import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => {
    const { options } = props;
    return (
        <div>
            {options ? <HighchartsReact highcharts={Highcharts} options={options} /> : <div>Loader...</div>}
        </div>
    )
}

export default Chart;