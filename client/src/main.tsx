import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App.tsx"
import Layout from "./Layout.tsx"
import LargerThanOne from "./pages/LargerThanOne.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/largerThanOne",
				element: <LargerThanOne />,
			},
		],
	},
])

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<App />
		</QueryClientProvider>
	</React.StrictMode>
)
