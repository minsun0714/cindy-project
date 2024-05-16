import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import Layout from "./Layout.tsx"
import LargerThanOne from "./pages/LargerThanOne.tsx"
import Login from "./pages/Login.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/auth",
				element: <Login />,
			},
			{
				path: "/largerThanOne",
				element: <LargerThanOne />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<App />
	</React.StrictMode>
)
