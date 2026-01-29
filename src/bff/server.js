import { authorize, register, logout, fetchRoles, fetchUsers, updateUserRole } from "./operations"

export const server = {
    authorize,
    register,
    logout,
    fetchRoles, 
    fetchUsers,
    updateUserRole
}