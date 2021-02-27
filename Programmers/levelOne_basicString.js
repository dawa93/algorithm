// https://programmers.co.kr/learn/courses/30/lessons/12918

// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

// my solution
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    let NumS = Number(s) - 999;
    if (NumS > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
// 한줄글 : 어려운 문제는 아니지만, 조금 트릭이 있다. 예를들어 테스트 케이스 '111 '를 조심해야한다.
