class HashTable {
  constructor(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }
  hash(key) {
    const total = key
      .split("")
      .reduce((init, curr) => init + curr.charCodeAt(0), 0);
    const bucket = total % this.numBuckets;
    return bucket;
  }
  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else {
      let currNode = this.buckets[index];
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = new HashNode(key, value);
    }
  }
}

class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}
