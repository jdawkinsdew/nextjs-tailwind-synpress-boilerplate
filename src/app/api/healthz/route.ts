import { NextResponse } from 'next/server';

export async function GET(_: Request) {
  return NextResponse.json('API route is working!');
}