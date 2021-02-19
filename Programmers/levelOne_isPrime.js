//https://programmers.co.kr/learn/courses/30/lessons/12921

// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3

// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

function solution(n) {
  // * 1은 소수가 아니다. 1의 제외
  // 1. 1부터 주어진 숫자 사이의 소수 갯수 찾기
  // 2. 반복문을 사용해서, 1부터 주어진 수의 사이를 다 순회해야 할거 같습니다.
  // 3. 확인하는 숫자(3) 의 제곱근을 찾고, 확인하는 숫자를 이 숫자의 제곱근으로 나눈다.
  // 4. 나누었을때, 나누어지면 떨어지면 소수로 간주.

  let result = 1;
  for (let i = 3; i <= n; i += 2) {
    let sqrt = Math.floor(Math.sqrt(i));

    let isPrime = true;
    for (let j = 3; j <= sqrt; j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result++;
  }
  return result;
}
