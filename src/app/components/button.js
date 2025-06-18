export default function Button({ title }) {
    return (
        <button className="w-full h-full bg-[#EE6F4B] rounded-[6px]">
            <p className="font-semibold text-[16px] leading-[150%] tracking-[0.5px] text-[#ffffff]">{title}</p>
        </button>
    );
}