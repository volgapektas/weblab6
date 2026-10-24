import { useReducer, useEffect, useState } from "react";
import { fetchPosts } from "./postsApi";
import { postsReducer, initialState } from "./postsReducer";
import PostList from "./PostList";
import FilterForm from "./FilterForm";

export default function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts();
        if (!ignore) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (err) {
        if (!ignore) {
          dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
      }
    }

    loadPosts();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        fontFamily: "sans-serif",
        padding: "0 10px",
      }}
    >
      <h2>Posts Feed</h2>

      <FilterForm searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {state.loading && <p>Loading posts...</p>}

      {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}

      {!state.loading && !state.error && filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}

      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}
