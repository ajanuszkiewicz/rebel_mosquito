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

      <div className='relative isolate overflow-hidden py-12'>
        <Image
          src='/images/hero-image.jpg'
          alt=''
          fill
          className='absolute inset-0 -z-10 h-full w-full object-cover'
        />
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='relative flex flex-col items-center justify-center text-center px-6'>
          {/* <Logo className='w-1/2 mb-8' /> */}
          <Image
            src='/images/logo.png'
            width={500}
            height={500}
            alt='Picture of the author'
          />
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <section className='bg-white'>
        <div className='layout'>
          <div className='py-6'>
            <div className='mx-auto max-w-4xl'>
              <h1 className='text-4xl font-bold green-text py-6 text-center'>
                READY TO TAKE BACK YOUR SUMMER?!
              </h1>

              <ul className='mt-2 text-lg leading-8 text-gray-600 lg:px-20 list-disc list-outside ms-8 text-left'>
                <li>
                  All-Season Coverage: Enjoy a mosquito-free yard from spring's
                  first bloom to autumn's last leaf.
                </li>
                <li>
                  Tailored to Your Lifestyle: Your summer, your yard. We
                  customize our approach just for you.
                </li>
                <li>
                  Safety is our top priority. Our solutions are safe for every
                  family member, paws included!
                </li>
              </ul>
            </div>
          </div>

          <div className='py-6'>
            <div className='items-center justify-center text-center py-8 rounded-md border-2 max-w-2xl m-auto bg-purple-50 border-solid'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                Let us handle those buzzkills!
              </h2>
              <p className='my-6 text-lg leading-8 text-gray-600 lg:px-20'>
                Fill out the form below to learn more about mosquito control and
                our service.
              </p>
              <Form />
            </div>
          </div>
          <div className='items-center justify-center text-center'>
            <div className='mx-auto max-w-4xl text-center'>
              <div className='py-6'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
                  Bite Back with Rebel Mosquito!
                </h2>
                <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20 text-left'>
                  Picture your summer BBQs with family and friends —without
                  those pesky mosquitoes and ticks crashing the party. We've got
                  you covered with our tailor-made, all-in-one seasonal package.
                  Wave those unwanted guests goodbye and take back your summer!
                </p>
              </div>
              <div className='py-6'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
                  Are You Tired of The Buzz?
                </h2>
                <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20 text-left'>
                  Reach out via email:{' '}
                  <a
                    className='purple-text font-bold'
                    href='mailto:savemore@rebelmosquito.com'
                  >
                    savemore@rebelmosquito.com
                  </a>{' '}
                  – and let's kickstart your journey to a buzz-free summer! Or
                  give us a shout at{' '}
                  <a className='purple-text font-bold' href='tel:+3432919288'>
                    343-291-9288
                  </a>
                  .
                </p>
              </div>
              <div className='py-6'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
                  Curious about what we can do for you?
                </h2>
                <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20 text-left'>
                  Score a free quote and see how we tailor everything to fit
                  your world perfectly. And hey! who doesn't love a good deal?
                  Dive into our referral program and unlock some sweet savings!
                </p>
              </div>
            </div>
          </div>

          <div className='py-6'>
            <div className='items-center justify-center text-center'>
              <div className='mx-auto max-w-4xl text-center'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
                  Website Launch Alert: We're Almost There!
                </h2>
                <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20'>
                  Hold tight – we're nearly there! Just dotting the i's and
                  crossing the t's on our website. Stick around; it's gonna be
                  awesome!
                </p>
              </div>
            </div>
          </div>
          <footer className='items-center justify-center text-center mt-12 text-gray-700'>
            Copyright © {new Date().getFullYear()} Rebel Mosquito. All rights
            reserved. No part of this website or any of its contents may be
            reproduced, copied, modified or adapted, without the prior written
            consent of Rebel Mosquito, unless otherwise indicated for
            stand-alone materials.
          </footer>
        </div>
      </section>
    </main>
  );
}
