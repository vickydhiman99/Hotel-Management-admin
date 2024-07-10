import React from 'react'
import AppAlert from './components/alert'

function AlertProvider({ children }) {
    return (
        <div>
            {children}
            <AppAlert />
        </div>
    )
}

export default AlertProvider
