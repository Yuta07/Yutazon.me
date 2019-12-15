import Head from 'next/head';

export const config = { amp: true };

const Pigmon = () => {
  return (
    <div>
      <Head>
        <title>Works - Personal Blog | Yutazon.me</title>
        <meta name="description" content="Pigmon.ioはYutazonの個人ブログです。" />
        <script async src="https://cdn.ampproject.org/v0.js" />
        <script async custom-element="amp-timeago" src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js" />
      </Head>
      <style jsx>{`
        .wrapper {
          width: 100%;
          margin-top: 1.5rem;
        }

        .container {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }

        h2.work-hero,
        h2.introduction-hero,
        h2.tech-hero {
          font-size: 1.4rem;
        }
        @media screen and (max-width: 559px) {
          h2.work-hero {
            font-size: 20px;
          }
          h2.introduction-hero,
          h2.tech-hero {
            font-size: 18px;
          }
        }

        h2.work-hero {
          letter-spacing: 0;
        }

        h2.introduction-hero,
        h2.tech-hero {
          display: inline-block;
          padding: 0 0.5rem 0.3rem;
          text-align: center;
          border-bottom: 1px solid #e68123;
        }

        .work-overview {
          margin-top: 1.5rem;
          padding: 1rem 0.5rem;
          border: 1px solid #c9cfd3;
          border-radius: 8px;
          background-color: #fefefe;
        }

        h3.overview-hero {
          font-size: 1.25rem;
        }

        p.overview-intro {
          margin-top: 1rem;
        }

        .overview-detail,
        .introduction-detail,
        .tech-detail {
          display: flex;
          margin-top: 1.5rem;
          line-height: 1.6;
        }

        .work-image-wrapper {
          height: 544;
          margin-top: 2rem;
          box-shadow: 2px 2px 4px 1px rgba(180, 180, 180, 1);
        }

        @media screen and (max-width: 559px) {
          .work-image-wrapper {
            height: 410;
          }
        }

        .work-introduction,
        h2.tech-hero {
          margin-top: 1.5rem;
        }

        .tech-detail {
          flex-direction: column;
          padding: 0 1.4rem;
        }

        .tech-detail-list {
          font-size: 1rem;
          padding-top: 4px;
        }
      `}</style>
      <div className="wrapper">
        <div className="container">
          <h2 className="work-hero">Pigmon.io | 個人ブログ</h2>
          <div className="work-overview">
            <h3 className="overview-hero">Overview</h3>
            <p className="overview-intro">技術のことからしょうもないことまでなんでも書いていくブログを作りました。</p>
            <div className="overview-detail">
              <span className="overview-created">作成日時：</span>
              <amp-timeago class="ja" width="160" height="20" datetime="2019-11-03T00:37:33.809Z" locale="ja">
                03 November 2019
              </amp-timeago>
            </div>
          </div>
          <div className="work-introduction">
            <h2 className="introduction-hero">Introduce</h2>
            <p className="introduction-detail">
              技術的なアウトプットを発信していくためのブログです。まれに謎な記事をあげるかもしれません。
              <br />
              Gatsbyで作成しています。ダークモードにも対応させたので、ぜひ読んでみてください。
              <br />
              デザインはわかりやすい構成にして、記事にはマークダウンを使用しているため、読みやすくなっています。
            </p>
            <div className="work-image-wrapper">
              <amp-img
                src="/works/pigmon-overview.png"
                width="240"
                height="300"
                alt="pigmon-overview"
                layout="responsive"
              >
                <noscript>
                  <img src="/works/pigmon-overview.png" width={240} height={300} alt="portfolio-overview" />
                </noscript>
              </amp-img>
            </div>
            <h2 className="tech-hero">Tech Used</h2>
            <ul className="tech-detail">
              <li className="tech-detail-list">Gatsby.js[React]</li>
              <li className="tech-detail-list">TypeScript</li>
              <li className="tech-detail-list">styled-components</li>
              <li className="tech-detail-list">Netlify</li>
              <li className="tech-detail-list">PWA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pigmon;