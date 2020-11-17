import * as S from "./style";
import Menu from "./Menu";

const navItems = [
  "my account",
  "daily deal",
  "my wishlist",
  "blog",
  "contact",
  "log in",
];

const currencies = ["eur", "usd"];

export default function TopNav() {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.NavItem relative>
          <S.Link disableUnderline={true}>usd</S.Link>
          <Menu items={currencies} />
        </S.NavItem>
        <S.NavItem relative>
          <S.Link disableUnderline={true}>English</S.Link>
        </S.NavItem>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.NavItem>
          <S.Link disableUnderline={true}>default welcome msg!</S.Link>
        </S.NavItem>

        {navItems.map((item) => (
          <S.NavItem>
            <S.Link>{item}</S.Link>
          </S.NavItem>
        ))}
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
