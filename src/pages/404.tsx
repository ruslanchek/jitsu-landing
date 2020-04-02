import React, { FC } from 'react';
import { Seo } from '../components/Seo';

const NotFoundPage: FC = () => (
  <div>
    <Seo title='404: Not found' description='' lang='en' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
