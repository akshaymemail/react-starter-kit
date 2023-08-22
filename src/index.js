import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'react-toastify/dist/ReactToastify.css'

const App = lazy(() => import('./App'))

// create container where your app will be loaded
const container = document.getElementById('root')

// create root
const root = createRoot(container)

// render your app
root.render(
  <Provider store={store}>
    <Suspense fallback={<p>...</p>}>
      <App />
    </Suspense>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
