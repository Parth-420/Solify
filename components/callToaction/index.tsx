import Link from "next/link";
import { Button } from "../ui/button";

export default function CallToAction() {
    return <div>
        <div className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-green-600 to-indigo-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to SOLIFY Your Future?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join the thousands of users who&apos;ve simplified their Solana experience with SOLIFY.
          </p>
          <Link href={"/dashboard"}>
            <Button className="px-8 py-6 bg-white text-green-600 rounded-lg hover:bg-gray-100  transition-colors font-semibold">
                Get Started with SOLIFY
            </Button>
          </Link>
        </div>
      </div>
    </div>
}