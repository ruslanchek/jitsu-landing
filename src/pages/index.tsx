import React from 'react';
import { Seo } from '../components/Seo';
import { Header } from '../components/Header';
import { Page } from '../components/Page';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { Trusted } from '../components/Trusted';

const IndexPage = () => (
  <div>
    <Seo title='Jitsu' description='' lang='en' />
    <Header />
    <Page>
      <Hero>
        <h1>
          Keep your team organized
          <br />
          and connected
        </h1>
        <p>
          With Jitsu’s work management platform, your team can stay focused on their goals, projects, and tasks — no
          matter when or where they work.
        </p>
        <p>
          <br />
          <Button size='ButtonLarge'>Try for free</Button>
        </p>
      </Hero>
      <Trusted />
    </Page>
  </div>
);

export default IndexPage;
