import gql from 'graphql-tag';

// 유치원
export const preSchool = gql`
query getpreSchool($year: String!) {
  getPreSchool(year: $year) {
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
// 초등학교
export const elementarySchool = gql`
query getElementarySchool($year: String!) {
  getElementarySchool(year: $year) {
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
// 중학교
export const middleSchool = gql`
query getMiddleSchool($year: String!) {
  getMiddleSchool(year: $year) {
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
// 사립중학교
export const privateMiddleSchool = gql`
query getprivateMiddleSchool($year: String!) {
  getPrivateMiddleSchool(year: $year) {
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
// 상급학교 진학률
export const advancedSchoolEntranceRate = gql`
query AdvancedSchoolEntranceRate($year: String!) {
  getAdvancedSchoolEntranceRate(year: $year) {
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
// 서울시 학교 총괄 통계
export const seoulSchoolStatistics = gql`
query getSeoulSchoolStatistics($year: String!) {
  getSeoulSchoolStatistics(year: $year) {
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
// 학급당 학생수
export const classStudentNum = gql`
query getClassStudentNum($year: String!) {
  getClassStudentNum(year: $year) {
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
// 대학교
export const university = gql`
query getUniversity($year: String!) {
  getUniversity(year: $year) {
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
// 대학원
export const graduateSchool = gql`
query getGraduateSchool($year: String!) {
  getGraduateSchool(year: $year) {
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