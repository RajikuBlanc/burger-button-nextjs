import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/global';
import { theme } from '../src/theme';
import Image from 'next/image';
import { Burger, Menu } from '../src/components';
import { useState, useRef } from 'react';
import { useOnClickOutside } from '../src/hook';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <Image
            src="https://image.flaticon.com/icons/svg/2016/2016012.svg"
            alt="burger icon"
            objectFit="contain"
            width={150}
            height={150}
          ></Image>
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
