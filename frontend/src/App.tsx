import illustration from './assets/illustration.png'
import { formatter } from './utils/numbers'

function App() {
  const treasuryBalance = '1111.111111111111111111'
  const marketSize = '1111.11'

  return (
    <div className="mx-auto h-full w-full max-w-5xl px-2 pt-16 sm:px-6">
      <div className="flex flex-col-reverse overflow-hidden rounded-3xl bg-[#282931] md:flex-row">
        <div className="flex w-full flex-col gap-3 p-4 text-center md:max-w-[265px] md:p-6 md:text-left">
          {[
            {
              label: 'Treasury balance',
              value: formatter.token(Number(treasuryBalance)),
            },
            {
              label: 'Market size',
              value: formatter.usd(Number(marketSize)),
            },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <p className="font-semibold">{label}</p>
              <p className="text-[1rem] text-[#9597A1]">{value}</p>
            </div>
          ))}
          <button className="mt-0.5 cursor-pointer rounded-lg bg-[#3A78FF] px-6 py-3 md:mt-3 md:w-fit">
            Refresh
          </button>
        </div>
        <div className="relative flex min-h-[236px] w-full justify-center overflow-hidden bg-white/4 md:min-h-[265px] md:bg-transparent">
          <img
            alt=""
            src={illustration}
            className="absolute top-0 w-[410px] max-w-[410px] min-w-[410px] md:-top-16 md:left-0 md:w-[715px] md:max-w-[715px] md:min-w-[715px]"
          />
        </div>
      </div>
    </div>
  )
}

export default App
