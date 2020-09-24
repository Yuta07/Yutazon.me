import styled from 'styled-components';

export const Personal = () => {
  return (
    <AboutField>
      <Name>Yutaka Miyazaki</Name>
      <Position>Engineer</Position>
      <Txt>フロントエンドエンジニア🎉 主にReact/Next.jsを触っています。このサイトはNext.jsで構築されています。</Txt>
      <Social>
        <Link href="https://github.com/Yuta07" target="_blank">
          <Img src="/links/github-icon.svg" alt="github" />
        </Link>
        <Link href="https://twitter.com/yutazon7" target="_blank">
          <Img src="/links/twitter.svg" alt="twitter" />
        </Link>
      </Social>
      <SingleWord>Fish🐡 rathar than meat🍖</SingleWord>
    </AboutField>
  );
};

const AboutField = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Name = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 575.98px) {
    font-size: 20px;
  }
`;

const Position = styled.span`
  color: #838386;
  font-size: 12px;
  margin: 10px 0;
  display: block;
  text-align: center;
`;

const Txt = styled.p`
  font-size: 14px;
`;

const Social = styled.div`
  width: 100%;
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a``;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;

const SingleWord = styled.p`
  font-size: 12px;
  color: #838386;
  text-align: center;
  margin-top: 10px;
`;
