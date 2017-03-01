function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype.push = function (val) {
	var root = this.root;

	if(!root) {
		this.root = new Node(val);
		return;
	}

	var currentNode = root;
	var newNode = new Node(val);

	while(currentNode) {
		if(val < currentNode.value) {
			if(!currentNode.left) {
				currentNode.left = newNode;
				break;
			} else {
				currentNode = currentNode.left;
			}
		}else {
			if(!currentNode.right) {
				currentNode.right = newNode;
				break;
			} else {
				currentNode = currentNode.right;
			}
		}
	}
}

function height(node) {
	if(!node) { 
		return -1;
	}
	var leftHeight = height(node.left);
	var rightHeight = height(node.right);

	return Math.max(leftHeight, rightHeight) + 1;
}

// function find(node) {
// 	if(node) {
// 		console.log(node.value);
// 		find(node.left);
// 		find(node.right);
// 	}
// }

BinarySearchTree.prototype.find = function(data) {
  	var current = this.root;
  
	  while(current) {
	    if(data === current.value) {
	      return true;
	    }
		    if(data < current.value) {
		      current = current.left;
		    } else {
		      current = current.right;
		    }
	    }
  	return false;
};


var bst = new BinarySearchTree();
bst.push(42);
bst.push(30);
bst.push(12);
bst.push(37);
bst.push(37);
bst.push(100);
bst.push(90);
console.log(bst.find(1));
// console.log(find(bst.root));
console.log(height(bst.root));
console.log(bst);
