export function removeLocalStorage() {
  console.log('removeLocalStorage');
  localStorage.removeItem('username');
  localStorage.removeItem('userNickName');
  localStorage.removeItem('profileImageSmallUrl');
  localStorage.removeItem('hasWallet');
  localStorage.removeItem('validStatus');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}