import { SocketAddress } from 'net'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ConnectWallet from '../src/components/connect_wallet'
import { useMultisigContract } from '../src/hooks/useMultisigContract'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Router from 'next/router'
import { useRouter } from 'next/router'
import { sign } from 'crypto'
import { collection, setDoc, doc, getDoc } from 'firebase/firestore'
import { database } from '../src/utils/firebaseConfig'
import { useAccount, useSigner } from 'wagmi'
import { deploy } from '../src/utils/deploy'

const Home: NextPage = () => {
  const [address, setAddress] = useState<string>('');
  const [newSigner, setNewSigner] = useState<string>('');
  const [signers, setSigners] = useState<string[]>([]);
  const { data: accountData } = useAccount();
  const { data: owner } = useSigner();
  const [userWallets, setUserWallets] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!accountData?.address) {
      setUserWallets([]);
      return;
    }
    const db = collection(database, "Favorites");
    const userDoc = doc(db, accountData?.address);
    getDoc(userDoc).then((docc) => {
      const data = docc.data();
      if (!data) return;
      setUserWallets(Object.values(data));
    }
    )
  }, [accountData, refresh]);
  const goToPage = (add: string) => {
    router.push(add);
  }
  const addSigner = () => {
    const newArr = [...signers, newSigner];
    setNewSigner('');
    setSigners(newArr);
    console.log('signers', signers);
  }
  const Signers = () => {
    return <div>
      <h3>Signers:</h3>
      <button onClick={() => setSigners([])}>reset</button>
      {signers.map((elem, ind) => {
        return <div>
          {ind + 1}{' - '}{elem}
          <button onClick={() => {
            let arr1 = [], arr2 = [];
            if (ind > 0) arr1 = signers.slice(0, ind);
            if (ind < signers.length - 1) arr2 = signers.slice(ind + 1, signers.length);
            setSigners(arr1.concat(arr2));
          }}>Delete</button>
        </div>
      })
      }
    </div>
  }
  const createWallet = async () => {
    if (!accountData?.address) {
      alert('your wallet is not connected');
      return;
    }
    const walletAddress = await deploy(signers, owner);
    setSigners([]);
    const db = collection(database, "Favorites");
    const arr = signers;
    const addToDb = async (elem: string | undefined) => {
      await setDoc(doc(db, elem),
        { [walletAddress]: walletAddress }, { merge: true }
      );
    }
    arr.forEach((elem) => {
      addToDb(elem);
      addToDb(accountData?.address);
    });
    // if (!accountData?.address) return;
    // const userDoc = doc(db, accountData?.address);
    // const newUserWallets = await getDoc(userDoc);
    // console.log('newwallets',newUserWallets);
    setRefresh((refresh) => !refresh);
  }
  return (
    <div className={styles.container}>
      <ConnectWallet></ConnectWallet>
      {!accountData &&
        <>Connect your MetaMask  wallet please</>
      }
      {accountData && <div>
        <div>
          <h4>enter your wallet address</h4>
          <input onChange={(event) => setAddress(event.target.value)}
            value={address}>
          </input>
          <button onClick={() => goToPage(address)}>

            find wallet
          </button>
        </div>
        <div>
          your wallets:
          {userWallets.map(elem => {
            return (
              <div>
                <Link href={elem}>
                  <a>{elem}</a>
                </Link>
              </div>
            )
          })}
        </div>
        <h4>or create new wallet</h4>
        <input onChange={(event) => setNewSigner(event.target.value)}
          value={newSigner}
        >
        </input>
        <button onClick={addSigner}>
          add signer
        </button>
        {Signers()}
        <button onClick={createWallet}>
          create Wallet
        </button>
        
      </div>}
    </div>
  )
}

export default Home
