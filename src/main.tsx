import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterProvider from './router/index.tsx'
import i18n from "./locale/i18n";
import { I18nextProvider } from 'react-i18next'
import Layout from './layout/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Layout>
          <RouterProvider />
        </Layout>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode >,
)
