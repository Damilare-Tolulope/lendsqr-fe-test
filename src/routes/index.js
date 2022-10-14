import React, {Suspense, lazy} from 'react'
import { BounceLoader } from 'react-spinners'

const load = Component => props =>
    (
        <Suspense fallback={<div className="page-content">
            <BounceLoader loading  />
        </div>}>
            <Component {...props} />
        </Suspense>
    );


const Login = load(lazy(() => import("../pages/Auth/Login.jsx")))
const Users = load(lazy(() => import("../pages/Users")))
const UserDetails = load(lazy(() => import("../pages/Users/UserDetails")))


const authProtectedRoutes = [
    { path: "/", component: Users, title: "User" },
    { path: "/:id", component: UserDetails, title: "User Details" },
]

const publicRoutes = [
    { path: "/login", component: Login, }
];


export { authProtectedRoutes, publicRoutes }


