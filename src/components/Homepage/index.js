import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ListofProjs = [
    {
        title: 'NOME-JIPCAD',
        role: 'Undergraduate Researcher',
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
        role: 'Chief Developer',
        description: (
            <>
            Phocabulary is an educational app built for students, by students. 
            Using AI models, Phocabulary allows users to see and learn about physical objects 
            on their camera screens with just a click. 
            </>
        ),
        link:"https://github.com/zhenga1/Phocabulary_main",
        SRC:require("@site/static/img/phocabularylogo.png").default
    },
    {
        title: 'Zensafety',
        role: 'Chief Developer',
        description: (
            <>
             Zensafety is an application on the Zenbo robot (a humanoid robot developed by Asus) that can help
             you easily secure your belongings using AI-object-recognition technology.   
            </>
        ),
        link:"https://github.com/zhenga1/Zensafety_application_repo",
        SRC:require("@site/static/img/zenbo_robot.png").default
    }
]
function Feature({SRC,role,title,description,link}){
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
                        <h2 >{title}</h2>
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