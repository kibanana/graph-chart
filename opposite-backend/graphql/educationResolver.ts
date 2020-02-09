import {
  getPreSchool,
  getElementarySchool,
  getMiddleSchool,
  getPrivateMiddleSchool,
  getAdvancedSchoolEntranceRate,
  getSeoulSchoolStatistics,
  getClassStudentNum,
  getUniversity,
  getGraduateSchool,
} from './educationApi';

const resolvers = {
  Query: {
    getPreSchool: async (_parent: any, { year }: any) => {
      const convertedResult: string = await getPreSchool(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          district: elem['JACHIGU'][0],
          schoolNum: Number(elem['WONSU'][0]),
          classNum: Number(elem['HAKGEUPSU'][0]),
          classRoomNum: Number(elem['GYOSILSU'][0]),
          studentNum: Number(elem['GYE_1'][0]),
          studentMaleNum: Number(elem['NAMJA_1'][0]),
          studentFemaleNum: Number(elem['YEOJA_1'][0]),
          teacherNum: Number(elem['GYE_2'][0]),
          teacherMaleNum: Number(elem['NAMJA_2'][0]),
          teacherFemaleNum: Number(elem['YEOJA_2'][0]),
          clericalWorkerNum: Number(elem['GYE_3'][0]),
          clericalMaleNum: Number(elem['NAMJA_3'][0]),
          clericalFemaleNum: Number(elem['YEOJA_3'][0]),
          newStudentNum: Number(elem['GYE_4'][0]),
          newStudentMaleNum: Number(elem['NAMJA_4'][0]),
          newStudentFemaleNum: Number(elem['YEOJA_4'][0]),
          reStudentNum: Number(elem['GYE_5'][0]),
          reStudentMaleNum: Number(elem['NAMJA_5'][0]),
          reStudentFemaleNum: Number(elem['YEOJA_5'][0]),
          graduationStudentNum: Number(elem['GYE_6'][0]),
          graduationStudentMaleNum: Number(elem['NAMJA_6'][0]),
          graduationStudentFemaleNum: Number(elem['YEOJA_6'][0]),
        });
      });
      return graphqlResult;
    },
    getElementarySchool: async (_parent: any, { year }: any) => {
      const convertedResult = await getElementarySchool(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
    getMiddleSchool: async (_parent: any, { year }: any) => {
      const convertedResult = await getMiddleSchool(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
    getPrivateMiddleSchool: async (_parent: any, { year }: any) => {
      const convertedResult = await getPrivateMiddleSchool(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
    getAdvancedSchoolEntranceRate: async (_parent: any, { year }: any) => {
      const convertedResult = await getAdvancedSchoolEntranceRate(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
    getSeoulSchoolStatistics: async (_parent: any, { year }: any) => {
      const convertedResult = await getSeoulSchoolStatistics(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
    getClassStudentNum: async (_parent: any, { year }: any) => {
      const convertedResult = await getClassStudentNum(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
    getUniversity: async (_parent: any, { year }: any) => {
      const convertedResult = await getUniversity(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
    getGraduateSchool: async (_parent: any, { year }: any) => {
      const convertedResult = await getGraduateSchool(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi200']['row'];
      
      const graphqlResult: any[] = [];
      return graphqlResult;
    },
  }
};

export default resolvers;