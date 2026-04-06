/**
 * LeetCode 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 *
 * Given a reference of a node in a connected undirected graph, return a deep
 * copy (clone) of the graph.
 *
 * Each node in the graph contains a value (`val`) and a list (`neighbors`) of
 * its neighbors.
 */

/**
 * @param {{ val: number, neighbors: Array<object> } | null} node
 * @return {{ val: number, neighbors: Array<object> } | null}
 */
function cloneGraph(node) {
  if (!node) return null;

  const map = new Map();

  const dfs = (currNode) => {
    if (map.has(currNode)) return map.get(currNode);

    const copy = { val: currNode.val, neighbors: [] };
    map.set(currNode, copy);

    for (const neighbor of currNode.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };

  return dfs(node);
}

module.exports = { cloneGraph };
