import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const queriesArr: DocumentNode[] = [];

// 유치원
const preSchool = gql`
query getpreSchool($year: String!) {
  data: getPreSchool(year: $year) {
    period
    district
    schoolNum
    classNum
    classRoomNum
    studentNum
    studentMaleNum
    studentFemaleNum
    teacherNum
    teacherMaleNum
    teacherFemaleNum
    clericalWorkerNum
    clericalMaleNum
    clericalFemaleNum
    newStudentNum
    newStudentMaleNum
    newStudentFemaleNum
    reStudentNum
    reStudentMaleNum
    reStudentFemaleNum
    graduationStudentNum
    graduationStudentMaleNum
    graduationStudentFemaleNum
  }
}
`;
queriesArr.push(preSchool);
// 초등학교
const elementarySchool = gql`
query getElementarySchool($year: String!) {
  data: getElementarySchool(year: $year) {
   	period
    district
    schoolNum
    classNum
    classRoomNum
    studentNum
    studentMaleNum
    studentFemaleNum
    teacherNum
    teacherMaleNum
    teacherFemaleNum
    graduationStudentNum
  }
}
`;
queriesArr.push(elementarySchool);
// 중학교
const middleSchool = gql`
query getMiddleSchool($year: String!) {
  data: getMiddleSchool(year: $year) {
    period
    district
    schoolNum
    classNum
    classRoomNum
    studentNum
    studentMaleNum
    studentFemaleNum
    teacherNum
    teacherFemaleNum
    employeeNum
    employeeFemaleNum
    newStudentNum
    graduationStudentNum
    higherLearningStudentNum
  }
}
`;
queriesArr.push(middleSchool);
// 사립중학교
const privateMiddleSchool = gql`
query getprivateMiddleSchool($year: String!) {
  data: getPrivateMiddleSchool(year: $year) {
    period
    district
    schoolNum
    classNum
    classRoomNum
    studentNum
    studentMaleNum
    studentFemaleNum
    teacherNum
    teacherFemaleNum
    employeeNum
    employeeFemaleNum
    newStudentNum
    graduationStudentNum
    higherLearningStudentNum
  }
}
`;
queriesArr.push(privateMiddleSchool);
// 상급학교 진학률
const advancedSchoolEntranceRate = gql`
query AdvancedSchoolEntranceRate($year: String!) {
  data: getAdvancedSchoolEntranceRate(year: $year) {
    period
    district
    totalGraduationStudentNum
    totalHigherLearningStudentNum
    totalHigherLearningStudentRate
    totalEmploymentStudentNum
    totalEtcStudentNum
    generalGraduationStudentNum
    generalHigherLearningStudentNum
    generalHigherLearningStudentRate
    generalEmploymentStudentNum
    generalEtcStudentNum
    specialGraduationStudentNum
    specialHigherLearningStudentNum
    specialHigherLearningStudentRate
    specialEmploymentStudentNum
    specialEtcStudentNum
    characterizationHigherLearningStudentNum
    characterizationHigherLearningStudentRate
    characterizationEtcStudentNum
    autonomyGraduationStudentNum
    autonomyHigherLearningStudentNum
    autonomyHigherLearningStudentRate
    autonomyEmploymentStudentNum
    autonomyEtcStudentNum
  }
}
`;
queriesArr.push(advancedSchoolEntranceRate);
// 서울시 학교 총괄 통계
const seoulSchoolStatistics = gql`
query getSeoulSchoolStatistics($year: String!) {
  data: getSeoulSchoolStatistics(year: $year) {
   	period
    parentType
    subType
    schoolNum
    classNum
    classRoomNum
    studentNum
    studentMaleNum
    studentFemaleNum
    parentNum
    subTeacherNum
    subTeacheMaleNum
    subTeacheFemaleNum
    subEmployeeNum
    subEmployeeMaleNum
    subEmployeeFemaleNum
    studentNumPerTeacher
  }
}
`;
queriesArr.push(seoulSchoolStatistics);
// 학급당 학생수
const classStudentNum = gql`
query getClassStudentNum($year: String!) {
  data: getClassStudentNum(year: $year) {
   	period
    district
    preschoolStudentNum
    preschoolClassNum
    preschoolStudentPerClass
    elementarySchoolStudentNum
    elementarySchoolClassNum
    elementarySchoolStudentPerClass
    middleSchoolStudentNum
    middleSchoolClassNum
    middleSchoolStudentPerClass
    highSchoolStudentNum
    highSchoolClassNum
    highSchoolStudentPerClass
  }
}
`;
queriesArr.push(classStudentNum);
// 대학교
const university = gql`
query getUniversity($year: String!) {
  data: getUniversity(year: $year) {
    period
    universityNum
    departmentNum
    studentNum
    studentMaleNum
    studentFemaleNum
    teacherNum
    teacherFemaleNum
    employeeNum
    employeeFemaleNum
    graduateStudentNum
    highLearningStudentNum
    employeeStudentNum
    recruitStudentNum
    newApplicantNum
    newStudentNum
  }
}
`;
queriesArr.push(university);
// 대학원
const graduateSchool = gql`
query getGraduateSchool($year: String!) {
  data: getGraduateSchool(year: $year) {
   period
    graduateSchoolNum
    masterDepartmentNum
    doctorDepartmentNum
    entranceMasterNum
    entranceDoctorNum
    masterNum
    masterFemaleNum
    doctorNum
    doctorFemaleNum
    teacherNum
    teacherFemaleNum
    employeeNum
    employeeFemaleNum
    masterGraduateStudentNum
    doctorGraduateStudentNum
    masterEntranceStudentNum
    masterEntranceStudentFemaleNum
    doctorEntranceStudentNum
    doctorEntranceStudentFemaleNum
  }
}
`;
queriesArr.push(graduateSchool);

export default queriesArr;
