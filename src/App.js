import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/login/Login.js'
import Dashboard from "./components/Dashboard/Dashboard.js"

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code={code}/>:<Login />
}
export default App;
