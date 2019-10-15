import React from 'react';
import Map from './Map';

const Main = () => {
  return (
    <>
      <aside>
        <input name='origin' type='text' />
        <input name='destiny' type='text' />
      </aside>
      <section>
        <Map />
      </section>
    </>
  );
};

export default Main;
