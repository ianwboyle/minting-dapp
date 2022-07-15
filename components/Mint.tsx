import { useAddress, useMetamask, useSignatureDrop } from "@thirdweb-dev/react";
import Image from "next/image";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const myNFTDropAddress = "0x7D887C5D774eA76F613Bc90bf04D47Df3005D85e"

export const Mint = () => {
  const connectWithMetamask = useMetamask();
  const signatureDrop = useSignatureDrop(myNFTDropAddress);
  const address = useAddress();
  return (
    <div className='w-full h-screen'>
      <div className='max-w-[1240px] w-full h-full mx-auto pt-20 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center border-4 border-gray-800 p-4 rounded'>
          <div>
            <Image
              src="/assets/logo.png"
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
          <div className='p-4'>
            <CrossmintPayButton
              collectionTitle="<TITLE_FOR_YOUR_COLLECTION>"
              collectionDescription="<DESCRIPTION_OF_YOUR_COLLECTION>"
              collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
              clientId="<YOUR_CLIENT_ID>"
              environment="<YOUR_DESIRED_ENVIRONMENT>"
              mintConfig={{
                count: "<NUMBER_OF_NFTS>",
                totalPrice: "<SELECTED_PRICE>"
              }}
            /> 
          </div>
        </div>
      </div>
    </div>

  );
};