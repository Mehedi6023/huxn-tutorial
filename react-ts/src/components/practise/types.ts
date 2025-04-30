type userInfo = {
    name: string;
    email: string
}
type adminInfo = userInfo & {
    id: number;
    role: string;
    lastLogin: Date;
}

export {type userInfo, type adminInfo}