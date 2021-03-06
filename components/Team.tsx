import Image from "next/image";

export const Team = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full p-4'>
      <div className="flex flex-col items-center">
          <div className="flex flex-col justfy-center text-center">
            <p className="text-white p-2 text-center">Your Frens Through The Metaverse</p>
            <h2 className="text-white font-bold text-xl">NFT Collection Founders</h2>
          </div>
          </div>
        <div className="flex justify-center text-center">
          <div className="flex flex-row text-center">
            <div className="flex flex-col p-10 items-center">
              <div className="flex p-4">
                <Image
                  src="/assets/avatar1.png"
                  width={200}
                  height={200}
                  alt='avatar'
                ></Image>
              </div>
              <div className="flex flex-col p-2 text-center">
                <h1 className="text-2xl font-bold">@FounderName</h1>
                <p className="text-md">Founder</p>
                <p className="p-4">Description and short bio of a founder</p>
              </div>
            </div>
            <div className="flex flex-col p-10 items-center">
              <div className="flex p-4">
                <Image
                  src="/assets/avatar2.png"
                  width={200}
                  height={200}
                  alt='avatar'
                ></Image>
              </div>
              <div className="flex flex-col p-2 text-center">
                <h1 className="text-2xl font-bold">@FounderName</h1>
                <p className="text-md">Founder</p>
                <p className="p-4">Description and short bio of a founder</p>
              </div>
            </div>
            <div className="flex flex-col p-10 items-center">
              <div className="flex p-4">
                <Image
                  src="/assets/avatar1.png"
                  width={200}
                  height={200}
                  alt='avatar'
                ></Image>
              </div>
              <div className="flex flex-col p-2 text-center">
                <h1 className="text-2xl font-bold">@FounderName</h1>
                <p className="text-md">Founder</p>
                <p className="p-4">Description and short bio of a founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

