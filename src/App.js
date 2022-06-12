import PostsLists from "./features/posts/PostsLists";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import UserList from "./features/users/UserList";
import UserPage from "./features/users/UserPage";

import { Routes, Route, Navigate } from "react-router-dom";
import EditPostForm from "./features/posts/EditPostForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsLists />} />
        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>
        <Route path='user'>
          <Route index element={<UserList />}/>
          <Route path=':userId' element={<UserPage />}/>
        </Route>

        <Route path="*" element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export default App;
