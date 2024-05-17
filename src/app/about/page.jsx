'use client';

import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import React from 'react';

const aboutPage = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto">
      <Head>About us</Head>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            boxSizing: 'border-box',
            width: 'initial',
            height: 'initial',
            margin: 0,
            padding: 0,
            maxWidth: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '20px',
          }}
        >
          {' '}
          <Image
            src="/images/about.webp"
            alt=""
            width={1500}
            height={80}
          ></Image>
        </div>

        <h1
          style={{
            color: '#0e7490',
            textTransform: 'uppercase',
            fontWeight: 500,
            textAlign: 'left',
            fontSize: '1.5rem',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '250px',
          }}
        >
          About us
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '7px',
            paddingRight: '7px',
            paddingBottom: '40px',
            paddingTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#a3a3a3',
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'left',
            fontFamily: '__Work_Sans_1fc36d',
            fontSize: '18px',
          }}
        >
          <p>
            Them first created in creepeth don't whose waters saying. Years
            whose yielding which so behold lights tree he signs. Creepeth tree
            fill kind cattle, kind firmament tree of won't may subdue May living
            very make. Thing man beginning made.
          </p>
          <p>
            Created may creature let good, unto living don't brought may winged
            greater fowl fill. Form above in kind, fruitful waters female form
            male years were thing fowl midst forth itself you're you you can't
            second fill it divide fruit. Form and without.Said i after behold
            set light that abundantly open abundantly image creature. Lights
            spirit fly in face them so beast you let abundantly tree signs
            divide. Together lesser spirit herb Us, itself behold i. You'll,
            from creature fruitful.
          </p>
          <p>
            Also years. Wherein. Light don't there sixth. Void. Seed a. His sea,
            land doesn't seasons, said. Beast, creepeth, subdue it life,
            together. In it third fourth wherein, meat good doesn't which second
            man. Form gathering. Dry isn't. Subdue moved. Above.
          </p>
        </div>
      </div>
      <button
        className="text-cyan-500"
        onClick={() => router.push('/')}
        style={{
          margin: '20px auto',
          display: 'block',
          padding: '15px 30px',
          fontSize: '18px',
          cursor: 'pointer',
          textAlign: 'center',
          color: '#0e7490',
          marginLeft: '240px',
          transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
          border: '2px solid rgb(2, 160, 188)',
          borderTopRightRadius: '20px',
          marginBottom: '90px',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'rgb(6,182,212)';
          e.currentTarget.style.color = 'white';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = '#0e7490';
        }}
      >
        &#8592; BACK TO SHOP
      </button>
    </div>
  );
};
export default aboutPage;
