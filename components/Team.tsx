import Image from "next/image";

export const Team = () => {
  return (
    <div className='w-full h-screen'>
      <div className='max-w-[1240px] w-full h-full mx-auto pt-20 flex flex-col justify-center items-center'>
        <div>
          <div className="flex flex-col text-center">
            <p className="text-white p-2">Your Frens Through The Metaverse</p>
            <h2 className="text-white font-bold text-xl">NFT Collection Founders</h2>
          </div>
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

