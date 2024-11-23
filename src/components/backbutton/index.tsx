'use client'
 
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function BackButton({rota}: {rota: string}) {
    const router = useRouter()

  return (
    <button
      className="flex items-center gap-2 text-sm text-gray-500"
        onClick={() => router.back()}
    >
      <ArrowLeft className='w-8 h-8'/>
    </button>
  );
}