// isSubsetOf
// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열
// base.length는 100 이하
// 인자 2 : sample
// number 타입을 요소로 갖는 임의의 배열
// sample.length는 100 이하

// 출력
// boolean 타입을 리턴해야 합니다.

// 주의사항
// base, sample 내에 중복되는 요소는 없다고 가정합니다.

// 입출력 예시
// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true

// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// my solution
const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  let newBase = base.sort((a, b) => a - b);
  let newSample = sample.sort((a, b) => a - b);
  //

  let isSame = 0;
  for (let i = 0; i < newBase.length; i++) {
    for (let j = 0; j < newSample.length; j++) {
      if (newBase[i] === newSample[j]) {
        isSame++;
        i++;
      }
    }
  }
  if (isSame === newSample.length) {
    return true;
  } else {
    return false;
  }
};

// 한줄글 : 이중 포문을 써서 하나만 쓰느것으로 시도해봤으나, 일단 해답은 찾지 못했다. 그래도 시간복잡도는 O^2
// 은 아닌거 같다(최악의 경우에는 O^2인거 같지만). 이유는 샘플을 찾을경우 아이에 +1을 해주기 때문이다.

// reference
const isSubsetOf = function (base, sample) {
  // naive solution: O(M * N)
  // return sample.every((item) => base.includes(item));

  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};
