import User from "./components/User";
import Ch from "./components/Ch";
import UserInfo from "./components/practise/UserInfo";
import AdminInfo from "./components/practise/AdminInfo";
import { userInfo, adminInfo } from "./components/practise/types";
import Form from "./components/form/Form";
import FocusInput from "./components/practise/FocusInput";
const App = () => {
  const user: userInfo = {
    name: 'ovi',
    email: 'ovi@gmail.com'
  }
  const admin: adminInfo = {
    id: 2321,
    name: 'jane',
    email: 'jane@gmail.com',
    role: 'admin',
    lastLogin: new Date()
  }
  return (
    <div>
      <User name="alex" age={24} isStudent={true} />
      <Ch>
        <h3>Hello i am children of Ch</h3>
      </Ch>
      <UserInfo user = {user} />
      <AdminInfo admin = {admin} />
      <Form />
      <FocusInput />
    </div>
  );
};

export default App;
