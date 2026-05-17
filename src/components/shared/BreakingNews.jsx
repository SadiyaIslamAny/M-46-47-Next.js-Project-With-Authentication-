import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the city",
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship",
    },
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between items-center gap-4 bg-gray-200 py-4 px-4 container mx-auto'>
            <button className='btn bg-pink-800 text-white '>Latest News</button>
            <Marquee pauseOnHover = {true} speed={100}>
                {
                    news.map(n => (
                        <span key={news._id}>{n.title}</span>
                    ))
                }
            </Marquee>

        </div>
    );
};

export default BreakingNews;