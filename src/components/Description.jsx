export default function Description() {
  return (
    <div className="w-full absolute h-fit group-hover:h-full  transition-all">
      <div className="bg-blue-800 rounded-2xl p-3 w-full h-full ">
        <div className="border-solid-3 border-[3px] h-full border-yellow-500 flex-col relative flex">
          {/* details */}
          <div className="text-white border-solid border-green-500 border-[2px] hidden group-hover:block">
            <h3 className="text-xl mb-4 font-bold">Un Titre</h3>
            <p>
              details details details details detailsdetails detailsdetails
              details details
            </p>
          </div>

          {/* infos */}
          <div className="border-solid border-red-500 border-[2px] mt-auto">
            <div className="text-white font-bold italic border-b-2 border-white pb-2">
              <h1 className="text-lg ">Afrique en Mignature</h1>
              <p className="text-sm ">cameroun</p>
              <p className="text-xs tracking-normal">mange</p>
            </div>

            <div className="pt-2 flex gap-3 text-white">
              <img
                src="/avatar.jfif"
                alt="avatr"
                className="size-15 rounded-full "
              />
              <div>
                <h1 className="text-xl font-bold">DM.DEV237</h1>
                <p className="font-semibold">Developeur frontend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
