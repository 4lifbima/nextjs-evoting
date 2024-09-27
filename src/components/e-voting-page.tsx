'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function EVotingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-900 text-white ">
      <header className="bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 sticky w-ful top-0 left-0 p-4 rounded-b-3xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/img/PPDB.png" alt="SMKN 1 Logo" width={40} height={40} className="rounded-full" />
            <div>
              <h2 className="font-bold">SMKN 1 KOTA GORONTALO</h2>
              <p className="text-xs">PROVINSI GORONTALO</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Beranda</a>
            <a href="#" className="hover:underline">Tentang</a>
            <a href="#" className="hover:underline">Informasi</a>
            <Button variant="secondary" className="bg-indigo-700 text-white hover:bg-indigo-600">Login</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">E-Voting</h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">SMKN 1 GORONTALO</h2>
            <p className="mb-6">Ayo voting pillihan kamu sekarang!!!!</p>
            <Button className="bg-indigo-700 text-white hover:bg-indigo-600">Login</Button>
          </div>
          <div className="md:w-1/2">
            <Image src="/img/PPDB.png" alt="Students" width={450} height={300} className="rounded-lg" />
          </div>
        </section>

        <section className="bg-indigo-800 rounded-3xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/img/About.png" alt="About Us Illustration" width={300} height={300} />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel congue quam, quis laoreet metus. Maecenas sem tellus, auctor id interdum faucibus, malesuada et nisi. Nullam id mattis leo. In ornare consectetur lorem at dignissim. Donec orci erat, ultrices sit amet tellus nec, pretium pulvinar quam.
              </p>
              <p>
                Etiam diam mauris, dignissim ac maximus in, dictum quis risus. Vestibulum tincidunt erat in risus suscipit convallis. Pellentesque auctor est venenatis turpis consequat, vitae ornare leo scelerisque. Quisque nec risus ut ligula euismod.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Informasi Sekolah</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="bg-indigo-800">
                <CardContent className="p-4">
                  <Image src="/placeholder.svg" alt={`Information ${item}`} width={300} height={200} className="rounded-lg mb-4" />
                  <h3 className="font-bold mb-2">Pendaftaran Osis</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel congue quam, quis laoreet metus. Maecenas sem tellus, auctor id interdum faucibus, malesuada et nisi.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}