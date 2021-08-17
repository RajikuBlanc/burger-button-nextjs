import { StyledMenu } from './Menu.styled';
import Link from 'next/link';
import { bool } from 'prop-types';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/">
        <a>
          <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          About us
        </a>
      </Link>
      <Link href="/">
        <a>
          <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          Pricing
        </a>
      </Link>
      <Link href="/">
        <a>
          <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          Contact
        </a>
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
