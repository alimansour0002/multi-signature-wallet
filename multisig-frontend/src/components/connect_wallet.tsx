// import { useEffect, useState } from 'react'
import {  useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName, } from 'wagmi'
  export default function ConnectWallet() {
    const { connect, connectors, error, pendingConnector, isConnected, isConnecting, activeConnector } =
      useConnect();
      const { data: accountData } = useAccount();

    const { disconnect } = useDisconnect();
      if (isConnected) {
        return (
          <div>
            <div>Connect Address: {accountData?.address}</div>
            <div>Connected to {activeConnector?.name}</div>
            <button onClick={() => {disconnect()}}>Disconnect</button>
          </div>
        )
      }
  
    return (
      <div>
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {/* {!connector.ready && <div>unsupported</div>} */}
  
            {isConnecting &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}
        {error && <div>{error.message}</div>}
      </div>
    )
  }