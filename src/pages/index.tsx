import { GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string
    amount: string
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome!</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all publications
            <br />
            {/* <span>for {product.amount}/month</span> */}
            <span>for 49,90/month</span>
          </p>
          <SubscribeButton title="Subscribe now" color="primary" />
        </section>
        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          height={520}
          width={334}
        />
      </main>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const price = await stripe.prices.retrieve('price_1JkXIOKNHdhAUyRAEkbJ1IMv', {
//     // expand: ['product'],
//     // used in cases where details of the product and / or several product pricing options are necessary
//   })

// const product = {
//   priceId: price.id,
//   amount: new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   }).format(price.unit_amount / 100),
// }

// return {
//   props: {
//     product,
//   },
//   revalidate: 60 * 60 * 24, //24 horas
// }
// }
