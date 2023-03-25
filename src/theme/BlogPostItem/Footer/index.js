import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';

import { useBlogPost } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function FooterWrapper(props) {

  const { metadata, isBlogPostPage } = useBlogPost()
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter
  
  return (
    <>
     <BlogPostItem {...props} />
      {(enableComments && isBlogPostPage) && (
        <GiscusComponent />
      )}
    </>
  );
}