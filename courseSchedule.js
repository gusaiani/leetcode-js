/**
 * LeetCode 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/description/
 *
 * There are a total of numCourses courses you have to take, labeled from 0
 * to numCourses - 1. You are given an array prerequisites where
 * prerequisites[i] = [ai, bi] indicates that you must take course bi first
 * if you want to take course ai.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // 1. Initialize the adjacency list and in-degree array
  const adjacencyList = Array.from({ length: numCourses }, () => []);
  const inDegrees = new Array(numCourses).fill(0);

  // 2. Build the graph
  // Each pair is [course, prerequisite]
  for (const [course, prerequisite] of prerequisites) {
    adjacencyList[prerequisite].push(course);
    inDegrees[course]++;
  }

  // 3. Add all courses with no prerequisites (in-degree of 0) to the queue
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }

  // 4. Process the queue (BFS)
  let completedCoursesCount = 0;

  while (queue.length > 0) {
    const currentCourse = queue.shift();
    completedCoursesCount++;

    // Get all courses that depend on the currentCourse
    const neighboringCourses = adjacencyList[currentCourse];

    for (const nextCourse of neighboringCourses) {
      // Since currentCourse is finished, nextCourse has one less prerequisite
      inDegrees[nextCourse]--;

      // If all prerequisites for nextCourse are met, add to queue
      if (inDegrees[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  // 5. If we completed all courses, there was no cycle
  return completedCoursesCount === numCourses;
}

module.exports = { canFinish };
