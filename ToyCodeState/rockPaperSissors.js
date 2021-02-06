// rockPaperScissors
// 문제

// 가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임이다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.

// 출력

// 2차원 배열(arr[i])을 리턴해야 합니다.
// arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
// arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
// arr[i].length는 3

// 주의사항

// 최종적으로 리턴되는 배열의 순서는 가중치 적용 정렬(Weighted Sort)을 따릅니다.
// 중요도는 'rock', 'paper', 'scissors' 순으로 높습니다.
// 쉽게 생각해 올림픽 순위 결정 방식을 참고하면 됩니다.
// 금메달('rock')이 은메달('paper')보다 우선하고, 은메달('paper')이 동메달('scissors')보다 우선합니다.

// let output = rockPaperScissors();

// console.log(output);
//
//     [
//       ["rock", "rock", "rock"],
//       ["rock", "rock", "paper"],
//       ["rock", "rock", "scissors"],
//       ["rock", "paper", "rock"],
//       // ...etc ...
//     ]
//

// Advanced

// 가위바위보 게임의 수를 나타내는 양의 정수 rounds가 주어질 경우, 해당 rounds 동안 선택할 수 있는 모든 경우의 수를 리턴하도록 함수를 작성해 보세요.
// let output = rockPaperScissors(5);

// console.log(output);

// [
//   ["rock", "rock", "rock", "rock", "rock"],
//   ["rock", "rock", , "rock", "rock", "paper"],
//   ["rock", "rock", , "rock", "rock", "scissors"],
//   ["rock", "rock", "rock", "paper", "rock"],
//   ["rock", "rock", "rock", "paper", "paper"],
//   ["rock", "rock", "rock", "paper", "scissors"],
//   ["rock", "rock", "rock", "scissors", "rock"],
//   // ...etc ...
// ]

// my solution
const rockPaperScissors = function (rounds) {
  // TODO: Your code here!
  if (rounds === undefined) rounds = 3;

  let result = [];
  const options = ['rock', 'paper', 'scissors'];

  let recursion = (leftRounds, havePlayed) => {
    // base case
    if (leftRounds === 0) {
      result.push(havePlayed);
      return;
    }

    for (let i = 0; i < options.length; i++) {
      let currentOption = options[i];
      recursion(leftRounds - 1, havePlayed.concat(currentOption));
    }
  };
  recursion(rounds, []);
  return result;
};

// 한줄글 : 일단 시간을 투자했을때, 결과를 얻을 수 없어서 레퍼런스 코드를 보고 이해하는데 주력했다.
// 이해를 한 후에 다시 써봤을때, 결과를 얻을 수 있었다. 재귀는 아직 어렵다.

// reference

// const rockPaperScissors = function (rounds) {
//   rounds = rounds || 3;
//   const rps = ['rock', 'paper', 'scissors'];

//   const outcomes = [];
//   let permutate = function (roundsToGo, playedSoFar) {
//     if (roundsToGo === 0) {
//       outcomes.push(playedSoFar);
//       return;
//     }

//     for (let i = 0; i < rps.length; i++) {
//       let currentPlay = rps[i];
//       permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
//     }
//   };

//   permutate(rounds, []);

//   return outcomes;
// };

// someone's code

// const rockPaperScissors = function (number) {
//   // (test 충족 위해서) argument 입력 없었을 때, number에 3 할당
//   if (number === undefined) number = 3;

//   let op1 = 'rock', op2 = 'paper', op3 = 'scissors';
//   let returnArr = [[]];
//   let tempArr = [];  // 값 임시 보관용 변수
//   while (number > 0) {
//     for (let el of returnArr) {
//       tempArr.push([...el, op1]);
//       tempArr.push([...el, op2]);
//       tempArr.push([...el, op3]);
//     }
//     // returnArr에 tempArr 값을 복사하고, tempArr은 초기화 및 number --1;
//     returnArr = [...tempArr];
//     tempArr = [];
//     number--;
//   }
//   return returnArr;
// };
