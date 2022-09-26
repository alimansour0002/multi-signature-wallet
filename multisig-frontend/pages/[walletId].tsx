import Wallet from '../src/components/wallet'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import React, { useEffect,useState } from 'react';

export default function MutliSegWallet({ contractAddress }: { contractAddress: string }) {
    const router = useRouter();
    const [walletId, setWalletId] = useState(null);

    useEffect(() => {
        if (router) setWalletId(router.query?.walletId);
    }, [router])

    return (<>{
        walletId && <div className={styles.container}>
            <div><Wallet contractAddress={walletId} /></div>
        </div>
    }</>);
}