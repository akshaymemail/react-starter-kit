import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'react-toastify/dist/ReactToastify.css'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<p>...</p>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
