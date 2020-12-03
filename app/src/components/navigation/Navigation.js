import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import useContext from '../../hooks/useContext';
import * as S from './Navigation.styles';

const Navigation = () => {
  const localizedData = useContext();
  const router = useLocation();

  return (
    <S.Navigation>
      <Container>
        <S.NavigationContent>
          <S.NavigationList>
            {localizedData.pages.map((page) => {
              if (!page.published || !page.navigation) return null;

              return (
                <S.NavigationItem
                  key={page.title}
                  isActive={router.pathname.page === page.title_slug}
                >
                  <Link to={`/${page.title_slug}`} component={S.NavigationLink}>
                    {page.title}
                  </Link>
                </S.NavigationItem>
              );
            })}
          </S.NavigationList>
        </S.NavigationContent>
      </Container>
    </S.Navigation>
  );
};

export default Navigation;
