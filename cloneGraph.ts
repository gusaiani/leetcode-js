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

interface GraphNode {
  val: number;
  neighbors: GraphNode[];
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null;

  const map = new Map<GraphNode, GraphNode>();

  const dfs = (currNode: GraphNode): GraphNode => {
    const existing = map.get(currNode);
    if (existing) return existing;

    const copy: GraphNode = { val: currNode.val, neighbors: [] };
    map.set(currNode, copy);

    for (const neighbor of currNode.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };

  return dfs(node);
}

export type { GraphNode };
export { cloneGraph };
