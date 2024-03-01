'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

import Form from '@/components/Form';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout py-12'>
          <div className='relative flex flex-col items-center justify-center text-center mb-4'>
            {/* <Logo className='w-1/2 mb-8' /> */}
            <Image
              src='/images/logo.png'
              width={500}
              height={500}
              alt='Picture of the author'
            />
            <h1 className='mt-10 font-bold'>Stop Mosquitos Dead</h1>
            <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20'>
              Rebel Mosquito is Ontario's leading airborne pest control company.
              We proudly service the greater Ottawa region, from Kingston
              through to Gatineau/Hull.
            </p>
          </div>
          <div className='mt-8'>
            <div className='items-center justify-center text-center py-6'>
              <div className='mx-auto max-w-2xl text-center'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                  Now Booking
                </h2>
                <p className='mt-2 text-lg leading-8 text-gray-600'>
                  Want a mosquito free summer? Contact our team to book your
                  next service.
                </p>
              </div>
              <Form />
            </div>
          </div>
          <footer className='items-center justify-center text-center mt-12 text-gray-700'>
            © {new Date().getFullYear()} Rebel Mosquito
          </footer>
        </div>
      </section>
    </main>
  );
}
