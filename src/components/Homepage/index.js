import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ListofProjs = [
    {
        title: 'NOME-JIPCAD',
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
        description: (
            <>
            Phocabulary is an educational app built for students, by students. 
            Using AI models, Phocabulary allows users to see and learn about physical objects 
            on their camera screens with just a click. 
            </>
        ),
        link:"https://github.com/zhenga1/Phocabulary_main",
        SRC:require("@site/static/img/phocabularylogo.png").default
    }
]
function Feature({SRC,title,description,link}){
    return (
        <div className={styles.projectSection} >
            <img src={SRC} />
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
            <div style={{ position: "relative", left: 0, fontSize: "36px" }}>My Projects:</div>
            {ListofProjs.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      
    )
}