import Image from "next/image";

export default function Footer() {
    return (
        <footer className="dark:bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm flex items-center">
                        <Image src="/images/logo.png" alt="logo" width={32} height={32} className="mr-2" />
                        <p className="ml-2">© 2024 HP COMPUTER. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-8">
                        <a href="/privacy-policy" className="hover:underline">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="hover:underline">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
