//add comments
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

//add comments
export default function GiscusComponent() {
    const { colorMode } = useColorMode();
  
    return (
      <script src="https://giscus.app/client.js"
              data-repo="j-sobi/co2"
              data-repo-id="R_kgDOJNx76w"
              data-category="Announcements"
              data-category-id="DIC_kwDOJNx7684CVIwh"
              data-mapping="url"
              data-strict="0"
              data-reactions-enabled="1"
              data-emit-metadata="0"
              data-input-position="bottom"
              data-theme="preferred_color_scheme"
              data-lang="zh-CN"
              crossorigin="anonymous"
              async>
      </script>
    );
  }