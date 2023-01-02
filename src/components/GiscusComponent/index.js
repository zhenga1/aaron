import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import {light_high_contrast} from '@docusaurus/theme-common'

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="zhenga1/aaronzheng"
      repoId="R_kgDOImGZNQ"
      category="Announcements"
      categoryId="DIC_kwDOImGZNc4CTXOT"  // E.g. id of "General"
      mapping="pathname"                        
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={light_high_contrast}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}