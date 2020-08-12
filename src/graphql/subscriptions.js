
export const onCreateBookmarks = /* GraphQL */ `
  subscription OnCreateBookmarks($owner: String!) {
    onCreateBookmarks(owner: $owner) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBookmarks = /* GraphQL */ `
  subscription OnUpdateBookmarks($owner: String!) {
    onUpdateBookmarks(owner: $owner) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBookmarks = /* GraphQL */ `
  subscription OnDeleteBookmarks($owner: String!) {
    onDeleteBookmarks(owner: $owner) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
