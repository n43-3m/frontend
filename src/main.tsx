import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// biome-ignore lint: root will always be there in the index.html
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)

