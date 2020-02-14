import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import * as queries from './educationQueries';
import './Education.css';
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
  const options = {
    chart: {
          width: 1160,
          height: 3000,
          title: 'getPreSchool',
          format: '1,000'
      },
      yAxis: {
          title: '종류'
      },
      xAxis: {
          title: '사람수',
          suffix: '명'
      },
      series: {
          showLabel: true
      }
  };
  
  const { data, error, loading } = useQuery(queries.preSchool, {
    variables: { year: '2017'},
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <span>Loading</span>;

  if (!loading && data && data['data'].length) {
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
            return item[itemName];
          }),
        };
      }),
    };
    return (
      <Container>
        <Helmet>
          <title>Education : Society's Opposite Side Visualization</title>
        </Helmet>
        <React.Fragment>
        <div className="title">Society's Opposite Side Visualization</div>
        <div>
          <BarChart data={dataField} options={options} />
        </div>
        </React.Fragment>
      </Container>
    );
  }

  return <span>Something is wrong</span>;
}

export { Education };