//add comments
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

//add comments
export default function GiscusComponent() {
    const { colorMode } = useColorMode();
  
    return (
      <Giscus    
        repo="j-sobi/co2"
        repoId="R_kgDOJNx76w"
        category="Announcements"
        categoryId="DIC_kwDOJNx7684CVIwh"  // E.g. id of "General"
        mapping="url"                        // Important! To map comments to URL
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
        async
      />
    );
  }