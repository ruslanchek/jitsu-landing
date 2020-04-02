import React from 'react';
import { Seo } from '../components/Seo';
import { Header } from '../components/Header';
import { Page } from "../components/Page";

const IndexPage = () => (
  <div>
    <Seo title='Jitsu' description='' lang='en' />
    <Header />
    <Page>Hello!</Page>
  </div>
);

export default IndexPage;
