import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Export top-level component as JSX for static rendering.
import App from './App'
export default App

// Render your app.
if (typeof document !== 'undefined') {
    const target = document.getElementById('root')

    const renderMethod = target.hasChildNodes()
        ? ReactDOM.hydrate
        : ReactDOM.render

    renderMethod(
        <AppContainer>
            <App />
        </AppContainer>,
        target
    )

    // Hot Module Replacement.
    if (module && module.hot) {
        module.hot.accept('./App', () => {
            render(App)
        })
    }
}
