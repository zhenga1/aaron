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
function HomepageBridge(){
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 24 }}>
        <div style={{ position: "relative", left: 30, fontSize: "36px" }}>Who am I?</div>
        <div style={{position: "relative", left: 30, fontSize: "20px"  }}>
          Hi everyone! My name is Aaron Zheng. On the internet, I exist under two usernames: zhenga1 or aaronyjamesys. 
          I was born in 2004 around Toronto, but grew up in Hong Kong.
          <br/><br/>
          I am currently a first-year student at UC Berkeley pursuing an 
          undergraduate degree in EECS. Currently I am working as an undergraduate researcher
          under Prof. Carlo Sequin to develop JIPCAD, and am also part of Berkeley's Space Technology 
          And Rocketry (STAR) avionics team. 
          <br/><br/>
          In my free time, I enjoy skateboarding, watching/playing basketball, cycling, playing the electric guitar and chinese flute. 
          I also like creating things: pasta and dumpling dishes, robots, 3D-printed models, and mobile applications.
          <br/><br/>
          Below are some projects I have been working on!
        </div>
      </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage`}
      description="This is a page about Aaron Zheng's life">
      <HomepageHeader />
      <main>
        <HomepageBridge/>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
