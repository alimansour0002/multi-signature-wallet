import Wallet from '../src/components/wallet'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
export default function MutliSegWallet({contractAddress}:{contractAddress:string}) {
    const router = useRouter();
    const { walletId } = router.query;
    return (
        <div className={styles.container}>
            <div><Wallet contractAddress={walletId}/></div>
        </div>
    );
}