import { useSession, signin } from 'next-auth/client';
import { useRouter } from 'next/router';

import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripeIntegration.js';
import styles from './subscribeButtonStyles.module.scss';

export function SubscribeButton() {
  const [session] = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signin('github');
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const response: any = await api.post('/subscribe');
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <button
      type='button'
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
