import Router from './router/Router'
import { BrowserRouter as AppRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './i18n'

const App = () => (
  <AppRouter>
    <Router />
    <ToastContainer />
  </AppRouter>
)

export default App
