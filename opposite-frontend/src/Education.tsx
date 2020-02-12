import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import * as queries from './educationQueries';
import './Education.css';

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

const Education = () => {
  const { data, error, loading } = useQuery(queries.preSchool, {
    variables: { year: '2017'},
  });
  return (
    <Container>
      <Helmet>
        <title>Education : Society's Opposite Side Visualization</title>
      </Helmet>
      <React.Fragment>
        <div className="title">Society's Opposite Side Visualization</div>
        <span className="title">{ loading && 'Loading' }</span>
        <span className="title">{ error && 'Something is wrong' }</span>
        <div>
          <span>{ !loading && JSON.stringify(data) }</span>
        </div>
      </React.Fragment>
    </Container>
  )
}

export { Education };