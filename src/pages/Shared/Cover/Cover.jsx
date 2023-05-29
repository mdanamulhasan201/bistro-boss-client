import { Parallax } from 'react-parallax';
const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 25 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]" >
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center bg-opacity-60 md:w-[1320px] md:h-[445px] bg-black text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;