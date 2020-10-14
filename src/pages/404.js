import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-conttainer">
          <h1>404</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
