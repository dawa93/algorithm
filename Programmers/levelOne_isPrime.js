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
