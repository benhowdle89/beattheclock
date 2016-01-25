import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <main>
                { children }
            </main>
            <footer>
                Made by Ben Howdle
            </footer>
        </div>
    )
}

export default Layout
