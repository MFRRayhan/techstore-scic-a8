import { NextResponse } from 'next/server';
import { getAllItems, addItem } from '@/lib/items';

export async function GET() {
  const items = getAllItems();
  return NextResponse.json(items);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newItem = addItem(body);
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
