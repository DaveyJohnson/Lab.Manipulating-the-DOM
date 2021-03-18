function walk (node, callback) {
  if(callback(node) === false) return false;
  node = node.firstChild;
  while (node != null) {
    if(walk(node, callback) === false) return false;
    node = node.nextSibling;
  }
}




