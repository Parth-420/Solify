import { Wallet, Coins, Zap, ArrowUpDown } from "lucide-react";

export default function Features() {
  return (
    <div>
      <div id="features-section" className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          Why Choose SOLIFY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center p-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowUpDown className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Ultra-Low Fees</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Experience transactions for less than $0.01 on Solana&apos;s network.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Self-Custodial</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Full control of your assets with secure, non-custodial wallets.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Blazing Fast</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Experience lightning-fast transactions with Solana&apos;s 3,000+ TPS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
