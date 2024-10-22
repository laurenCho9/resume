export type TPortfolio = {
  title: string; // 프로젝트 제목
  deploy: string; // 배포된 프로젝트 링크
  github?: string; // 선택적인 GitHub 링크 (있을 경우만 표시)
  blog?: string; // 선택적인 블로그 링크 (있을 경우만 표시)
  technologies: string; // 사용된 기술 스택
  description: string; // 프로젝트 설명
  thumbnail: string; // 프로젝트 썸네일 이미지 경로
  implement?: string; // 프로젝트 구현 기능
  isReversed?: boolean; // 레이아웃을 반전시키기 위한 prop
};
