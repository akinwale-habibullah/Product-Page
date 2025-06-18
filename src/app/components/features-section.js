import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full flex flex-col items-center py-[80px] gap-[80px] col-start-1 col-end-13">
        
        <div className="w-full h-[480px] grid grid-cols-12 gap-[30px] items-center">
            <div className='col-start-1 col-end-7 h-[480px] flex justify-center items-end'>
                <Image
                    width={570}
                    height={480}
                    src={'/images/dogseating.gif'}
                    alt="Image of dog with feed"
                    className="object-cover rounded-[10px] h-[480px] w-[570px]" />
            </div>

            <div className='col-start-7 col-end-13 pl-[32px] h-[280px] w-full flex flex-col gap-[16px] justify-center items-end tracking-[0.5px]'>
                <p className='font-semibold text-[40px] leading-[120%] text-[#161723]'>
                  Improve overall gastrointestinal health for better nutrient absorption
                </p>
                <p className='font-[400] text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] w-[538px]'>
                  Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
                </p>
            </div>
        </div>

        <div className="w-full h-[480px] grid grid-cols-12 gap-[30px] items-center">
            <div className='col-start-1 col-end-7 h-[280px] w-full flex flex-col gap-[16px] justify-center items-start'>
                <p className='font-semibold text-[40px] leading-[120%] text-[#161723]'>
                  Prebiotics nourish the beneficial gut bacteria, supporting digestive health
                </p>
                <p className='font-[400] text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] w-[538px]'>
                  Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
                </p>
            </div>

            <div className='col-start-7 col-end-13 h-[480px] flex justify-center items-end'>
                <Image
                    width={570}
                    height={480}
                    src={'/images/cookies2.jpg'}
                    alt="Image of dog with feed"
                    className="object-cover rounded-[10px] h-[480px] w-[570px]" />
            </div>
        </div>

    </section>
  );
}
