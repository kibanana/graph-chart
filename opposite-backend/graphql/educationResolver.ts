import {
  getPreSchool,
  getElementarySchool,
  getMiddleSchool,
  getPrivateMiddleSchool,
  getAdvancedSchoolEntranceRate,
  getSeoulSchoolStatistics,
  getClassStudentNum,
  getTeacherStudentNum,
  getUniversity,
  getGraduateSchool,
} from './educationApi';

const resolvers = {
  Query: {
    getPreSchool: (year: string) => getPreSchool(year),
    getElementarySchool: (year: string) => getElementarySchool(year),
    getMiddleSchool: (year: string) => getMiddleSchool(year),
    getPrivateMiddleSchool: (year: string) => getPrivateMiddleSchool(year),
    getAdvancedSchoolEntranceRate: (year: string) => getAdvancedSchoolEntranceRate(year),
    getSeoulSchoolStatistics: (year: string) => getSeoulSchoolStatistics(year),
    getClassStudentNum: (year: string) => getClassStudentNum(year),
    getTeacherStudentNum: (year: string) => getTeacherStudentNum(year),
    getUniversity: (year: string) => getUniversity(year),
    getGraduateSchool: (year: string) => getGraduateSchool(year),
  }
};

export default resolvers;