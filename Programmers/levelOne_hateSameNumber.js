//https://programmers.co.kr/learn/courses/30/lessons/12906

// 같은 숫자는 싫어
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// 입출력 예
//      arr	          answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	    [4,3]

// My solution
function solution(arr) {
  // 1. 결과값을 담을 빈배열을 선언한다.(let result = [])
  // 2. 반목문을 사용해서 배열의 원소 하나를 체크한다.
  // 3. 조건문을 사용해서 조건이 맞으면, 1번에서 만든 빈배열에 담는다.
  // 4.   - 조건 : 1번에서 선언한 배열의 길이가 0이면, 무조건 push 메소드를사용해서 원소를 넣는다.
  //      - 조건 : result의 길이 -1 번째 인덱스와 arr[i =1] 비교했을때, 둘의 값이 같지 않으면 푸시 메소드를 사용하겠습니다. 같을 경우에는 그냥 무시하는 로직입니다.

  let result = []; //1
  if (result.length === 0) result.push(arr[0]); // 4-1

  for (let i = 1; i < arr.length; i++) {
    if (result[result.length - 1] === arr[i]) {
      continue;
    } else if (result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}
