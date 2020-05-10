import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './utils/analytics'

// Export top-level component as JSX for static rendering.
import App from './App'
export default App

// Render your app.
if (typeof document !== 'undefined') {
    const target = document.getElementById('root')

    const renderMethod = target.hasChildNodes()
        ? ReactDOM.hydrate
        : ReactDOM.render

    const render = Component => {
        renderMethod(
            <AppContainer>
                <Component />
            </AppContainer>,
            target
        )
    }

    render(App)

    // Hot Module Replacement.
    if (module && module.hot) {
        module.hot.accept('./App', () => {
            render(App)
        })
    }
}
