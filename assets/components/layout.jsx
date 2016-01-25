import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <main>
                { children }
            </main>
            <footer>
                Made by <a href="http://twitter.com">Ben Howdle</a>
            </footer>
        </div>
    )
}

export default Layout
