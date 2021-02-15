// treeDFS
// 문제
// 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

// 입력
// 인자 1 : node
// 'value', 'children' 속성을 갖는 객체 (Node)
// 'node.value'는 number 타입
// 'node.children'은 Node를 요소로 갖는 배열

// 출력
// 배열을 리턴해야 합니다.

// 주의사항
// 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.

// 입출력 예시
// let root = new Node(1);
// let rootChild1 = root.addChild(new Node(2));
// let rootChild2 = root.addChild(new Node(3));
// let leaf1 = rootChild1.addChild(new Node(4));
// let leaf2 = rootChild1.addChild(new Node(5));
// let output = dfs(root);
// console.log(output); // --> [1, 2, 4, 5, 3]

// leaf1.addChild(new Node(6));
// rootChild2.addChild(new Node(7));
// output = dfs(root);
// console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]

// my solution
let dfs = function (root) {
  // TODO: 여기에 코드를 작성합니다.
  // 1. 노드의 밸류를 찾아서, 배열에 넣는다.
  // 2. 이 노드의 자식을 가지고 있으면, 자식을 가지고 1번으로 돌아간다.
  // 3. 또 다시 루트 노드의 자식을 검사한다  => 재귀

  let result = [];

  let recursive = (node) => {
    // 노드의 밸류를 먼저 result value에 넣는다.
    result.push(node.value);
    //base case
    if (node.children.length === 0) {
      return result;
    } else {
      // 노드가 자식들을 가지고 있으면, 그 자식들 하나 하나를 검사한다.
      for (let child of node.children) {
        recursive(child);
      }
    }
  };
  recursive(root);
  return result;
};

// 한줄글 : 오랜만에 DFS를 해서 헷갈리는부분도 있었지만, 항상 재귀로 풀면 기분이 좋다.

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

// reference
let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let values = [node.value];

  node.children.forEach((n) => {
    values = values.concat(dfs(n));
  });

  return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
