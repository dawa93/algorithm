// binarySearch
// 문제
// 오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// rotated[i]는 정수
// 인자 2 : target
// number 타입의 정수

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// 이진탐색 알고리즘(O(logN))을 사용해야 합니다.
// 단순한 배열 순회(O(N))로는 통과할 수 없는 테스트 케이스가 존재합니다.
// target이 없는 경우, -1을 리턴해야 합니다.

// 입출력 예시
// let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
// console.log(output); // --> 2

// output = binarySearch([4, 5, 6, 9], 100);
// console.log(output); // --> -1

//
//
//
//
//
//my solution

const binarySearch = function (arr, target) {
  let result = -1;

  let recursive = (halfArr) => {
    let half = Math.floor(halfArr.length / 2);

    if (halfArr[half] === target) {
      result = arr.indexOf(half);
      return;
    }
    if (target > halfArr[half]) {
      let newArr = halfArr.slice(half + 1, halfArr.length);
      recursive(newArr);
    } else if (target < halfArr[half]) {
      let newArr = halfArr.slice(0, half);
      recursive(newArr);
    }
  };
  recursive(arr);
  return result;
};

// 한줄글 : 생각보다 쉬운 바이너리 트리였다. 그러나 슬라이스를 써서 효율적이지는 못했다. 그래서 다른 하나를 더 준비했다. 이 부분은 레퍼런스를 참고하여 나만의 로직이다PropTypes.any,
//
//
//
//
//
// my second solution (more efficient)
const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let result = -1;
  let left = 0;
  let right = arr.length - 1;
  let noTarget = [];

  let recursive = (arr) => {
    let rootIndex = Math.floor((left + right) / 2);
    let root = arr[rootIndex];
    if (target === root) {
      result = rootIndex;
      return;
    } else {
      if (noTarget.includes(root)) {
        return;
      }
    }

    if (target < root) {
      right = rootIndex - 1;
      noTarget.push(root);
      recursive(arr);
    } else if (target > root) {
      left = rootIndex + 1;
      noTarget.push(root);
      recursive(arr);
    }
  };
  recursive(arr);
  return result;
};
//
//
//
//
//
// reference
const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
