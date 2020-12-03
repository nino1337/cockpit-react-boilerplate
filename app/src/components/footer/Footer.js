import useContext from '../../hooks/useContext';
import Image from '../cockpit/image/Image';
import * as S from './Footer.styles';

const Footer = () => {
  const { siteSettings } = useContext();

  return (
    <S.Footer>
      <S.FooterContent>
        {siteSettings.footerText}
        {siteSettings.footerLinks.map(({ value }) => (
          <S.FooterLinks key={value.url} href={value.url} target="_blank" rel="noopener noreferrer">
            {`| ${value.title}`}
          </S.FooterLinks>
        ))}
      </S.FooterContent>
      <S.FooterLogos>
        {siteSettings.footerLogos.map(({ value }) => (
          <Image key={value.path} image={value} />
        ))}
      </S.FooterLogos>
    </S.Footer>
  );
};

export default Footer;
