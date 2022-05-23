let listLeft = [1, 2, 3, 4, 5, 6];
let listRight = [];

const removerItemList = (vetorA, vetorB) => {
  return vetorA.filter((value) => vetorB.indexOf(value) === -1);
};

const checkItemLeft = (value) => {
  listRight = listRight.concat(value);
  const retorno = removerItemList(listLeft, listRight);
  listLeft = retorno;
};

const checkItemRight = (value) => {
  listLeft = listLeft.concat(value);
  const retorno = removerItemList(listRight, listLeft);
  listRight = retorno;
};

const checkItemLeftAll = () => {
  listRight = listLeft;
  listLeft = [];
};

const checkItemRightAll = () => {
  listLeft = listRight;
  listRight = [];
};

checkItemRight([4, 5]);
// checkItemRight(4);
// checkItemLeft(1);
// checkItemLeftAll();
// checkItemRightAll();

console.log(listLeft);
console.log(listRight);
