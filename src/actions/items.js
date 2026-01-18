'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getBaseUrl } from '@/utils/api';

export async function addItem(prevState, formData) {
  const name = formData.get('name');
  const price = formData.get('price');
  const description = formData.get('description');
  const image = formData.get('image');

  if (!name || !price || !description || !image) {
      return { message: 'All fields are required' };
  }

  try {
    // Send as JSON since we are using Image URL now
    const res = await fetch(`${getBaseUrl()}/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, description, image }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Backend Error:', errorText);
      throw new Error('Failed to add item');
    }

    revalidatePath('/items');
    return { success: true };
  } catch (error) {
    console.error('Error adding item:', error);
    return { message: 'Failed to connect to server.' };
  }
}
