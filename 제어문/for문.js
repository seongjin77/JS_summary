// for (
//   let x = true, y = 0, z = 0;
//   y * z < 10;
//   x = !x, x ? y++ : z++
// ) {
//   console.log(y, z);
// }

// 변수가 한번에 2개 이상 사용할 수 있다. 이 경우에 가독성을 고려해 병렬로 써주는 것이 좋다.

// for const k of arr 문을 사용하면 원본 배열을 보존할 수 있다.

// continue - 한 루프를 건너뜀
// break - 블록을 종료하고 빠져나옴

// 짧게 짠 수정 코드
let x = 0;
while (x < 14) {
  if (x++ % 2 === 0) continue;
  console.log('체크',x);
  if (x > 8) break;
  console.log(x - 1);
}
