import IUserProfile from '@/frontend/interfaces/IUserProfile';

export async function registerUser(user: IUserProfile) {
  const { userName, userEmail, userPass, userImg } = user;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/user/register`,
    {
      method: 'POST',
      body: JSON.stringify({
        userName,
        userEmail,
        userPass,
        userImg
      }),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const { message } = await response.json();

  return { status: response.status, message };
}

export async function loginUser(userEmail: string, userPass: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/user/login`,
    {
      method: 'POST',
      body: JSON.stringify({
        userEmail,
        userPass
      }),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const { message } = await response.json();

  return { status: response.status, message };
}
