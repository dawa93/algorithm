// https://programmers.co.kr/learn/courses/30/lessons/12926

// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"a

// my solution
function solution(s, n) {
  var answer = '';
  if (n === 0) {
    return s;
  } else if (n !== 0) {
    for (let i = 0; i < s.length; i++) {
      let ascNum = s[i].charCodeAt();
      // a == 97  ,  z= 122
      // A = 65, Z =90
      if (s[i] === ' ') {
        answer += s[i];
      } else if (ascNum + n > 122) {
        let nextNum = ascNum - 26 + n;
        answer += String.fromCharCode(nextNum);
      } else if (ascNum >= 65 && ascNum <= 90) {
        if (ascNum + n > 90) {
          let nextNum = ascNum - 26 + n;
          answer += String.fromCharCode(nextNum);
        } else if (ascNum + n <= 90) {
          let nextNum = ascNum + n;
          answer += String.fromCharCode(nextNum);
        }
      } else {
        let nextNum = ascNum + n;
        answer += String.fromCharCode(nextNum);
      }
    }
  }
  return answer;
}

// 한줄글 : 아스키 코드 너무 싫다 ㅠㅠ. 할때 마다 대문자가 문제.... 귀찮더라도 조건을 많이 넣으면 쉽다 !
