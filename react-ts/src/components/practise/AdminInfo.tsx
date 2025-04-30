import { adminInfo } from "./types"

type adminProp = {
  admin: adminInfo
}
const AdminInfo = ({admin}: adminProp) => {
  return (
    <div>
      <h1>User: Admin: {admin.name}</h1>
      <p>Date: {admin.lastLogin.toDateString()}</p>
    </div>
  )
}

export default AdminInfo