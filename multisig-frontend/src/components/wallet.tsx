import ConnectWallet from './connect_wallet'
import { useMultisigContract } from '../hooks/useMultisigContract';
import { useEffect, useState } from 'react';
import { useSigner } from 'wagmi';
import { ethers, Signer } from 'ethers';
import { PendingListType } from '../types';
export default function Wallet({ contractAddress }: { contractAddress: string }) {
    const contract = useMultisigContract(contractAddress);
    const [pendingList, setPendingList] = useState<PendingListType[][]>([]);
    const [address, setAddress] = useState('');
    const [value, setValue] = useState('');
    const [NumberofSigners, setNumberofSigners] = useState();
    const { data: signer } = useSigner();
    const [isSigner,setIsSigner]= useState(false);
    useEffect(()=>{
        const getIndex = async () =>{
            if(!contract)return;
            const isSig = await contract.isSigner();
            setIsSigner(isSig);
        }
        getIndex();
    },[signer])
    useEffect(() => {
        const getPending = async () => {
            if (!contract) return;
            let newList: PendingListType[][] = [];
            const pendingNumber = await contract.numberOfPending();
            for (let i = 0; i < pendingNumber; i++) {
                let listElem = await contract.pending(i);
                const voted:boolean = await contract.approvedBefore(i);
                newList.push([listElem.approvedCounter.toNumber(), ethers.utils.formatEther(listElem.eth),listElem.to,voted]);
            }
            const numberofPeople = (await contract.peopleNumber()).toNumber();
            setNumberofSigners(numberofPeople);
            setPendingList(newList);
        }
        getPending();
    }, [contract,signer]);

    const proposeTrans = async () => {
        await contract.propose(ethers.utils.parseEther(value), address);
    }
    const approve = (ind: number) => {
        console.log('indd',ind);
        contract.approve(ind).then(() => {
            alert('transaction approved')
        }
        ).catch((err) => {
            alert(err);
        }
        )
    }
    const Table = () => {
        const pendingTable = () => {
            return (<>
                {
                    pendingList.map((elem, ind) => {
                        return (
                            <tr>
                                <th>{elem[1]}</th>
                                <th>{elem[2]}</th>
                                <th>{elem[0]}/{NumberofSigners}</th>
                                <th>{ (isSigner&&(!elem[3]))&& <button onClick={() => { approve(ind) }}>approve</button>}
                                {(isSigner&&elem[3])&&<>approved already</>}</th>
                            </tr>
                        )
                    })
                }

            </>);

        }
        return <table width={'100%'} border='1px'>
            <tbody>
                <tr>
                    <th>Value</th>
                    <th>To</th>
                    <th>Number of approvals</th>
                </tr>
                {pendingTable()}

            </tbody>
        </table>
    }

    return (
        <>
            <div>
                <ConnectWallet />
                <h3>Pending Transactions:</h3>
                <div>{Table()}</div>
                <h3>propose Transaction:</h3>
                <p>address</p>
                <input
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                >
                </input>
                <p>value</p>
                <input
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                >
                </input>
                <button onClick={proposeTrans}>
                    propose
                </button>
            </div></>
    );
}