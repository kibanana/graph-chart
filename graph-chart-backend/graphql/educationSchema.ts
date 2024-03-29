import { gql } from 'apollo-server';

export default gql`
type PreSchool {
  period: Int
  district: String
  schoolNum: Int
  classNum: Int
  classRoomNum: Int
  studentNum: Int
  studentMaleNum: Int
  studentFemaleNum: Int
  teacherNum: Int
  teacherMaleNum: Int
  teacherFemaleNum: Int
  clericalWorkerNum: Int
  clericalMaleNum: Int
  clericalFemaleNum: Int
  newStudentNum: Int
  newStudentMaleNum: Int
  newStudentFemaleNum: Int
  reStudentNum: Int
  reStudentMaleNum: Int
  reStudentFemaleNum: Int
  graduationStudentNum: Int
  graduationStudentMaleNum: Int
  graduationStudentFemaleNum: Int
}
type ElementarySchool {
  period: Int
  district: String
  schoolNum: Int
  classNum: Int
  classRoomNum: Int
  studentNum: Int
  studentMaleNum: Int
  studentFemaleNum: Int
  teacherNum: Int
  teacherMaleNum: Int
  teacherFemaleNum: Int
  employeeNum: Int
  employeeMaleNum: Int
  employeeFemaleNum: Int
  graduationStudentNum: Int
  higherLearningStudentNum: Int
}
type MiddleSchool {
  period: Int
  district: String
  schoolNum: Int
  classNum: Int
  classRoomNum: Int
  studentNum: Int
  studentMaleNum: Int
  studentFemaleNum: Int
  teacherNum: Int
  teacherFemaleNum: Int
  employeeNum: Int
  employeeFemaleNum: Int
  newStudentNum: Int
  graduationStudentNum: Int
  higherLearningStudentNum: Int
}
type PrivateMiddleSchool {
  period: Int
  district: String
  schoolNum: Int
  classNum: Int
  classRoomNum: Int
  studentNum: Int
  studentMaleNum: Int
  studentFemaleNum: Int
  teacherNum: Int
  teacherFemaleNum: Int
  employeeNum: Int
  employeeFemaleNum: Int
  newStudentNum: Int
  graduationStudentNum: Int
  higherLearningStudentNum: Int
}
type AdvancedSchoolEntranceRate {
  period: Int
  district: String
  totalGraduationStudentNum: Int
  totalHigherLearningStudentNum: Int
  totalHigherLearningStudentRate: Float
  totalEmploymentStudentNum: Int
  totalEtcStudentNum: Int

  generalGraduationStudentNum: Int
  generalHigherLearningStudentNum: Int
  generalHigherLearningStudentRate: Float
  generalEmploymentStudentNum: Int
  generalEtcStudentNum: Int

  specialGraduationStudentNum: Int
  specialHigherLearningStudentNum: Int
  specialHigherLearningStudentRate: Float
  specialEmploymentStudentNum: Int
  specialEtcStudentNum: Int

  characterizationGraduationStudentNum: Int
  characterizationHigherLearningStudentNum: Int
  characterizationHigherLearningStudentRate: Float
  characterizationEmploymentStudentNum: Int
  characterizationEtcStudentNum: Int

  autonomyGraduationStudentNum: Int
  autonomyHigherLearningStudentNum: Int
  autonomyHigherLearningStudentRate: Float
  autonomyEmploymentStudentNum: Int
  autonomyEtcStudentNum: Int
}
type SeoulSchoolStatistics {
  period: Int
  parentType: String
  subType: String
  schoolNum: Int
  classNum: Int
  classRoomNum: Int
  
  studentNum: Int
  studentMaleNum: Int
  studentFemaleNum: Int

  parentNum: Int
  subTeacherNum: Int
  subTeacherMaleNum: Int
  subTeacherFemaleNum: Int
  subEmployeeNum: Int
  subEmployeeMaleNum: Int
  subEmployeeFemaleNum: Int

  studentNumPerTeacher: Float
}
type ClassStudentNum {
  period: Int
  district: String

  preschoolStudentNum: Int
  preschoolClassNum: Int
  preschoolStudentPerClass: Float

  elementarySchoolStudentNum: Int
  elementarySchoolClassNum: Int
  elementarySchoolStudentPerClass: Float
  
  middleSchoolStudentNum: Int
  middleSchoolClassNum: Int
  middleSchoolStudentPerClass: Float

  highSchoolStudentNum: Int
  highSchoolClassNum: Int
  highSchoolStudentPerClass: Float
}
type University {
  period: Int
  district: String

  universityNum: Int
  departmentNum: Int
  studentNum: Int
  studentMaleNum: Int
  studentFemaleNum: Int
  teacherNum: Int
  teacherFemaleNum: Int
  employeeNum: Int
  employeeFemaleNum: Int
  graduateStudentNum: Int
  highLearningStudentNum: Int
  employeeStudentNum: Int
  recruitStudentNum: Int
  newApplicantNum: Int
  newStudentNum: Int
}
type GraduateSchool {
  period: Int
  graduateSchoolNum: Int

  masterDepartmentNum: Int
  doctorDepartmentNum: Int
  
  entranceMasterNum: Int
  entranceDoctorNum: Int

  masterNum: Int
  masterFemaleNum: Int
  doctorNum: Int
  doctorFemaleNum: Int

  teacherNum: Int
  teacherFemaleNum: Int
  employeeNum: Int
  employeeFemaleNum: Int

  masterGraduateStudentNum: Int
  doctorGraduateStudentNum: Int

  masterEntranceStudentNum: Int
  masterEntranceStudentFemaleNum: Int
  doctorEntranceStudentNum: Int
  doctorEntranceStudentFemaleNum: Int
}

type Query {
  getPreSchool(year: String!): [PreSchool],
  getElementarySchool(year: String!): [ElementarySchool],
  getMiddleSchool(year: String!): [MiddleSchool],
  getPrivateMiddleSchool(year: String!): [PrivateMiddleSchool],
  getAdvancedSchoolEntranceRate(year: String!): [AdvancedSchoolEntranceRate],
  getSeoulSchoolStatistics(year: String!): [SeoulSchoolStatistics],
  getClassStudentNum(year: String!): [ClassStudentNum],
  getUniversity(year: String!): [University],
  getGraduateSchool(year: String!): [GraduateSchool],
}
`;