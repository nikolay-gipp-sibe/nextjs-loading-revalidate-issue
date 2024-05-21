'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateTestTag(): Promise<void> {
  revalidateTag('test');
  await Promise.resolve();
}