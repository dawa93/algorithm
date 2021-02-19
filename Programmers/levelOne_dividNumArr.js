// https://programmers.co.kr/learn/courses/30/lessons/12910https://programmers.co.kr/learn/courses/30/lessons/12910

// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
//      arr	         divisor	  return
// [5, 9, 7, 10]	      5	      [5, 10]
// [2, 36, 1, 3]	      1	      [1, 2, 3, 36]
// [3,2,6]	            10	    [-1]

// My solution
function solution(arr, divisor) {
  // 1. 반복문을 사용해서, 엘리먼트 하나 하나를 다 나누어 봐야한다.
  // 2. 나누었을때, 아무것도 해당되지않으면 -1을 리턴하고
  // 3. 나누어지는것이 있으면 원소를 따로 배열에 담아서 리턴.
  if (divisor === 1) {
    return arr.sort((a, b) => a - b);
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }

  if (result.length === 0) {
    result.push(-1);
  }

  return result.sort((a, b) => a - b);
}
