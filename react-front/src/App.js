import React from 'react';
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>DNS流量监控平台</h1>
      </header>
      <main className="app-main">
        <AppRoutes />
      </main>
      <footer className="app-footer">
        <p>© 2023 DNS监控系统 版本 {process.env.REACT_APP_VERSION || '1.0.0'}</p>
      </footer>
    </div>
  );
};

export default App;