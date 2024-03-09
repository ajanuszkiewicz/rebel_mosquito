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
            <div className='max-w-4xl'>
              <h1 className='mt-10 font-bold mb-6'>
                READY TO KICK BACK THIS SUMMER
                <br />
                WITHOUT GIVING A BUZZ!
              </h1>
              <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20'>
                <span>Picture this:</span> your next BBQ sizzling, pool waters
                sparkling, and chill Sundays under the sun—without those pesky
                mosquitoes and ticks crashing the party. We've got you covered
                with our tailor-made, all-in-one seasonal package. Wave those
                unwanted guests goodbye and take back your summer!
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <div className='items-center justify-center text-center py-6'>
              <div className='mx-auto max-w-4xl text-center'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
                  Let us handle those buzzkills!
                </h2>
                <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20'>
                  Don't let your family fall victim to mosquitos this season.
                  Fill out the form below to learn more about mosquito control
                  and our service.
                </p>
              </div>
              <Form />
            </div>
          </div>
          <div className='mt-8'>
            <div className='items-center justify-center text-center py-6'>
              <div className='mx-auto max-w-4xl text-center'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
                  Bite Back with Rebel Mosquito!
                </h2>
                <div className='text-center'>
                  <ul className='mt-2 text-lg leading-8 text-gray-600 lg:px-20 list-disc list-outside ms-8 text-left'>
                    <li>
                      All-Season Coverage: Enjoy a mosquito-free yard from
                      spring's first bloom to autumn's last leaf.
                    </li>
                    <li>
                      Tailored to Your Lifestyle: Your summer, your yard. We
                      customize our approach just for you.
                    </li>
                    <li>
                      Safety is our top priority. Our solutions are safe for
                      every family member, paws included!
                    </li>
                  </ul>
                </div>
                <br />
                <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20 text-left'>
                  <span className='primary-text font-bold'>
                    Are You Tired of The Buzz?
                  </span>{' '}
                  Give us a shout at{' '}
                  <span className='primary-text font-bold'>343-291-9288</span> –
                  and let's kickstart your journey to a buzz-free paradise.
                </p>
                <br />
                <p className='mt-2 text-lg leading-8 text-gray-600 lg:px-20 text-left'>
                  <span className='primary-text font-bold'>
                    Curious about what we can do for you?
                  </span>{' '}
                  Score a free quote and see how we tailor everything to fit
                  your world perfectly. And hey! who doesn't love a good deal?
                  Dive into our referral program and unlock some sweet savings!
                </p>
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='items-center justify-center text-center py-6'>
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
