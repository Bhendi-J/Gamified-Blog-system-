import { NextResponse } from 'next/server';
import axios from 'axios';
import { headers } from 'next/headers';

export async function GET(request) {
  try {
    const headersList = headers();
    const token = headersList.get('x-auth-token');

    if (!token) {
      return NextResponse.json(
        { message: 'No token, authorization denied' },
        { status: 401 }
      );
    }

    // Make request to the backend API
    const response = await axios.get(
      `${process.env.BACKEND_URL}/api/auth`,
      {
        headers: {
          'x-auth-token': token
        }
      }
    );

    // Return the user data
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Get user error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Authorization failed', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const headersList = headers();
    const token = headersList.get('x-auth-token');
    const body = await request.json();

    if (!token) {
      return NextResponse.json(
        { message: 'No token, authorization denied' },
        { status: 401 }
      );
    }

    // Make request to the backend API
    const response = await axios.put(
      `${process.env.BACKEND_URL}/api/users/profile`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      }
    );

    // Return the updated user data
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Update profile error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Profile update failed', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}