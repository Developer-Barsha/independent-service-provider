import React from 'react';
import './Demos.css'

const Demos = () => {
    return (
        <section>
            <h1 className="text-4xl text-center mt-12 mb-6">MY DEMOS</h1>

            <div className='flex demos justify-center gap-3 px-5'>
                <div className='flex flex-col gap-3 demos-part'>
                    <div className='long-img flex justify-center gap-3'>
                        <img src="https://i.pinimg.com/originals/16/71/df/1671df65ef77e4b5d651f9b9b8f84b64.jpg" alt="" />
                        <img src="https://i.pinimg.com/originals/14/b1/74/14b174b835a6bdf5caaf4194a3dcb90b.jpg" alt="" />
                    </div>
                    <div className='short-img flex justify-center'>
                        <img src="https://wallpapers.com/images/high/aesthetic-cottagecore-white-flowers-4041o61g5dypdbt6.jpg" alt="" />
                    </div>
                </div>

                <div className='flex flex-col gap-3 demos-part'>
                    <div className='short-img flex justify-center'>
                        <img src="https://i.pinimg.com/originals/5d/da/fd/5ddafd227b61c04442cf0d9ea36b35f1.jpg" alt="" />
                    </div>

                    <div className='long-img flex justify-center gap-3'>
                        <img src="https://images.unsplash.com/photo-1596542519315-6db93bdf7548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />

                        <img src="https://www.wallpapersun.com/wp-content/uploads/2021/09/cottagecore-wallpapersun-11-715x1285.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demos;