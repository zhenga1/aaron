import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'
import Link from '@docusaurus/Link';
const githubpng =  require('@site/static/img/Githubpng.png').default;
const ListofTools = [
    {
        title: "Gesture Detector",
        description: (<>
        A Handpose Detector made using tensorflow, with react as the frontend. 
        Will detect and show the relevant handpose done by the user through
        an emoji format.
        </>),
        link: 'https://zhenga1.github.io/gesturedetectorweb/',
        ghlink:"https://github.com/zhenga1/gesturedetectorweb",
        SRC: require("@site/static/img/gesture.jpg").default
    },
    {
        title: "Write Easy",
        description: (<>
        A Flask web app made using Cohere and python as backend that generates paragraphs of 
        text, saving college student's time by helping them write application essays. 
        </>),
        link: 'http://aaronyjamesys.pythonanywhere.com/',
        ghlink: "https://github.com/zhenga1/writeeasy",
        SRC: require("@site/static/img/writeeasy.png").default

    }
]
function Feature({SRC,title,description,link,ghlink}){
    return (
        <div className={styles.projectSection}>
                        <img src={SRC}/>
                        <div style={{marginLeft: 20}}>
                            <h1>{title}</h1>
                            <div>
                            <p>{description}</p>
                            
                            <div style={{display:"flex", flexDirection:"row",columnGap:35}}>
                                <a href={link}>{title}</a>
                                <Link href={ghlink}>
                                <img src={githubpng} style={{height:30,width:30}}/>
                                </Link>
                            </div>
                            
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