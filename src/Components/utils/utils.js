export const getData = () => {
    const URL = 'https://iori3.ranepa.ru/science_api/v1/oil_refining/1/';
    return fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            return data.volume_marginality_relation;
        });
}

export const getOptions = (data, year) => {
    return {
        chart: {
            type: 'spline'
        },
        xAxis: {
            title: {
                text: 'Переработанное нефтяное сырье накопленным итогом, тонн'
            }
        },
        yAxis: {
            title: {
                text: 'ВДС НПЗ, руб/тонну'
            },
            min: -10
        },
        title: {
            text: 'Highchart'
        },
        series: [
            {
                name: 'С учетом субсидии',
                data: data[year].vds_wsub
            },
            {
                name: 'Без учета субсидии',
                data: data[year].vds_sub
            }
        ]
    }
}