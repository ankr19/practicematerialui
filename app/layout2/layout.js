import Layout2 from '@/components/Layout/Layout2'
import React from 'react'

export const metadata= {
  title: "Layout2 | For Design"
}

export default function Root1Layout({children}) {
  return (
    <Layout2>
      {children}
    </Layout2>
  )
}
