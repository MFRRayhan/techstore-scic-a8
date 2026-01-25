import { NextResponse } from 'next/server';
import itemsData from '@/data/items.json';

// We need to reference the same in-memory array if we want persistence within the same lambda instance,
// but for simplicity and since imports are cached, reusing the import might work for read-only baselines.
// For the purpose of this mock, reading from the source is fine for ID lookups.
let items = [...itemsData];

export async function GET(request, { params }) {
  const { id } = await params;
  const item = items.find(i => i.id == id);

  if (!item) {
    return NextResponse.json({ message: 'Item not found' }, { status: 404 });
  }

  return NextResponse.json(item);
}
