
export const createBookmarks = /* GraphQL */ `
  mutation CreateBookmarks(
    $input: CreateBookmarksInput!
    $condition: ModelBookmarksConditionInput
  ) {
    createBookmarks(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBookmarks = /* GraphQL */ `
  mutation UpdateBookmarks(
    $input: UpdateBookmarksInput!
    $condition: ModelBookmarksConditionInput
  ) {
    updateBookmarks(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBookmarks = /* GraphQL */ `
  mutation DeleteBookmarks(
    $input: DeleteBookmarksInput!
    $condition: ModelBookmarksConditionInput
  ) {
    deleteBookmarks(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
