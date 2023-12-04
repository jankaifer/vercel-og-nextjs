import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
       <meta property="og:image" content={
        `${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/grafana.png`} data-shuvi-head="true"/>
      </Head>
      <h1>A page with Open Graph Image.</h1>
    </div>
  )
}
