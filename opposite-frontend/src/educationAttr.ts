// 유치원
// 초등학교
// 중학교
// 사립중학교
// 상급학교 진학률
// 서울시 학교 총괄 통계
// 학급당 학생수
// 대학교
// 대학원

const educationAttr: { [key: string]: string } = {
  schoolNum: '학교수',
  classNum: '학급수',
  classRoomNum: '보통교실수',
  studentNum: '학생수',
  studentMaleNum: '남학생수',
  studentFemaleNum: '여학생수',
  teacherNum: '교원수',
  teacherMaleNum: '남 교원수',
  teacherFemaleNum: '여 교원수',
  clericalWorkerNum: '사무직원수',
  clericalMaleNum: '남 사무직원수',
  clericalFemaleNum: '여 사무직원수',
  newStudentNum: '입학자수',
  newStudentMaleNum: '남 입학자수',
  newStudentFemaleNum: '여 입학자수',
  reStudentNum: '재취원자수',
  reStudentMaleNum: '남 재취원자수',
  reStudentFemaleNum: '여 재취원자수',
  graduationStudentNum: '졸업생수',
  graduationStudentMaleNum: '남 졸업생수',
  graduationStudentFemaleNum: '여 졸업생수',

  employeeNum: '사무직원수',
  employeeMaleNum: '남 사무직원수',
  employeeFemaleNum: '여 사무직원수',
  higherLearningStudentNum: '진학자수',

  totalGraduationStudentNum: '졸업자',
  totalHigherLearningStudentNum: '진학 학생수',
  totalHigherLearningStudentRate: '진학률',
  totalEmploymentStudentNum: '취업자수',
  totalEtcStudentNum: '기타',

  generalGraduationStudentNum: '일반고 졸업자',
  generalHigherLearningStudentNum: '일반고 진학 학생수',
  generalHigherLearningStudentRate: '일반고 진학률',
  generalEmploymentStudentNum: '일반고 취업자수',
  generalEtcStudentNum: '일반고 기타',

  specialGraduationStudentNum: '특수목적고 졸업자',
  specialHigherLearningStudentNum: '특수목적고 진학 학생수',
  specialHigherLearningStudentRate: '특수목적고 진학률',
  specialEmploymentStudentNum: '특수목적고 취업자수',
  specialEtcStudentNum: '특수목적고 기타',

  characterizationGraduationStudentNum: '특성화고 졸업자',
  characterizationHigherLearningStudentNum: '특성화고 진학 학생수',
  characterizationHigherLearningStudentRate: '특성화고 진학률',
  characterizationEmploymentStudentNum: '특성화고 취업자',
  characterizationEtcStudentNum: '특성화고 기타',

  autonomyGraduationStudentNum: '자율고 졸업자',
  autonomyHigherLearningStudentNum: '자율고 진학 학생수',
  autonomyHigherLearningStudentRate: '자율고 진학률',
  autonomyEmploymentStudentNum: '자율고 취업자',
  autonomyEtcStudentNum: '자율고 기타',

  parentNum: '교직원수 계',
  subTeacherNum: '교원 소계',
  subTeacherMaleNum: '남 교원수',
  subTeacherFemaleNum: '여 교원수',
  subEmployeeNum: '사무직원 소계',
  subEmployeeMaleNum: '여 사무직원수',
  subEmployeeFemaleNum: '남 사무직원수',

  preschoolStudentNum: '유치원 - 원아수',
  preschoolClassNum: '유치원 - 학급수',
  preschoolStudentPerClass: '유치원 - 학급당 원아수',

  elementarySchoolStudentNum: '초등학교 - 학생수',
  elementarySchoolClassNum: '초등학교 - 학급수',
  elementarySchoolStudentPerClass: '초등학교 - 학급당 학생수',

  middleSchoolStudentNum: '중학교 - 학생수',
  middleSchoolClassNum: '중학교 - 학급수',
  middleSchoolStudentPerClass: '중학교 - 학급당 학생수',

  highSchoolStudentNum: '고등학교 - 학생수',
  highSchoolClassNum: '고등학교 - 학급수',
  highSchoolStudentPerClass: '고등학교 - 학급당 학생수',

  studentNumPerTeacher: '교원 1인당 학생수',

  universityNum: '대학수',
  departmentNum: '학과(학부)',
  graduateStudentNum: '졸업자수',
  highLearningStudentNum: '진학자수',
  employeeStudentNum: '취업자수',
  recruitStudentNum: '입대자수',
  newApplicantNum: '입학지원자수',

  graduateSchoolNum: '대학원수',
  masterDepartmentNum: '석사과정 학과수',
  doctorDepartmentNum: '박사과정 학과수',

  entranceMasterNum: '석사과정 입학정원수',
  entranceDoctorNum: '박사과정 입학정원수',

  masterNum: '석사과정 학생수',
  masterFemaleNum: '석사과정 여학생수',
  doctorNum: '박사과정 학생수',
  doctorFemaleNum: '박사과정 여학생수',

  masterGraduateStudentNum: '석사과정 졸업자수',
  doctorGraduateStudentNum: '박사과정 졸업자수',

  masterEntranceStudentNum: '석사과정 입학자수',
  masterEntranceStudentFemaleNum: '석사과정 여입학자수',
  doctorEntranceStudentNum: '박사과정 입학자수',
  doctorEntranceStudentFemaleNum: '박사과정 여입학자수',
};

export default educationAttr;
