import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Container, Paper, Card } from '@material-ui/core';
import queriesArr from '../lib/educationQueries';
import educationAttr from '../lib/educationAttr';
import YearSelect from './yearSelect';
import './Education.scss';
const toastui = require('@toast-ui/react-chart');
const LineChart = toastui.LineChart;
const ColumnChart = toastui.ColumnChart;

interface IChart {
  title: string;
  min: string;
  max: string;
}

const lineChartArr: IChart[] = [
  {
    title: '서울시 유치원 통계',
    min: '2016',
    max: '2018',
  },
  {
    title: '서울시 초등학교 통계',
    min: '2017',
    max: '2017',
  },
  {
    title: '서울시 중학교 (국·공립) 통계',
    min: '2017',
    max: '2017',
  },
  {
    title: '서울시 중학교 (사립) 통계',
    min: '2017',
    max: '2017',
  },
  {
    title: '서울시 상급학교 진학률 통계',
    min: '2017',
    max: '2017',
  },
  {
    title: '서울시 학교 총괄 통계',
    min: '2017',
    max: '2017',
  },
  {
    title: '서울시 학급당 학생수 (구별) 통계',
    min: '2016',
    max: '2016',
  },
];

const ColumnChartArr: IChart[] = [
  {
    title: '서울시 대학교 통계',
    min: '2017',
    max: '2017',
  },
  {
    title: '서울시 대학원 통계',
    min: '2017',
    max: '2017',
  },
];

function EducationLineChart (this: any, idx: number, year: string) {
  const options = {
    chart: {
      width: 1500,
      height: 600,
      title: '',
    },
    yAxis: {
        title: '',
        suffix: '명 (개)',
        pointOnColumn: true,
    },
    xAxis: {
      title: '구분',
    },
    series: {
      spline: true,
      showDot: true,
      zoomable: true,
    },
    tooltip: {
      suffix: '명 (개)',
      grouped: true,
    },
    // 밑 속성은 default기 때문에 지워도 동일하게 동작함
    legend: {
      showCheckbox: true,
      visible: true,
    },
  };
  
  const themeOption = {
    series: {
      colors: [
        '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
        '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd',
      ]
    }
  };

  const { data, error, loading } = useQuery(queriesArr[idx], {
    variables: { year: year || lineChartArr[idx].max},
    fetchPolicy: 'cache-and-network',
  });
  options['chart']['title'] = `${lineChartArr[idx].title} (${year || lineChartArr[idx].max})`;
  if (loading) {
    return <div className="spinner-border text-muted" key={'chart'+idx}></div>
  } else if (!loading && data && data['data'].length) {
    const districtArr = data['data'].map((item: any) => {
      if (item['district']) {
        return item['district'];
      } else {
        return item['parentType'] === item['subType'] ? item['parentType'] :`${item['parentType']} - ${item['subType']}`;
      }
    });

    data['data'].map((item: any) => {
      delete item['period'];
      delete item['__typename'];
      delete item['parentType'];
      delete item['subType'];
    });
    const tempDataKeys = Object.keys(data['data'][0]);
    let dataField = {
      categories: districtArr,
      series: tempDataKeys.map((itemName: string) => {
        return {
          name: educationAttr[itemName],
          data: data['data'].map((item: any) => {
            return item[itemName];
          }),
        };
      }),
    };
    let tempChart = 
    <Paper key={idx}>
      <YearSelect min={lineChartArr[idx].min} max={lineChartArr[idx].max} value={year || lineChartArr[idx].max} />
      <LineChart data={dataField} options={Object.assign(options, themeOption)} />
    </Paper>;
    return tempChart;
    ;
  } else {
    console.error(error);
  }
}

function EducationColumnChart (this: any, idx: number, year: string) {
  const options = {
    chart: {
      width: 1000,
      height: 600,
      title: '',
    },
    yAxis: {
      title: '',
      suffix: '명 (개)',
    },
    xAxis: {
        title: '',
    },
    tooltip: {
      suffix: '명 (개)',
    },
    legend: {
      align: 'top',
      showCheckbox: false,
      visible: false,
    }
  };
  const themeOption = {
    series: {
      colors: [
        '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
        '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd',
      ]
    }
  };

  const { data, error, loading } = useQuery(queriesArr[(lineChartArr.length + idx)], {
    variables: { year: year || ColumnChartArr[idx].max},
    fetchPolicy: 'cache-and-network',
  });
  options['chart']['title'] = `${ColumnChartArr[idx].title} (${year || ColumnChartArr[idx].max})`;
  if (loading) {
    return <div className="spinner-border text-muted" key={'chart'+(lineChartArr.length + idx)} />;
  } else if (!loading && data && data['data'].length) {
    data['data'].map((item: any) => {
      delete item['period'];
      delete item['district'];
      delete item['__typename'];
      delete item['parentType'];
      delete item['subType'];
    });
    const dataField = {
      categories: Object.keys(data['data'][0]).map((item: string) => educationAttr[item]),
      series: [
        {
          name: 'Data',
          data: Object.values(data['data'][0]),
        }
      ],
    };
    const tempChart = 
    <Paper key={(lineChartArr.length + idx)}>
      <YearSelect min={ColumnChartArr[idx].min} max={ColumnChartArr[idx].max} value={year || ColumnChartArr[idx].max} />
      <ColumnChart data={dataField} options={Object.assign(options, themeOption)} />
    </Paper>;
    return tempChart;
    ;
  } else {
    console.error(error);
  }
}

function Education (this: any) {
  let { year }: any = useParams();
  const chartArr: Array<any> = [];
  for (let idx = 0; idx < lineChartArr.length; idx++) {
    let tempElem = EducationLineChart(idx, year || lineChartArr[idx].max);
    chartArr.push(tempElem);
  }
  for (let idx = 0; idx < ColumnChartArr.length; idx++) {
    let tempElem = EducationColumnChart(idx, year || ColumnChartArr[idx].max);
    chartArr.push(tempElem);
  }
  return (
    <Container id="container">
      <Helmet>
        <title>교육 : Graph Chart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap&subset=korean" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" />
        <script src="https://unpkg.com/tui-code-snippet" />
        <link rel="stylesheet" href="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.css" />
        <script src="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.js" />
      </Helmet>

      <h2 className="title">교육</h2>
      {chartArr}
    </Container>
  );
}

export { Education };