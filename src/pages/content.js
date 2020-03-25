import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostComments from '../components/content';

const Content = () => (
  //1 for debugging
    <Layout body={<PostComments post_id='1' />}>
      <SEO title="Page content" />
      <h1>Fetch from db</h1>
      <p>Fetch from db</p>
      <Link to="/">Go back to the home</Link>
    </Layout>
)

export default Content
