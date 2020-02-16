import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import * as queries from './educationQueries';
import './Education.css';
import YearSelect from './yearSelect';
var toastui = require('@toast-ui/react-chart');
var BarChart = toastui.BarChart;
var LineChart = toastui.LineChart;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const queriesArr = [
  'getpreSchool',
  'getElementarySchool',
  'getMiddleSchool',
  'getprivateMiddleSchool',
  'AdvancedSchoolEntranceRate',
  'getSeoulSchoolStatistics',
  'getClassStudentNum',
  'getUniversity',
  'getGraduateSchool'
];

function Education (this: any) {
  let { year } = useParams();
  let options = {
    chart: {
          width: 2000,
          height: 600,
          title: `서울시 유치원 통계 (${year})`,
      },
      yAxis: {
          title: '사람수, 개수',
          pointOnColumn: true,
      },
      xAxis: {
          title: '지역',
      },
      series: {
        spline: true,
        showDot: true,
      },
      tooltip: {
          suffix: '명 (개)',
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
  
  const { data, error, loading } = useQuery(queries.preSchool, {
    variables: { year: year || '2018'},
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <span>Loading</span>;
  } else if (!loading && data && data['data'].length) {
    const districtArr = data['data'].map((item: any) => item['district']);
    data['data'].map((item: any) => {
      delete item['period'];
      delete item['district'];
      delete item['__typename'];
    });
    const tempDataKeys = Object.keys(data['data'][0]);
    const dataField = {
      categories: districtArr,
      series: tempDataKeys.map((itemName: string) => {
        return {
          name: itemName,
          data: data['data'].map((item: any) => {
            return item[itemName] || 0;
          }),
        };
      }),
    };
    return (
      <Container>
        <Helmet>
          <title>Education : Society's Opposite Side Visualization</title>
          <link rel="stylesheet" href="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.css" />
          <script src="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.js" />
        </Helmet>
        <React.Fragment>
          <div className="title">Society's Opposite Side Visualization</div>
          <YearSelect min="2016" max="2018" value={year || "2018"} />
          <div>
            <LineChart data={dataField} options={Object.assign(options, themeOption)} />
          </div>
        </React.Fragment>
      </Container>
    );
  } else {
    console.log(error);
    return <span>Something is wrong</span>;
  }
}

export { Education };