// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// 입출력 예
// strings	          n	      return
// [sun, bed, car]	  1	      [car, bed, sun]
// [abce, abcd, cdx]	2	      [abcd, abce, cdx]

function solution(strings, n) {
  // 1. sort 메소드를 사용한다.
  // 2. 소트 메소드에 콜백 함수를 넣어서 배열의 원소의 엔번째들을 비교한다.
  // 3. 콜백 < 0   => a가 먼저 위치하는.
  //    콜백 === 0 => 그냥 배열 순서대로 나옵니다.
  //    콜백 > 0   => b가 먼저 배열 앞부분에 위치한다.

  let result = strings.sort((a, b) => {
    let firstChar = b[n];
    let secondChar = a[n];

    if (firstChar > secondChar) return -1;
    if (firstChar < secondChar) return 1;
    if (firstChar === secondChar) return a.localeCompare(b);
  });
  return result;
}

// 한줄 글 : 생소했던 sort에 대해서 좀 더 찾아 볼 수 있는 기회가 되었고, localeCompare 녀석도 알게되었다PropTypes.
