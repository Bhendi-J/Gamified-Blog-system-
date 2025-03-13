import { NextResponse } from 'next/server';
import axios from 'axios';
import { headers } from 'next/headers';

// Get task by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
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
      `${process.env.BACKEND_URL}/api/tasks/${id}`,
      {
        headers: {
          'x-auth-token': token
        }
      }
    );

    // Return the task data
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Get task error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Failed to retrieve task', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}

// Update task
export async function PUT(request, { params }) {
  try {
    const { id } = params;
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
      `${process.env.BACKEND_URL}/api/tasks/${id}`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      }
    );

    // Return the updated task
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Update task error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Failed to update task', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}

// Delete task
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const headersList = headers();
    const token = headersList.get('x-auth-token');

    if (!token) {
      return NextResponse.json(
        { message: 'No token, authorization denied' },
        { status: 401 }
      );
    }

    // Make request to the backend API
    const response = await axios.delete(
      `${process.env.BACKEND_URL}/api/tasks/${id}`,
      {
        headers: {
          'x-auth-token': token
        }
      }
    );

    // Return success message
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Delete task error:', error.response?.data || error.message);
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        message: error.response?.data?.msg || 'Failed to delete task', 
        errors: error.response?.data?.errors || [] 
      },
      { status: error.response?.status || 500 }
    );
  }
}