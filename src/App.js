import './App.css';
import Messanger from './component/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const clientId="381162290677-ari757054b1ijbo7v3ui5hv8eh1gp5fj.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger/>
    </GoogleOAuthProvider>
  );
}

export default App;
