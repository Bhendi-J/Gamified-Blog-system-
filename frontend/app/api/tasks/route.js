import { NextResponse } from 'next/server';
import axios from 'axios';
import { headers } from 'next/headers';

// Get all tasks
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
      `${process.env.BACKEND_URL}/api/tasks`,
      {
        headers: {
          'x-auth-token': token
        }
      }
    );

    // Return the tasks data
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Get tasks error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Failed to retrieve tasks', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}

// Create a new task
export async function POST(request) {
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
    const response = await axios.post(
      `${process.env.BACKEND_URL}/api/tasks`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      }
    );

    // Return the created task
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Create task error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Failed to create task', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}