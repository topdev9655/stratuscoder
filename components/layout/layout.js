import { Fragment } from 'react';

import Navigation from './navigation';
import Footer from './footer';

function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main className="mt-20">
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;