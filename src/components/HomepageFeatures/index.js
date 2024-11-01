import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Reference',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        C DocsではC言語に定義されている関数、マクロ、整数定数式などを日本語で説明しています。また、C言語の規格ごとに作成してあるので、お使いのCの環境に合わせたものが見つかります。
      </>
    ),
  },
  {
    title: 'Explains Parameters, Return Values, Explanations',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        C Docsでは関数の戻り値、関数の概要、必要な引数、マクロや整数定数式であれば値の説明や用途などが詳しく書かれています。
      </>
    ),
  },
  {
    title: 'Supports the Search Function',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        上の検索欄から、お探しの関数やマクロがすぐに見つかる検索バーを設置。探したいものがすぐ見つかります。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
