import React from "react";
import NewsList from './NewsList';
const RemoteSlides = React.lazy(() => import("app1/Slides"));

const App = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>App 2, Local NewsList</h2>
    <NewsList />
    <React.Suspense fallback="Loading Slides">
      <RemoteSlides />
    </React.Suspense>
  </div>
);

export default App;
