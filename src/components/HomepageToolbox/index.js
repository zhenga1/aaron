import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'
const ListofTools = [
    {
        title: "Gesture Detector",
        description: (<>
        A Handpose Detector made using tensorflow, with react as the frontend. 
        Will detect and show the relevant handpose done by the user through
        an emoji format.
        </>),
        link: 'https://zhenga1.github.io/gesturedetectorweb/',
        SRC: require("@site/static/img/gesture.jpg").default
    }
]
function Feature({SRC,title,description,link}){
    return (
        <div className={styles.projectSection}>
                        <img src={SRC}/>
                        <div style={{marginLeft: 20}}>
                            <h1>{title}</h1>
                            <div>
                            <p>{description}</p>
                            <a href={link}>{title}</a>
                            </div>
                        </div>
            </div>
    )
}
export default function HomepageToolbox (){
    return (<div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 10,
          marginTop: 30,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 15
        }}
      >
      <div style={{ position: "relative", textAlign: "center", fontSize: "50px" }}>My Own Toolbox</div>
      {ListofTools.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </div>)
  }