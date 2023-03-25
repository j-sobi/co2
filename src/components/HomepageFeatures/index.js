import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '上山篇',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img: require('@site/static/img/winter-camp.png').default,
    description: (
      <>
        數年前開始接觸相機， 亦認識了一伙愛拍攝香港風景的影友，多了<code>上山</code>尋找不同的風景， 
        亦同時發現香港四季都有很多獨特景致值得一看，雖然近呢一兩年小了<code>上山</code>，
        但是仍然會興之所至跑到山上等日出，觀日落。
      </>
    ),
  },
  {
    title: '下海篇',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    img: require('@site/static/img/colorado.png').default,
    description: (
      <>
        愛玩的中年人,年輕時有機會接觸不同的<code>水上活動</code>, 說不上瘋狂, 但是仍掛念在海中心漂蕩的感覺,
         近來接觸了一項簡單的玩具直立板（STANDUP PADDLE）,並精選了用充氣設計, 雖然相對硬板物料來說欠缺速度,
         不過方便攜帶和收藏, 可以在不同海域一嘗海上短途之旅。
      </>
    ),
  },
  {
    title: '遨遊天際',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img: require('@site/static/img/japan.png').default,
    description: (
      <>
        最後重玩埋<code>航拍</code>, 愛上用另一角度看世界！
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
