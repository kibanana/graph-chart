import fetch from 'node-fetch';
import * as config from './educationConfig';
import { Parser } from 'xml2js';

const parser = new Parser();

export const getPreSchool = async (year: string) => {
  const xmlData = await fetch(config.preSchoolUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getElementarySchool = async (year: string) => {
  const xmlData = await fetch(config.elementarySchoolUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getMiddleSchool = async (year: string) => {
  const xmlData = await fetch(config.middleSchoolUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getPrivateMiddleSchool = async (year: string) => {
  const xmlData = await fetch(config.privateMiddleSchoolUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getAdvancedSchoolEntranceRate = async (year: string) => {
  const xmlData = await fetch(config.advancedSchoolEntranceRateUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getSeoulSchoolStatistics = async (year: string) => {
  const xmlData = await fetch(config.seoulSchoolStatisticsUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getClassStudentNum = async (year: string) => {
  const xmlData = await fetch(config.classStudentNumUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getUniversity = async (year: string) => {
  const xmlData = await fetch(config.universityUrl + year)
    .then(response => response.text())
    .then(data => data);

  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}
export const getGraduateSchool = async (year: string) => {
  const xmlData = await fetch(config.graduateSchoolUrl + year)
    .then(response => response.text())
    .then(data => data);
  
  return parser.parseStringPromise(xmlData)
    .then((result) => {
      return JSON.stringify(result);
    });
}