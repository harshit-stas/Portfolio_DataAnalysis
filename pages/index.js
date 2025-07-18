import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Harshit's Data Portfolio</title>
      </Head>
      <main className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        <h1 className="text-5xl font-bold z-10">Harshit Raman</h1>
        <p className="text-lg text-blue-300 mt-4 z-10">
          Transforming data into decisions. Statistics. Stories. Strategy.
        </p>

        <div className="flex gap-4 mt-6 z-10">
          <a href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">View Projects</a>
          <a href="/contact" className="border border-blue-500 text-blue-300 hover:text-white px-6 py-3 rounded-lg transition">Contact</a>
        </div>
      </main>
    </>
  )
}