export default function Description() {
  return (
    <div className="w-85 bg-blue-800 rounded-2xl p-3 absolute bottom-6">
      <div className="text-white font-bold italic border-b-2 border-white pb-2">
        <h1 className="text-lg ">Afrique en Mignature</h1>
        <p className="text-sm ">cameroun</p>
        <p className="text-xs tracking-normal"> mange</p>
      </div>

      <div className="pt-2 flex gap-3 text-white">
        <img src="/avatar.jfif" alt="avatr" className="size-15 rounded-full " />
        <div>
          <h1 className="text-xl font-bold">DM.DEV237</h1>
          <p className="font-semibold">Developeur frontend</p>
        </div>
      </div>
    </div>
  );
}
