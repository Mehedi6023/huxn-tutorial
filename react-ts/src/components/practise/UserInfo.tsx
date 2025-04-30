
import { userInfo } from './types'
type userInfoProp = {
  user: userInfo
}
const UserInfo = ({user}: userInfoProp) => {
  return (
    <div>
        <h1>{user.name}</h1>
    </div>
  )
}

export default UserInfo