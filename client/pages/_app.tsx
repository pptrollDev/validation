import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { CertificationProvider } from '../context/Certification'
import { EasySignProvider } from '../context/EasySign'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CertificationProvider>
      <EasySignProvider>
        <Component {...pageProps} />
      </EasySignProvider>
    </CertificationProvider>
  )
}

export default MyApp
