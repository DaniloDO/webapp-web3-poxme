import { ConnectButton } from "@rainbow-me/rainbowkit";
import StakingDetails from "@/components/widgets/staking-details";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p
            className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Proof of X&nbsp;
            <code className="font-mono font-bold">Web3 Center</code>
          </p>
        </div>
        <div
          className="flex lg:h-48 w-full justify-center bg-gradient-to-t from-white via-white mt-14 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectButton/>
        </div>
      </header>

      <div
        className="relative flex place-items-center">
        <StakingDetails/>
      </div>
    </main>
  )
}
