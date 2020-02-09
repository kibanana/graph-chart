import fetch from 'node-fetch';
import * as config from './educationConfig';

export const getPreSchool = async (year: string) => {
  await fetch(config.preSchoolUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getElementarySchool = async (year: string) => {
  await fetch(config.elementarySchoolUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getMiddleSchool = async (year: string) => {
  await fetch(config.middleSchoolUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getPrivateMiddleSchool = async (year: string) => {
  await fetch(config.privateMiddleSchoolUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getAdvancedSchoolEntranceRate = async (year: string) => {
  await fetch(config.advancedSchoolEntranceRateUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getSeoulSchoolStatistics = async (year: string) => {
  await fetch(config.seoulSchoolStatisticsUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getClassStudentNum = async (year: string) => {
  await fetch(config.classStudentNumUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getTeacherStudentNum = async (year: string) => {
  await fetch(config.teacherStudentNumUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getUniversity = async (year: string) => {
  await fetch(config.universityUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}
export const getGraduateSchool = async (year: string) => {
  await fetch(config.graduateSchoolUrl + '/' + year)
    .then(response => response.text())
    .then(data => console.log(data))
  return 'Finish getting data';
}