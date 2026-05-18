import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

export const generateMetadata = async({params}) =>{
     const { id } = await params
     console.log(id);
    const news = await getNewsDetailsById(id);
    console.log(news)

    return {
    title: news.title,
    description: news.details,
  }
}
const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    // console.log(id)
    const news = await getNewsDetailsById(id);
    console.log(news)
    return (
        <div className='max-w-4xl mx-auto my-8'>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    {/* author info */}
                    <div className='flex justify-between items-center bg-slate-200 p-4'>
                        <div className='flex gap-1 items-center'>
                            <Image
                                src={news.author?.img}
                                alt={news.author?.name}
                                height={40}
                                width={40}
                                className='rounded-full'
                            />
                            <div>
                                <h2 className='font-semibold'>{news.author?.name}</h2>
                                <p className='text-xs'>{news.author?.published_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiShare2 className='text-xl' />
                            <CiBookmark className='text-xl' />
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>

                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            width={300}
                            height={300}
                            className='w-full'
                        />
                    </figure>
                    <p className="">{news.details}</p>
                    <div className="mt-4 flex items-center">
                        <Link href={`/category/${news.category_id}`}>
                            <button className='btn bg-pink-800 text-white'>See other news for this category<BsArrowRight /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;