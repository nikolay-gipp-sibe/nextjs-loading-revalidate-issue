
'use client';
import { revalidateTestTag } from './revalidate-test-tag.action';

export const Button = () => {
  return (
    <div>
      <button
        className='w-auto p-3 bg-slate-500'
        onClick={() => {
          revalidateTestTag();
        }}>Click me</button>
    </div>
  );
};
