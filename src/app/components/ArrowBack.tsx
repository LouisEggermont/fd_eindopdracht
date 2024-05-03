"use client";
import { useRouter } from 'next/navigation'

const ArrowBack = () => {
    const router = useRouter();

    return (
        <svg onClick={() => router.back()} className='cursor-pointer mt-10 w-24 h-auto' viewBox="0 0 107 57">
            <path d="M-4519,5140.5l49-28.5v57Zm49,8.5v-17h58v17Z" transform="translate(4519 -5112)"/>
        </svg>
    );
}

export default ArrowBack;