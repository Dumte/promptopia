import '@stlyes/globals.css'
import { Children } from 'react'

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts"
}
const RootLayout = () => {
  return (
    <html lange="en">
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        {Children}
      </main>
    </html>
  )
}

export default RootLayout