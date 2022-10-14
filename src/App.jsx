import React from 'react';
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from './routes';

import Layout from './layouts/Layout';
import './assets/styles/auth.scss'
import './assets/styles/users.scss'
import './assets/styles/table.scss'


const App = () => {
  const isProtected = true;
  const notProtected = false;

  const token = localStorage.getItem("access_token") || null


  return (
    <div className='App'>
        <Routes>
        {authProtectedRoutes.map((route, index) => {
          const { path, component: Component, title } = route;
          return <Route key={index} path={path} element={(isProtected && !token) ? <Navigate to="/login" /> : (
              <Layout title={title}>
                <Component />
              </Layout>
            )} />
        })}

        {publicRoutes.map((route, index) => {
          const { path, component: Component } = route;
          return <Route key={index} path={path} element={(notProtected && !token) ? <Navigate to="/login" /> : <Component />} />
        })}
        </Routes>
    </div>
  );
}

export default App;
