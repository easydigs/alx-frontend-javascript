/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  filename) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]);

  return results.map((o) => ({
    status: o.status,
    value: o.status === 'fulfilled' ? o.value : String(o.reason),
  }));
}
