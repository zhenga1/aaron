import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeatures from '@site/src/components/Homepage';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div style={{ width: "100%", padding: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          columnGap: 24
        }}>
        {/* <div style={{display: "flex",flexDirection: "column", rowGap:24}}>
          <>🎓 College Student</>
            <br />
            <>👨‍💻 Software Engineer</>
            <br />
            <>🧠 Machine Learning enthusiast</>
            <br />
            <>⚡ Electronics Engineer</> 
            <br />
            <br />
        </div> */}
        <img
            src={require("@site/static/img/main.gif").default}
            style={{
              flex: "0 0 auto",
              borderRadius: 0,
            }}
          />
        <div style={{ display: "flex", flexDirection: "column", rowGap: 24 }}>
            <div style={{ position: "relative", left: 24, fontSize: "24px" }}>
              Hi, I am
            </div>
            <img src={require("@site/static/img/name_logo.png").default} />
            <div style={{ position: "relative", left: 24, fontSize: "24px" }}>
              A college student and aspiring full-stack developer.
            </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
