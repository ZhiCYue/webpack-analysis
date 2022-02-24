import React from "react";
import Slides from './Slides';
// 引入项目 B 的新闻组件
const RemoteNewsList = React.lazy(() => import("app2/NewsList"));

const App = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>App1, Local Slides</h2>
    <Slides />
    <React.Suspense fallback="Loading Slides">
      <RemoteNewsList />
    </React.Suspense>
  </div>
);

export default App;
