export type TExperience = {
  title1: string;
  title2: string;
  date: string;
  content1: string;
  content2?: string;
  content3?: string;
  portfolio?: string;
  portfolioContent1?: { id: string; name: string };
  portfolioContent2?: { id: string; name: string };
  subTitle?: string;
  projects?: {
    projectNO: number;
    projectName: string;
    projectContribution?: string;
    projectOutput?: string;
    projectDescription?: string;
    projectStack?: string;
  }[];
  projectEtc: string;
};

export type TEducation = {
  title1: string;
  tag: string[];
  date: string;
  content: string;
};

export type TSkill = {
  title1: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
};

export type TInstitute = {
  title1: string;
  date: string;
  content: string;
};
