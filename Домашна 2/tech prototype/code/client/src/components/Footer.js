import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        <div className="bg-slate-900 font-poppins h-fit px-3 py-16">
            <div className="max-w-screen-2xl mx-auto text-white text-xs">
                <div className="flex items-top justify-center gap-32">
                    <div className="inline-block text-center">
                        <span className="font-semibold">Explore</span>
                        <div className="mt-2 flex flex-col items-center">
                            <a
                                href="/home"
                                className="block text-white no-underline hover:underline py-1 w-fit"
                            >
                                Home
                            </a>
                            <a
                                href="/library"
                                className="block text-white no-underline hover:underline py-1 w-fit"
                            >
                                Library
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-4 border-t border-zinc-800 text-zinc-300 pt-3 text-center">
                    Copyright &copy; 2025 Tojota Crypto Tracker App. All rights reserved.
                </div>
            </div>
        </div>
    );
}
