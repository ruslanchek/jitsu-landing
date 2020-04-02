import React, { FC } from 'react';
import Helmet from 'react-helmet';

interface IProps {
  title: string;
  description: string;
  lang: string;
}

export const Seo: FC<IProps> = ({ title, description, lang }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ]}
    />
  );
};
