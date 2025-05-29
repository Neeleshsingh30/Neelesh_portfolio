// export interface Skill {
//   id: number;
//   name: string;
//   level: number;
//   category: 'languages' | '  ml-tools' | 'cloud' | 'erp' | ' Data - tools';
// }

// const skills: Skill[] = [
//   // Languages
//   { id: 1, name: 'Python', level: 85, category: 'languages' },
//   { id: 2, name: 'R language', level: 60, category: 'languages' },
//   { id: 3, name: 'SQL', level: 90, category: 'languages' },
//   { id: 4, name: 'Scala', level: 80, category: 'languages' },
//   { id: 5, name: 'C++', level: 75, category: 'languages' },
  
//   // ML Tools and Data Tools
//   { id: 6, name: 'TensorFlow', level: 90, category: 'ml-tools' },
//   { id: 7, name: 'PyTorch', level: 85, category: 'ml-tools' },
//   { id: 8, name: 'Scikit-Learn', level: 92, category: 'ml-tools' },
//   { id: 9, name: 'Pandas', level: 90, category: 'ml-tools' },
//   { id: 10, name: 'OpenCV', level: 88, category: 'ml-tools '},

  
//   // Cloud
//   { id: 11, name: 'AWS', level: 85, category: 'cloud' },
//   { id: 12, name: 'Azure', level: 90, category: 'cloud' },
//   { id: 13, name: 'GCP', level: 80, category: 'cloud' },
//   { id: 14, name: 'Docker', level: 45, category: 'cloud' },
//   { id: 15, name: 'Kubernetes', level: 40, category: 'cloud' },
  
//   // ERP
//   { id: 16, name: 'Oracle Fusion', level: 60, category: 'erp' },
//   // { id: 17, name: 'Oracle APEX', level: 90, category: 'erp' },
//   { id: 17, name: 'PL/SQL', level: 70, category: 'erp' },
//   { id: 18, name: 'Oracle BI Publisher', level: 40, category: 'erp' },
//   // { id: 20, name: 'OTBI', level: 85, category: 'erp' },

//   // Data tools
//   { id: 19, name: 'ETL/ELT tools Hadoop', level: 50, category: 'Data - tools' },
//   { id: 20, name: 'Hadoop', level: 50, category: 'Data - tools' },
//   { id: 21, name: 'Apache Spark', level: 50, category: 'Data - tools' },
//   { id: 22, name: 'Apache Airflow', level: 60, category: 'Data - tools' },
//   // { id: 12, name: 'Hadoop', level: 50, category: 'ml-tools' },
 
// ];

// export default skills;

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'languages' | 'ml-tools' | 'cloud' | 'erp' | 'Data-tools';
}

const skills: Skill[] = [
  // Languages
  { id: 1, name: 'Python', level: 85, category: 'languages' },
  { id: 2, name: 'R language', level: 60, category: 'languages' },
  { id: 3, name: 'SQL', level: 90, category: 'languages' },
  { id: 4, name: 'Scala', level: 80, category: 'languages' },
  { id: 5, name: 'C++', level: 75, category: 'languages' },

  // ML Tools
  { id: 6, name: 'TensorFlow', level: 90, category: 'ml-tools' },
  { id: 7, name: 'PyTorch', level: 85, category: 'ml-tools' },
  { id: 8, name: 'Scikit-Learn', level: 92, category: 'ml-tools' },
  { id: 9, name: 'Pandas', level: 90, category: 'ml-tools' },
  { id: 10, name: 'OpenCV', level: 88, category: 'ml-tools' },

  // Cloud
  { id: 11, name: 'AWS', level: 85, category: 'cloud' },
  { id: 12, name: 'Azure', level: 90, category: 'cloud' },
  { id: 13, name: 'GCP', level: 80, category: 'cloud' },
  { id: 14, name: 'Docker', level: 45, category: 'cloud' },
  { id: 15, name: 'Kubernetes', level: 40, category: 'cloud' },

  // ERP
  { id: 16, name: 'Oracle Fusion', level: 60, category: 'erp' },
  { id: 17, name: 'PL/SQL', level: 70, category: 'erp' },
  { id: 18, name: 'Oracle BI Publisher', level: 40, category: 'erp' },

  // Data Tools
  { id: 19, name: 'Excel', level: 85, category: 'Data-tools' },
  { id: 20, name: 'Hadoop', level: 50, category: 'Data-tools' },
  { id: 21, name: 'Apache Spark', level: 50, category: 'Data-tools' },
  { id: 22, name: 'Apache Airflow', level: 60, category: 'Data-tools' },
  { id: 19, name: 'ETL/ELT tools', level: 50, category: 'Data-tools' },
];

export default skills;

