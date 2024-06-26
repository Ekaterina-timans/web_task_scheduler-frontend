import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.scss"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './routers/Routers'
import AuthProvider from "./providers/AuthProvider.jsx"
import Router from "./routers/Routers.jsx"
import { ThemeProvider } from "./providers/ThemeContext.jsx"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
            <Router />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
