import IUserProfile from '@/frontend/interfaces/IUserProfile';

export default function checkRegister(user: IUserProfile): boolean {
  const { userName, userEmail, userPass, userImg } = user;
  const userNameOk = userName.length > 2 && userName.length < 31;
  const regexEmail = /\S+@\S+\.\S+/;
  const userEmailOk = regexEmail.test(userEmail);
  const userPassOk = userPass.length > 5;
  const userImgOk = userImg.length > 1;

  return userNameOk && userEmailOk && userPassOk && userImgOk;
}
