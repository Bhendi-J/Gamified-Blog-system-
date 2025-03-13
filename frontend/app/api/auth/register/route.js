import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Make request to the backend API
    const response = await axios.post(
      `${process.env.BACKEND_URL}/api/users`,
      { name, email, password },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Return the response with the token
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Registration failed', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}