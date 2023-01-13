let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함

const nameTag1 = baby1 ?? '1번 아기';
const nameTag2 = baby2 ?? '2번 아기';

console.log(nameTag1, nameTag2);