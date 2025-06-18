import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="col-start-1 col-end-13 grid grid-cols-12 py-[80px] gap-[30px] items-center">

            <div className="col-start-1 col-end-7 w-full h-[571px] flex flex-col gap-[48px] justify-between items-start">
                <div className="h-[184px] w-[538px] flex flex-col justify-between gap-[16px]">
                    <h3 className="font-[600] leading-[120%] text-[#161723] text-[36px]">Nutrition is the foundation for longer, healthier lives in dogs.</h3>
                    <h3 className="font-[400] leading-[150%] tracking-[0.5px] text-[#424153] text-[16px]">Invest in your dog&apos;s future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.</h3>
                </div>

                <div className='flex flex-col w-[538px] h-[243px] gap-[16px]'>
                    <p className='font-semibold text-[19px] leading-[150%] tracking-[0.5px] text-[#161723]'>Key Points:</p>

                    <div className='flex flex-col gap-[12px]'>
                        <div className='flex flex-row gap-[48px]'>
                            <p className='font-[700] text-[#EE6F4B] text-[33px]'>97%</p>
                            <p className='font-[400] text-[#424153] text-[16px]'>Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</p>
                        </div>

                        <div className="w-full border-[1px] border-[#E3E3E8]"></div>
                        
                        <div className='flex flex-row gap-[48px]'>
                            <p className='font-[700] text-[#EE6F4B] text-[33px]'>84%</p>
                            <p className='font-[400] text-[#424153] text-[16px]'>Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p>
                        </div>

                        <div className="w-full border-[1px] border-[#E3E3E8]"></div>
                        
                        <div className='flex flex-row gap-[48px]'>
                            <p className='font-[700] text-[#EE6F4B] text-[33px]'>92%</p>
                            <p className='font-[400] text-[#424153] text-[16px]'>Our dog food&apos;s high protein and fat digestibility contribute to ideal stool quality.</p>
                        </div>
                    </div>
                </div>
                
                <div className='w-full h-[48px]'>
                    <button className="w-full h-full py-[12px] px-[40px] bg-[#EE6F4B] rounded-[6px]">
                        <p className="font-semibold text-[16px] leading-[150%] tracking-[0.5px] text-[#ffffff]">Give your furry friend the gift of wholesome nutrition</p>
                    </button>
                </div>
            </div>

            <div className='col-start-7 col-end-13  h-[570px] flex justify-center items-end'>
                <Image
                    width={570}
                    height={570}
                    src={'/images/dogandfeed.png'}
                    alt="Image of dog with feed"
                    className="object-cover rounded-[10px] h-[570px] w-full" />
            </div>

        </section>
    )
}
