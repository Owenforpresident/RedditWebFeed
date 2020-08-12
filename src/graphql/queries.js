
export const getBookmarks = /* GraphQL */ `
  query GetBookmarks($id: ID!) {
    getBookmarks(id: $id) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBookmarkss = /* GraphQL */ `
  query ListBookmarkss(
    $filter: ModelBookmarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
