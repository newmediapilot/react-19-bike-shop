import NavGlobal from '@local/components/NavGlobal';
import * as React from 'react';
import { useNavigate } from 'react-router';

/**
 * Post mock
 * @constructor
 */
function PPreview() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/listings');
    };
    return (
        <main className="grid">
            <header className="h-[5vh] sticky top-[0] bg-black">
                <NavGlobal />
            </header>
            <article
                className={`
                      box-border
                      p-4
                      w-[100%]
                      h-auto
                      block
                      md:h-[95vh]
                      sm:grid 
                      sm:gap-5 
                      sm:grid-cols-3 
                      md:grid-cols-4 
                `}
            >
                <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 col-start-1 col-end-4 row-start-1 row-end-2">
                    <div
                        style={{
                            background:
                                "url('https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg')",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                        className="pb-[50%] border-2 border-dotted border-gray-400 flex justify-center items-center max-w-full"
                    ></div>
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="pb-[50%] border-2 border-dotted border-gray-400 flex justify-center items-center max-w-full"
                        >
                            <button className="mt-[10px] btn preset-filled whitespace-nowrap">
                                Upload Photo
                            </button>
                        </div>
                    ))}
                </section>
                <section className="col-start-1 col-end-3 row-start-2 row-end-4 sm:grid-rows-none">
                    <div className="border-b-3 pb-3 pt-3">
                        <dt className="h6">Specifications</dt>
                    </div>
                    <div className="px-[5%] flex justify-between items-center grid-cols-3 border-b border-dotted min-h-[40px]">
                        <dt className="font-bold">Component</dt>
                        <dd>Value</dd>
                        <dd>Customized</dd>
                    </div>
                    <div className="px-[5%] flex  justify-between items-center grid-cols-3 border-b border-dotted min-h-[40px]">
                        <b>Brakes</b>
                        <dt>Disc</dt>
                        <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                            No
                        </span>
                    </div>
                    <div className="px-[5%] flex justify-between items-center grid-cols-3 border-b border-dotted min-h-[40px]">
                        <b>Tires</b>
                        <dt>700x32c</dt>
                        <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                            Yes
                        </span>
                    </div>
                    <div className="px-[5%] flex justify-between items-center grid-cols-3 border-b border-dotted min-h-[40px]">
                        <b>Frame</b>
                        <dt>Aluminum</dt>
                        <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                            No
                        </span>
                    </div>
                    <div className="px-[5%] flex justify-between items-center grid-cols-3 border-b border-dotted min-h-[40px]">
                        <b>Saddle</b>
                        <dt>Comfort</dt>
                        <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                            Yes
                        </span>
                    </div>
                    <div className="px-[5%] flex justify-between items-center grid-cols-3 border-b border-dotted min-h-[40px]">
                        <b>Pedals</b>
                        <dt>Flat</dt>
                        <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                            Yes
                        </span>
                    </div>
                    <h5 className="h5 my-3">Customizations</h5>
                    <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                        custom-pedals
                    </span>
                    <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                        custom-saddle
                    </span>
                    <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                        custom-tires
                    </span>
                </section>
                <section className="col-start-3 col-end-4 row-start-2 row-end-4 sm:grid-rows-none">
                    <div className="border-b-3 pb-3 pt-3">
                        <h6 className="h6">Asking Price</h6>
                    </div>
                    <p className="text-3xl">$ 1,890.00</p>
                </section>
                <section className="col-start-4 col-end-5 row-start-2 row-end-4 sm:grid-rows-none">
                    <div className="border-b-3 pb-3 pt-3">
                        <h6 className="h6">How will it be delivered</h6>
                    </div>
                    <p className="text-3xl">Parcel</p>
                </section>
                <section className="col-start-3 col-end-4 row-start-3 row-end-5 sm:grid-rows-none">
                    <div className="border-b-3 pb-3 pt-3">
                        <h6 className="h6">Customizations</h6>
                    </div>
                    <p className="text-base pt-3 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                <section className="col-start-4 col-end-5 row-start-3 row-end-5 sm:grid-rows-none mb-[25vh]">
                    <div className="border-b-3 pb-3 pt-3">
                        <h6 className="h6">Tags</h6>
                    </div>
                    <p className="pt-3">
                        <span className="chip border-[1px] border-dotted mr-2 mb-2 pointer-events-none">
                            custom-tires
                        </span>
                        <span className="chip border-[1px] border-dotted mr-2 mb-2 pointer-events-none">
                            custom-saddle
                        </span>
                        <span className="chip border-[1px] border-dotted mr-2 mb-2 pointer-events-none">
                            custom-tires
                        </span>
                        <span className="chip border-[1px] border-dotted mr-2 mb-2 pointer-events-none">
                            disc-brakes
                        </span>
                        <span className="chip border-[1px] border-dotted mr-2 mb-2 pointer-events-none">
                            aluminum-frame
                        </span>
                    </p>
                </section>
                <section className="p-4 fixed w-[100%] bottom-[0] mx-[-16px] bg-black col-start-1 col-end-4 row-start-4 row-end-5 sm:grid-rows-none flex flex-col justify-center items-center border-[1px] border-dotted">
                    <button onClick={onClick} className="btn preset-filled whitespace-nowrap">
                        Post My Bike
                    </button>
                </section>
            </article>
        </main>
    );
}

export default PPreview;
