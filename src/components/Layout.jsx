import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'css/output.css';
import 'css/global.css';
import 'css/fontello.css';
import 'css/utilities.css';

import { Header } from 'components/Header';
import { Instagram } from 'components/Instagram';
import { Footer } from 'components/Footer';
import { Newsletter } from 'components/Newsletter';

export const Layout = ({ children, showNewsletter }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
  >
    {data => {
      const { title } = data.site.siteMetadata;

      return (
        <div className="flex flex-col min-h-screen">
          <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
            <html lang="sk" />
            <meta
              name="description"
              content="Paralelná Polis Košice je zameraná na vzdelávanie, objavovanie, tvorenie lepších systémov, experimentovanie a aplikáciu kryptomien a spojených technológií do bežného života. Je tu pre všetkých, ktorí majú záujem fungovať slobodnejšie a nezávislejšie."
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
          </Helmet>

          <Header />

          <main role="main" className="flex-1 px-4 py-8 my-10">
            {children}
          </main>

          {showNewsletter && (
            <div className="bg-grey-lightest p-4 sm:py-8 text-center">
              <div className="container">
                <h2 className="text-grey-darker m-0">Zostaňme v kontakte</h2>
                <p>Prihlás sa na odber newslettera:</p>
                <Newsletter />
                <p className="text-xs text-grey-dark">
                  Z času na čas ťa budeme informovať o aktuálnom dianí z
                  prostredia Paralelnej Polis.
                  <br />
                  Žiaden spam - len relevantné informácie.
                </p>
              </div>
            </div>
          )}

          <Instagram />
          <Footer />
        </div>
      );
    }}
  </StaticQuery>
);
