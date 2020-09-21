function isBalanced(tree) {
  // declare a variable baseDepth - undefined
  let baseDepth;

  function checkNextNode(node, currentDepth) {
    // when you reach a node with no children and there is no baseDepth
    if (!node.left && !node.right && !baseDepth) {
      // set the base depth equal to that node
      baseDepth = currentDepth;
    }

    // check the node for children
    if (node.left) {
      // no
      currentDepth++; //
      checkNextNode(node.left, currentDepth); //
    } else {
      // there are no children so you are a leaf node
      if (currentDepth > baseDepth + 1 || currentDepth < baseDepth - 1) {
        return false;
      }
      }
    }

    if (node.right) {
      // yes
      currentDepth++; // currentDepth = 2
      checkNextNode(node.right, currentDepth); // checkNextNode(node6, 2)
    } else {
      if (currentDepth > baseDepth + 1 || currentDepth < baseDepth - 1) {
        return false;
      }
    }

  }

  checkNextNode(tree, 0); // {value: 12, left: 5, right: 7}

  // return true
  return true;
}

// the base case is there is no baseDepth defined and it is a leafnode
function isBalanced(treeRoot) {
  // if the tree has no nodes, it is superbalanced
  if (!treeRoot) {
    return true;
  }

  // declare a variable depths to keep track of depths
  const depths = [];

  // store paris of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  // check all nodes using depth-first search
  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePaire[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      // reached a leaf
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
      }

      if (depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1] > 1)) {
        return false;
      }
    } else {
      // the node isn't a leaf
      if (node.left) {
        nodes.push([node.left, depth + 1])
      }
      if (node.right) {
        nodes.push([node.right, depth + 1])
      }
    }
  }
  return true;

}