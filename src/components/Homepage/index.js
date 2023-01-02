import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
//import { useNavigate } from "react-router-dom";


const ListofProjs = [
    {
        title: 'NOME-JIPCAD',
        role: 'Undergraduate Researcher at',
        site:"/blog/JIPCAD",
        description: (
        <>
        Used antlr4, typescript and regexr to create a customised
        vscode extension for the NOME programming language, allowing JIPCAD 
        users to have an easier time using the CAD software. 
         </>),
        link: "https://github.com/JIPCAD/JIPCAD-vs-code",
        SRC: require("@site/static/img/Nome3logo.png").default
    },
    {
        title: 'Phocabulary',
        role: 'Chief Developer at',
        site:"/blog/Phocabulary",
        description: (
            <>
            Use Android SDK to develop Phocabulary, an educational app for students, by students. 
            Phocabulary allows users to see and learn about physical objects 
            on their camera screens with just a click using object detection AI models. 
            </>
        ),
        link:"https://github.com/zhenga1/Phocabulary_main",
        SRC:require("@site/static/img/phocabularylogo.png").default
    },
    {
        title: 'Anodroid',
        role: 'Creator of',
        site:"/blog/Anodroid",
        description: (
            <>
            Created Anodroid, a 12-DOF humanoid-robot. Anodroid is an integrated machine that can move around on flat and tilted surfaces. 
            It has yet to be able to walk and run.
            </>
        ),
        link:"https://github.com/zhenga1/Anodroid",
        SRC:require("@site/static/img/anodroid_logo.png").default
    },
    {
        title: 'Zensafety',
        role: 'Chief Developer of',
        site:"/blog/Zensafety",
        description: (
            <>
             Designed and developed Zensafety, an application on the Zenbo robot (a humanoid robot developed by Asus) that can help
             people secure their belongings using AI-object-recognition technology.   
            </>
        ),
        link:"https://github.com/zhenga1/Zensafety_application_repo",
        SRC:require("@site/static/img/zenbo_robot.png").default
    }
]
function Feature({SRC,role,title,description,link,site}){
    
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //     let path = {site}; 
    //     navigate(path);
    //   }
    return (
        /*<div className={styles.newProjectSection}>
            <h2>Role: {role}</h2>
            <div className={styles.projectSection}>
                    <img src={SRC}/>
                    <div style={{marginLeft: 20}}>
                        <h2 >{title}</h2>
                        <div>
                        <p>{description}</p>
                        Github link: ——
                        <a href={link}>{title}</a>
                        </div>
                    </div>
            </div>
        </div>*/
       
            <div className={styles.projectSection}>
                        <img src={SRC}/>
                        <div style={{marginLeft: 20}}>
                            <Link href={site}>
                            <h2 >{title}</h2>
                            </Link>
                            <div>
                            <p>{description}</p>
                            Github link: ——
                            <a href={link}>{title}</a>
                            </div>
                        </div>
            </div>
        
    )
}
export default function HomepageFeatures(){
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 35,
            marginTop: 80,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 40
          }}
        >
            <div style={{ position: "relative", textAlign: "center", fontSize: "50px" }}>My Projects:</div>
            {ListofProjs.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      
    )
}