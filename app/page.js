import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>PieChat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-10 flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to PieChat</h1>
          <p className="text-lg md:text-xl mb-8">
            Your delightful and easy-to-use chat app. Connect with friends and family effortlessly.
          </p>
          <Link href="/chat" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Chatting
          </Link>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
              <p>Instantly connect with your loved ones and enjoy seamless, real-time conversations.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 11.414V8m0 0h6" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
              <p>Easily create group chats to stay connected with your friends, family, or colleagues.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm0 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
              <p>Share photos, videos, and documents seamlessly with your contacts.</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
              <p>Limited features, perfect for casual users.</p>
              <span className="text-2xl font-bold">Free</span>
              <Link href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Try for Free
              </Link>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
              <p>Unlock advanced features for power users.</p>
              <span className="text-2xl font-bold">$9.99/month</span>
              <Link href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Get Pro
              </Link>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
              <p>Customizable solutions for businesses.</p>
              <span className="text-2xl font-bold">Contact Us</span>
              <Link href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


export const metadata = {
  title: "Home - PieChat",
  description: "Piechat helps you connect with people of your choice"
}