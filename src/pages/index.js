import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import MainSection from "../sections/MainSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <MainSection />
    </Layout>
  );
}

export default IndexPage;
