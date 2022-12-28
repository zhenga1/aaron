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
    }
]
function Feature({SRC,title,description,link}){
    return (
        <div className='styles.projectSection' >
            <h2 >{title}</h2>
            <div>
            <p>{description}</p>
            <a href={link}>{title}</a>
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
            paddingRight: 40
          }}
        >
            {ListofProjs.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      
    )
}