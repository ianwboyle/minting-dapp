
const styles = {
  wrapper: 'w-full h-screen',
  container: 'max-w-[1240px] w-full h-full mx-auto gap-10 pt-24 flex flex-row',
}

export const Embed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmZ7JB3mBYxTD8McJZK8QrVAY7i9JrL3Tqu14GVaYYqnQh/signature-drop.html?contract=0x7D887C5D774eA76F613Bc90bf04D47Df3005D85e&chainId=5&theme=dark&primaryColor=red&secondaryColor=red"
          width="600px"
          height="600px"
          frameBorder="0"
        ></iframe>
      <div>
        <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmZ7JB3mBYxTD8McJZK8QrVAY7i9JrL3Tqu14GVaYYqnQh/nft-drop.html?contract=0xC640C039B9ec73ec241C5107d8b2FC0D66d46d24&chainId=5&theme=dark&primaryColor=purple&secondaryColor=pink"
          width="600px"
          height="600px"
          frameBorder="0"
        ></iframe>
      </div>
      </div>
    </div>
  )
}
