import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import Layout from "./Layout.tsx"
import "./index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<App />
	</React.StrictMode>
)
