// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


function levelWidth(root) {
  const counters = [0];
  const nodeArr = [root, "s"];

  while (nodeArr.length > 1) {
    let node = nodeArr.shift();

    if (node === "s") {
      counters.push(0);
      nodeArr.push("s");
    } else {
      counters[counters.length - 1]++;
      nodeArr.push(...node.children);
    }
  }

  return counters;
}

module.exports = levelWidth;
