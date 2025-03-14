import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Make request to the backend API
    const response = await axios.post(
      `${process.env.BACKEND_URL}/api/auth`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Get token from response
    const { token } = response.data;
    
    // Create response object
    const nextResponse = NextResponse.json({ 
      success: true, 
      token 
    });
    
    // Set cookie in the response
    nextResponse.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      sameSite: 'strict'
    });
    
    return nextResponse;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        success: false,
        message: error.response?.data?.msg || 'Login failed', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}