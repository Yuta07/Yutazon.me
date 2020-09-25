export const Personal = () => {
  return (
    <div className="personal-wrapper">
      <h2 className="author-name">Yutaka Miyazaki</h2>
      <span className="author-position">Engineer / Second year of new graduate</span>
      <div className="author-link-content">
        <a href="https://github.com/Yuta07" target="_blank" className="author-link">
          <amp-img src="/links/github.svg" fallback="" width="24" height="24" layout="intrinsic" alt="github"></amp-img>
        </a>
        <a href="mailto:mono.12dev@gmail.com" target="_blank" className="author-link">
          <amp-img src="/links/mail.svg" fallback="" width="24" height="24" layout="intrinsic" alt="mail"></amp-img>
        </a>
        <a href="https://twitter.com/yutazon7" target="_blank" className="author-link">
          <amp-img
            src="/links/twitter.svg"
            fallback=""
            width="24"
            height="24"
            layout="intrinsic"
            alt="twitter"
          ></amp-img>
        </a>
      </div>
      <p className="autho-single-word">Fish🐡 rathar than meat🍖</p>
      <style jsx>{`
        .personal-wrapper {
          width: 100&;
          padding: 0 20px;
          margin: 0 auto;
          animation: fadeIn 2s ease-in 0s 1 normal forwards running;
        }

        .author-name {
          font-size: 90px;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          text-align: center;
          margin-top: 10px;
        }

        .author-position {
          color: #838386;
          font-size: 14px;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          margin: 10px 0;
          display: block;
          text-align: center;
        }

        .author-link-content {
          width: 100%;
          margin-top: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .author-link {
        }

        amp-img {
          margin: 0 15px;
          filter: drop-shadow(-6px -6px 14px rgba(255, 255, 255, 0.7));
        }

        .autho-single-word {
          font-size: 14px;
          color: #838386;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          text-align: center;
          margin-top: 10px;
        }

        @media (max-width: 575.98px) {
          .author-name {
            font-size: 64px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            visibility: hidden;
          }
          100% {
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </div>
  );
};
