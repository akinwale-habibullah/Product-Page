import Image from 'next/image';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
    ReactCompareSliderHandle
} from 'react-compare-slider';

export default function HeroSection() {
return (
    <section className="w-full flex flex-col items-center py-[80px] gap-[48px] col-start-1 col-end-13">
        <div className="flex justify-center items-center h-[96px] w-[536px]">
            <h1 className="flex justify-center items-center font-semibold text-center text-[40px] leading-[120%] tracking-[0.25px] font-[#161723]">
                What makes us different makes them stronger
            </h1>
        </div>

        <div className="w-full h-370px grid grid-cols-12 gap-[48px] justify-between items-center">
            <div className="col-start-1 col-end-5 h-[250px] flex flex-col gap-[80px] justify-between">
                <div className="flex flex-col h-[250px] justify-between">
                    <div className="w-full flex flex-row items-center gap-[24px]">
                        <div>
                            <div className='h-[60px] w-[60px] bg-[#DCF9CA] flex justify-center items-center rounded-full'>
                                <Image
                                    width={36}
                                    height={36}
                                    src={'/images/food.png'}
                                    alt="Food Image"
                                    className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-[19px] font-semibold leading-[120%] tracking-[0.25px] text-[#161723]">Real Food</h3>
                            <p className="text-[16px] font-[400] leading-[150%] tracking-[0.5px] text-[#424153]">Wholesome recipes for dogs with real meat and veggies.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-[250px] justify-between">
                    <div className="w-full flex flex-row items-center gap-[24px]">
                        <div>
                            <div className='h-[60px] w-[60px] bg-[#DCF9CA] flex justify-center items-center rounded-full'>
                                <Image
                                    width={36}
                                    height={36}
                                    src={'/images/ingredient.png'}
                                    alt="Food Image"
                                    className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-[19px] font-semibold leading-[120%] tracking-[0.25px] text-[#161723]">Premium Ingredient</h3>
                            <p className="text-[16px] font-[400] leading-[150%] tracking-[0.5px] text-[#424153]">Elevating pet care with unmatched safety and quality.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-start-5 col-end-9 h-[370px]">
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="/images/meat.png" alt="Image of meat and dog food" />}
                    itemTwo={<ReactCompareSliderImage src="/images/cookie.png" alt="Image of dog cookies" />}
                    handle={<ReactCompareSliderHandle
                        style={{color: '#EE6F4B' }}
                        buttonStyle={{ backgroundColor: '#ffffff' }}
                    />}
                />
            </div>

            <div className="col-start-9 col-end-13 h-[250px] flex flex-col gap-[80px] justify-between">
                <div className="flex flex-col h-[250px] justify-between">
                    <div className="w-full flex flex-row items-center gap-[24px]">
                        <div>
                            <div className='h-[60px] w-[60px] bg-[#DCF9CA] flex justify-center items-center rounded-full'>
                                <Image
                                    width={36}
                                    height={36}
                                    src={'/images/fresh.png'}
                                    alt="Food Image"
                                    className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-[19px] font-semibold leading-[120%] tracking-[0.25px] text-[#161723]">Made Fresh</h3>
                            <p className="text-[16px] font-[400] leading-[150%] tracking-[0.5px] text-[#424153]">We prioritize maintaining the integrity of whole foods and nutrition.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-[250px] justify-between">
                    <div className="w-full flex flex-row items-center gap-[24px]">
                        <div>
                            <div className='h-[60px] w-[60px] bg-[#DCF9CA] flex justify-center items-center rounded-full'>
                                <Image
                                    width={36}
                                    height={36}
                                    src={'/images/vet.png'}
                                    alt="Food Image"
                                    className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-[19px] font-semibold leading-[120%] tracking-[0.25px] text-[#161723]">Vet Developed</h3>
                            <p className="text-[16px] font-[400] leading-[150%] tracking-[0.5px] text-[#424153]">We raise the bar for dog nutrition, surpassing industry expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full py-[12px] px-[40px] flex flex-col gap-[10px] justify-center items-center">
            <div className="w-[464px] h-[88px] flex flex-col justify-between">
                <div className='w-[462px] h-[48px]'>
                    <button className="w-full h-full bg-[#EE6F4B] rounded-[6px] hover:bg-[#ee6e4bd4]">
                        <p className="text-[16px] leading-[150%] tracking-[0.5px] text-[#ffffff]">Get your dog&apos;s healthy meal today!</p>
                    </button>
                </div>

                <div className="w-full h-[24px] flex flex-row justify-between items-center">
                    <div className="h-[20px] flex flex-row justify-between items-center gap-[8px]">
                        <Image
                            width={16}
                            height={16}
                            src={'/images/shield.png'}
                            alt="Shield Icon"
                            className="object-cover" />
                        
                        <div className='h-[20px] flex flex-col justify-between items-start'>
                            <p className="text-[13px] font-[400] leading-[150%] tracking-[0.5px] text-[#424153]">30-day money back guarantee</p>
                        </div>
                    </div>

                    <div className='w-[228px] h-[24px] flex flex-row justify-between items-center gap-[8px]'>
                        <Image
                            width={39.2}
                            height={24}
                            src={'/images/paypal.png'}
                            alt="Clock Icon"
                            className="object-cover" />

                        <Image
                            width={39.2}
                            height={24}
                            src={'/images/visa.png'}
                            alt="Clock Icon"
                            className="object-cover" />

                        <Image
                            width={39.2}
                            height={24}
                            src={'/images/mastercard.png'}
                            alt="Clock Icon"
                            className="object-cover" />

                        <Image
                            width={39.2}
                            height={24}
                            src={'/images/applepay.png'}
                            alt="Clock Icon"
                            className="object-cover" />

                        <Image
                            width={39.2}
                            height={24}
                            src={'/images/googlepay.png'}
                            alt="Clock Icon"
                            className="object-cover" />
                    </div>
                </div>

            </div>
        </div>
    </section>
);
}
