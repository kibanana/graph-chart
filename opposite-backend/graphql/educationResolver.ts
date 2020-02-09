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
      console.log(JSON.parse(convertedResult)['octastatapi201']['row']);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi201']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          district: elem['JACHIGU'][0],
          schoolNum: Number(elem['HAKGYOSU'][0]),
          classNum: Number(elem['HAKGEUPSU'][0]),
          classRoomNum: Number(elem['GYOSILSU'][0]),
          studentNum: Number(elem['GYE_1'][0]),
          studentMaleNum: Number(elem['NAMJA_1'][0]),
          studentFemaleNum: Number(elem['YEOJA_1'][0]),
          teacherNum: Number(elem['GYE_2'][0]),
          teacherMaleNum: Number(elem['NAMJA_2'][0]),
          teacherFemaleNum: Number(elem['YEOJA_2'][0]),
          employeeNum: Number(elem['GYE_3'][0]),
          employeeMaleNum: Number(elem['NAMJA_3'][0]),
          employeeFemaleNum: Number(elem['YEOJA_3'][0]),
          graduationStudentNum: Number(elem['JOREOPJASU'][0]),
          higherLearningStudentNum: Number(elem['JINHAKJASU'][0]),
        });
      });
      return graphqlResult;
    },
    getMiddleSchool: async (_parent: any, { year }: any) => {
      const convertedResult = await getMiddleSchool(year);
      console.log(convertedResult);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi202']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          district: elem['JACHIGU'][0],
          schoolNum: Number(elem['HAKGYOSU'][0]),
          classNum: Number(elem['HAKGEUPSU'][0]),
          classRoomNum: Number(elem['GYE_4'][0]),
          studentNum: Number(elem['GYE_1'][0]),
          studentMaleNum: Number(elem['NAMJA'][0]),
          studentFemaleNum: Number(elem['YEOJA_1'][0]),
          teacherNum: Number(elem['GYE_2'][0]),
          teacherFemaleNum: Number(elem['YEOJA_2'][0]),
          employeeNum: Number(elem['GYE_3'][0]),
          employeeFemaleNum: Number(elem['YEOJA_3'][0]),
          newStudentNum: Number(elem['IPHAKJASU'][0]),
          graduationStudentNum: Number(elem['JOREOPJASU'][0]),
          higherLearningStudentNum: Number(elem['JINHAKJASU'][0]),
        });
      });
      return graphqlResult;
    },
    getPrivateMiddleSchool: async (_parent: any, { year }: any) => {
      const convertedResult = await getPrivateMiddleSchool(year);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi203']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          district: elem['GUBUN'][0],
          schoolNum: Number(elem['HAKGYOSU'][0]),
          classNum: Number(elem['HAKGEUPSU'][0]),
          classRoomNum: Number(elem['GYOSILSU'][0]),
          studentNum: Number(elem['GYE_1'][0]),
          studentMaleNum: Number(elem['NAMJA'][0]),
          studentFemaleNum: Number(elem['YEOJA_1'][0]),
          teacherNum: Number(elem['GYE_2'][0]),
          teacherFemaleNum: Number(elem['YEOJA_2'][0]),
          employeeNum: Number(elem['GYE_3'][0]),
          employeeFemaleNum: Number(elem['YEOJA_3'][0]),
          newStudentNum: Number(elem['IPHAKJASU'][0]),
          graduationStudentNum: Number(elem['JOREOPJASU'][0]),
          higherLearningStudentNum: Number(elem['JINHAKJASU'][0]),
        });
      });
      return graphqlResult;
    },
    getAdvancedSchoolEntranceRate: async (_parent: any, { year }: any) => {
      const convertedResult = await getAdvancedSchoolEntranceRate(year);
      console.log(convertedResult);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi197']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          district: elem['JACHIGU'][0],
          totalGraduationStudentNum: Number(elem['JOREOPJA_1'][0]),
          totalHigherLearningStudentNum: Number(elem['HAKSAENGSU_1'][0]),
          totalHigherLearningStudentRate: Number(elem['JINHANGNYUL_1'][0]),
          totalEmploymentStudentNum: Number(elem['CHWIEOPJA_1'][0]),
          totalEtcStudentNum: Number(elem['GITA_1'][0]),

          generalGraduationStudentNum: Number(elem['JOREOPJA_2'][0]),
          generalHigherLearningStudentNum: Number(elem['HAKSAENGSU_2'][0]),
          generalHigherLearningStudentRate: Number(elem['JINHANGNYUL_2'][0]),
          generalEmploymentStudentNum: Number(elem['CHWIEOPJA_2'][0]),
          generalEtcStudentNum: Number(elem['GITA_2'][0]),

          specialGraduationStudentNum: Number(elem['JOREOPJA_3'][0]),
          specialHigherLearningStudentNum: Number(elem['HAKSAENGSU_3'][0]),
          specialHigherLearningStudentRate: Number(elem['JINHANGNYUL_3'][0]),
          specialEmploymentStudentNum: Number(elem['CHWIEOPJA_3'][0]),
          specialEtcStudentNum: Number(elem['GITA_3'][0]),

          characterizationGraduationStudentNum: Number(elem['JOREOPJA_4'][0]),
          characterizationHigherLearningStudentNum: Number(elem['HAKSAENGSU_4'][0]),
          characterizationHigherLearningStudentRate: Number(elem['JINHANGNYUL_4'][0]),
          characterizationEmploymentStudentNum: Number(elem['CHWIEOPJA_4'][0]),
          characterizationEtcStudentNum: Number(elem['GITA_4'][0]),

          autonomyGraduationStudentNum: Number(elem['JOREOPJA_5'][0]),
          autonomyHigherLearningStudentNum: Number(elem['HAKSAENGSU_5'][0]),
          autonomyHigherLearningStudentRate: Number(elem['JINHANGNYUL_5'][0]),
          autonomyEmploymentStudentNum: Number(elem['CHWIEOPJA_5'][0]),
          autonomyEtcStudentNum: Number(elem['GITA_5'][0]),
        });
      });
      return graphqlResult;
    },
    getSeoulSchoolStatistics: async (_parent: any, { year }: any) => {
      const convertedResult = await getSeoulSchoolStatistics(year);
      console.log(convertedResult);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi199']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          parentType: elem['GYOYUKGIGWAN'][0],
          subType: elem['GUBUN'][0],
          schoolNum: Number(elem['HAKGYOSU'][0]),
          classNum: Number(elem['HAKGEUPGWASU'][0]),
          classRoomNum: Number(elem['BOTONGGYOSILSU'][0]),
          
          studentNum: Number(elem['GYE_1'][0]),
          studentMaleNum: Number(elem['NAMJA_1'][0]),
          studentFemaleNum: Number(elem['YEOJA_1'][0]),
        
          parentNum: Number(elem['GYE_2'][0]),
          subTeacherNum: Number(elem['SOGYE_1'][0]),
          subTeacheMaleNum: Number(elem['NAMJA_2'][0]),
          subTeacheFemaleNum: Number(elem['YEOJA_2'][0]),
          subEmployeeNum: Number(elem['SOGYE_2'][0]),
          subEmployeeMaleNum: Number(elem['NAMJA_3'][0]),
          subEmployeeFemaleNum: Number(elem['YEOJA_3'][0]),
        
          studentNumPerTeacher: Number(elem['GYOWON1INDANGHAKSAENGSU'][0]),
        });
      });
      return graphqlResult;
    },
    getClassStudentNum: async (_parent: any, { year }: any) => {
      const convertedResult = await getClassStudentNum(year);
      console.log(convertedResult);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi542']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          district: elem['JIYEOK'][0],

          preschoolStudentNum: Number(elem['WONASU'][0]),
          preschoolClassNum: Number(elem['HAKGEUPSU_1'][0]),
          preschoolStudentPerClass: Number(elem['HAKGEUPDANGWONASU'][0]),

          elementarySchoolStudentNum: Number(elem['HAKSAENGSU_1'][0]),
          elementarySchoolClassNum: Number(elem['HAKGEUPSU_2'][0]),
          elementarySchoolStudentPerClass: Number(elem['HAKGEUPDANGHAKSAENGSU_1'][0]),
          
          middleSchoolStudentNum: Number(elem['HAKSAENGSU_2'][0]),
          middleSchoolClassNum: Number(elem['HAKGEUPSU_3'][0]),
          middleSchoolStudentPerClass: Number(elem['HAKGEUPDANGHAKSAENGSU_2'][0]),

          highSchoolStudentNum: Number(elem['HAKSAENGSU_3'][0]),
          highSchoolClassNum: Number(elem['HAKGEUPSU_4'][0]),
          highSchoolStudentPerClass: Number(elem['HAKGEUPDANGHAKSAENGSU_3'][0]),
        });
      });
      return graphqlResult;
    },
    getUniversity: async (_parent: any, { year }: any) => {
      const convertedResult = await getUniversity(year);
      console.log(convertedResult);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi210']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          district: elem['GUBUN'][0],
          universityNum: Number(elem['DAEHAKSU'][0]),
          departmentNum: Number(elem['HAKGWAHAKBUSU'][0]),
          studentNum: Number(elem['GYE_1'][0]),
          studentMaleNum: Number(elem['NAMJA'][0]),
          studentFemaleNum: Number(elem['YEOJA_1'][0]),
          teacherNum: Number(elem['GYE_2'][0]),
          teacherFemaleNum: Number(elem['YEOJA_2'][0]),
          employeeNum: Number(elem['GYE_3'][0]),
          employeeFemaleNum: Number(elem['YEOJA_3'][0]),
          graduateStudentNum: Number(elem['JOREOPJASU'][0]),
          highLearningStudentNum: Number(elem['JINHAKJASU'][0]),
          employeeStudentNum:Number(elem['CHWIEOPJASU'][0]),
          recruitStudentNum: Number(elem['IPDAEJASU'][0]),
          newApplicantNum: Number(elem['IPHAKJIWONJASU'][0]),
          newStudentNum: Number(elem['IPHAKJASU'][0]),
        });
      });
      return graphqlResult;
    },
    getGraduateSchool: async (_parent: any, { year }: any) => {
      const convertedResult = await getGraduateSchool(year);
      console.log(convertedResult);
      const convertedTempResult: any[] = JSON.parse(convertedResult)['octastatapi211']['row'];
      
      const graphqlResult: any[] = [];
      convertedTempResult.forEach(elem => {
        graphqlResult.push({
          period: Number(elem['GIGAN'][0]),
          graduateSchoolNum: Number(elem['DAEHAGWONSU'][0]),

          masterDepartmentNum: Number(elem['SEOKSAGWAJEONG_1'][0]),
          doctorDepartmentNum: Number(elem['BAKSAGWAJEONG_1'][0]),
          
          entranceMasterNum: Number(elem['SEOKSAGWAJEONG_2'][0]),
          entranceDoctorNum: Number(elem['BAKSAGWAJEONG_2'][0]),

          masterNum: Number(elem['GYE_1'][0]),
          masterFemaleNum: Number(elem['YEOJA_1'][0]),
          doctorNum: Number(elem['GYE_2'][0]),
          doctorFemaleNum: Number(elem['YEOJA_2'][0]),

          teacherNum: Number(elem['GYE_3'][0]),
          teacherFemaleNum: Number(elem['YEOJA_3'][0]),
          employeeNum: Number(elem['GYE_4'][0]),
          employeeFemaleNum: Number(elem['YEOJA_4'][0]),

          masterGraduateStudentNum: Number(elem['SEOKSAGWAJEONG_3'][0]),
          doctorGraduateStudentNum: Number(elem['BAKSAGWAJEONG_3'][0]),

          masterEntranceStudentNum: Number(elem['JIWONJA_1'][0]),
          masterEntranceStudentFemaleNum: Number(elem['IPHAKJA_1'][0]),
          doctorEntranceStudentNum: Number(elem['JIWONJA_2'][0]),
          doctorEntranceStudentFemaleNum: Number(elem['IPHAKJA_2'][0]),
        });
      });
      return graphqlResult;
    },
  }
};

export default resolvers;