import { createBrowserRouter } from "react-router-dom"
import { Router } from '@remix-run/router';

import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

export const router: Router = createBrowserRouter([
{ 
  path: '/', 
  element: <AppLayout />, 
  children: [ { path: '/', element: <Dashboard /> }],
},

{ 
  path: '/', 
  element: <AuthLayout />, 
  children: [ { path: '/sign-in', element: <SignIn /> }],
},
])
