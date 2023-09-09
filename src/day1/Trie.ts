type TrieNode = {
  isWord: boolean;
  children: Map<string, TrieNode>;
};

export default class Trie {
  private root: TrieNode;

  constructor() {
    this.root = {
      isWord: false,
      children: new Map(),
    };
  }

  insert(item: string): void {
    let node = this.root;
    for (let i = 0; i < item.length; i++) {
      const char = item[i];
      if (!node.children.has(char)) {
        node.children.set(char, {
          isWord: false,
          children: new Map(),
        });
      }
      node = node.children.get(char)!;
    }
    node.isWord = true;
  }

  delete(item: string): void {}
  find(partial: string): string[] {
    return [];
  }
}
