
import  UsersList from'./components/UsersList';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
    <UserContextProvider>
        <UsersList/>
    </UserContextProvider>
       </div>
      </div>
    </div>
  );
}

export default App;
