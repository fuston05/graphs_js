// Simple graph implementation

class Graph{
  // Represent a graph as a dictionary of vertices mapping labels to edges.


  // **** METHODS ****
  // *****************

  // addVertex
    // Add a vertex to the graph.
  
  //  addEdge
    // Add a directed edge to the graph.
  
  // getNeighbors
    // Get all neighbors (edges) of a vertex.
  
  // BFT
    // Print each vertex in breadth-first order beginning from starting_vertex.
  
  // DFT
    // Print each vertex in depth-first order beginning from starting_vertex.

  // DFT_RECURSIVE
    // Print each vertex in depth-first order beginning from starting_vertex.
    // This should be done using recursion.
  
  // BFS
    // Return a list containing the shortest path from starting_vertex to destination_vertex in breath-first order.
  
  // DFS
    // Return a list containing a path from starting_vertex to destination_vertex in depth-first order.
  
  // DFS RECURSIVE
    //  Return a list containing a path from starting_vertex to destination_vertex in depth-first order.
    //  This should be done using recursion.
  
  
  
  /**
   * graph = Graph()  # Instantiate your graph
    # https://github.com/LambdaSchool/Graphs/blob/master/objectives/breadth-first-search/img/bfs-visit-order.png
    graph.add_vertex(1)
    graph.add_vertex(2)
    graph.add_vertex(3)
    graph.add_vertex(4)
    graph.add_vertex(5)
    graph.add_vertex(6)
    graph.add_vertex(7)
    graph.add_edge(5, 3)
    graph.add_edge(6, 3)
    graph.add_edge(7, 1)
    graph.add_edge(4, 7)
    graph.add_edge(1, 2)
    graph.add_edge(7, 6)
    graph.add_edge(2, 4)
    graph.add_edge(3, 5)
    graph.add_edge(2, 3)
    graph.add_edge(4, 6)

    '''
    Should print:
        {1: {2}, 2: {3, 4}, 3: {5}, 4: {6, 7}, 5: {3}, 6: {3}, 7: {1, 6}}
    '''
    print('graph verts:')
    print(graph.vertices)
    print('')
    '''
    Valid BFT paths:
        1, 2, 3, 4, 5, 6, 7
        1, 2, 3, 4, 5, 7, 6
        1, 2, 3, 4, 6, 7, 5
        1, 2, 3, 4, 6, 5, 7
        1, 2, 3, 4, 7, 6, 5
        1, 2, 3, 4, 7, 5, 6
        1, 2, 4, 3, 5, 6, 7
        1, 2, 4, 3, 5, 7, 6
        1, 2, 4, 3, 6, 7, 5
        1, 2, 4, 3, 6, 5, 7
        1, 2, 4, 3, 7, 6, 5
        1, 2, 4, 3, 7, 5, 6
    '''
    print('bft:')
    graph.bft(1)
    print('')
    '''
    Valid DFT paths:
        1, 2, 3, 5, 4, 6, 7
        1, 2, 3, 5, 4, 7, 6
        1, 2, 4, 7, 6, 3, 5
        1, 2, 4, 6, 3, 5, 7
    '''
    print('dft:')
    graph.dft(1)
    print('')

    print('dft recursive:')
    graph.dft_recursive(1)
    print('')

    '''
    Valid BFS path:
        [1, 2, 4, 6]
    '''
    print('bfs:')
    print('bfs: ', graph.bfs(1, 6))
    print('')
    '''
    Valid DFS paths:
        [1, 2, 4, 6]
        [1, 2, 4, 7, 6]
    '''
    print('DFS', graph.dfs(1, 6))
    print('')

    print('DFS_RECUR:', graph.dfs_recursive(1, 6))
   */
}
