import { useAddress, useMetamask, useSignatureDrop } from "@thirdweb-dev/react";
import Image from "next/image";
import LogoImg from '../public/assets/Logo.png';

const myNFTDropAddress = "0x7D887C5D774eA76F613Bc90bf04D47Df3005D85e"

export const Mint = () => {
  const connectWithMetamask = useMetamask();
  const signatureDrop = useSignatureDrop(myNFTDropAddress);
  const address = useAddress();
  return (
    <div className='w-full h-screen pt-20 ml-[55%] lg:ml-[0px]'>
      <div className='max-w-[1240px] mx-auto h-full flex flex-col justify-center items-center p-4 '>
        <div className='flex flex-col justify-center items-center border-4 border-gray-800 p-4 rounded'>
          <div>
            <Image
              src={LogoImg}
              width={400}
              height={400}
              className="mx-auto"
              alt='logo'
            />
          </div>
          <div>
            {address ? (
              <button onClick={() => signatureDrop?.claim(1)}>{"💎 Mint (0.005 GOR)"}</button>
            ) : (
              <button onClick={connectWithMetamask}>{"Proceed to Mint"}</button>
            )}
          </div>
          <div className='flex flex-row justify-center items-center p-8 gap-8'>
            <Image
              src="/assets/opensea.png"
              width={50}
              height={50}
              alt='opensea'
            />
            <Image
              src="/assets/rarible.png"
              width={50}
              height={50}
              alt='opensea'
            />
            <Image
              src="/assets/looksrare.png"
              width={50}
              height={40}
              alt='opensea'
            />
          </div>
        </div>
      </div>
    </div>

  );
};