# weblab6

This project fetches posts from JSONPlaceholder and lists them with title filtering.

## File Organization

- `src/postsApi.js`: Fetches posts from the API using native fetch.
- `src/postsReducer.js`: Handles async state transitions for posts, loading, and error.
- `src/Post.jsx`: Presentational component for rendering a single post item.
- `src/PostList.jsx`: Renders the list of posts with unique keys.
- `src/FilterForm.jsx`: Controlled text input for the filter keyword.
- `src/App.jsx`: Main container managing side effects, cleanup, and derived state filtering.

## Challenges Faced

Setting up the effect cleanup with a boolean flag was important to make sure no state update runs if the component unmounts. Another challenge was remembering not to store filtered posts in state, but deriving them directly during render made the logic simpler and avoided sync bugs.
