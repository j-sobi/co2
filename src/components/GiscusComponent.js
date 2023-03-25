//add comments
import { Giscus } from "@giscus/react";

import { useColorMode } from '@docusaurus/theme-common';

//add comments
export default function Comment() {
  return (
    <Giscus
      repo="j-sobi/co2"
      repoId="R_kgDOJNx76w"
      category="Announcements"
      categoryId="DIC_kwDOJNx7684CVIwh"
      mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      reactionsEnabled="0"
      emitMetadata="0"
      theme="dark"
    />
  );
}