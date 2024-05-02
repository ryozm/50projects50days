'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
const Page = () => {
  const [imageList, setImageList] = useState([
    {
      url: 'https://picsum.photos/id/683/1350/900',
      title: 'Image 1',
    },
    {
      url: 'https://picsum.photos/id/684/1350/900',
      title: 'Image 2',
    },
    {
      url: 'https://picsum.photos/id/685/1350/900',
      title: 'Image 3',
    },
    {
      url: 'https://picsum.photos/id/686/1350/900',
      title: 'Image 4',
    },
    {
      url: 'https://picsum.photos/id/687/1350/900',
      title: 'Image 5',
    },
  ])

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[90vw] flex flex-row items-center justify-center gap-4">
        {imageList.map((item, index) => (
          <div
            className={`h-[80vh] relative rounded-[50px] cursor-pointer transition-[flex] duration-700 ease-in overflow-hidden`}
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              flex: activeIndex === index ? '10' : '1',
            }}
          >
            <Image alt="" src={item.url} style={{ objectFit: 'cover', height: '100%' }} width={1350} height={900} />
            <div className={`${activeIndex === index ? 'opacity-100 transition-all duration-700 ease-in-out' : 'opacity-0 '} absolute bottom-0 left-0 flex items-center justify-center`}>
              <div className="text-white p-4 ml-4 text-center">
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-4 left-4">
        <Link
          href={'/'}
          className="bg-white rounded-[50px] p-2 text-black flex justify-center items-center
        hover:ring-4 ring-indigo-500"
        >
          Back
        </Link>
      </div>
    </div>
  )
}

export default Page
