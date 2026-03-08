export default function Description() {
  return (
    <div className="w-full absolute bottom-0 h-fit p-2 group-hover:h-full group-hover:p-0 group-hover:transition duration-300">
      <div className="bg-black/80 rounded-2xl p-3 w-full h-full ">
        <div className="text-white/70 h-full flex-col relative flex ">
          {/* details */}
          <div className=" hidden group-hover:block">
            <h3 className="text-xl mb-4 font-bold">Un Titre</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              temporibus exercitationem excepturi cupiditate vel!
            </p>
          </div>

          {/* infos */}
          <div className=" mt-auto">
            <div className=" font-bold italic border-b border-amber-500 pb-2">
              <h1 className="text-lg ">Afrique en Mignature</h1>
              <p className="text-sm ">Cameroun</p>
              <p className="text-xs tracking-normal">
                Berceau de nos ancêtre, "Paix-Travail-Patrie"
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <img
                src="/avatar.jfif"
                alt="avatr"
                className="size-10 rounded-full ring-2 ring-amber-500"
              />
              <div>
                <h1 className="text-md font-bold">DM.DEV237</h1>
                <p className="text-xs font-semibold">Developeur frontend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
