import "./App.css";
import Messanger from "./component/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./component/context/AccountProvider";
function App() {
  const clientId =
    "381162290677-ari757054b1ijbo7v3ui5hv8eh1gp5fj.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
