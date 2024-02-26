'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Form from '@/components/Form';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/images/logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout py-12'>
          <div className='relative flex flex-col items-center justify-center text-center mb-4'>
            <Logo className='w-1/2 mb-8' />
            <h1 className='mt-4'>Stop Mosquitos Dead</h1>
            <p className='mt-2 text-sm text-gray-800'>
              Rebel Mosquito Control is Ontario's leading air borne pest control company. We proudly service the greater Ottawa region, from Kingston through to Gatineau/Hull.
            </p>
          </div>
          <div className='mt-12'>
            <div className='items-center justify-center text-center py-6'>
              <h2>Request a Quote</h2>
              <p>Fill out and submit the form below to get a quote</p>
            </div>
            <Form />
          </div>

          <footer className='bottom-2 text-gray-700'>
            © {new Date().getFullYear()}{' '}
            Rebel Mosquito
          </footer>
        </div>
      </section >
    </main >
  );
}