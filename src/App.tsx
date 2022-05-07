
import { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './app.scss';
import Loading from "./components/loading";
import MenuItem from "./components/menu-item";

import routes from "./routers";
import { getQiankunAppUrl } from "./utils";
import useEventBus from "./utils/eventBus";

function App() {
  const qiankunRouter = getQiankunAppUrl();
  const [loading, setLoading] = useState(false);
  const [event] = useEventBus();
  event.on('qiankun-child-loading', (loading) => setLoading(loading));
  
  return (
    <div className="app">
      <div className="left-menu">
        <div className="left-menu-title">QIANKUN</div>
        <div className="left-menu-body">
          {[...routes, ...qiankunRouter]?.map((item, i) => {
            return (
              <MenuItem key={i} menuText={item.namespace} menuPath={item.path} />
            );
          })}
        </div>
      </div>
      <div className="rigth-qiankun-wrapper">
        <Routes>
          {routes.map((route, key) => {
            return <Route key={key} path={route.path}  element={
              <Suspense>
                <route.component />
              </Suspense>
            } />
          })}
        </Routes>
        <Loading visible={loading}>
          <div id='container'></div>
        </Loading>
      </div>
    </div>
  );
}

export default App;
