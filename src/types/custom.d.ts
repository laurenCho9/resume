// 타입스크립트 마이그레이션 하면서 지정해준 타입(세팅을 그냥 CRA로 했다 바꿔서)
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
