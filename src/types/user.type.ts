// {
//   "message": "Đăng ký thành công",
//   "data": {
//       "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImQxQGdkZnNzc21haWwuY29tIiwiaWQiOiI2NzA3ZmMwMGJhNjE0YTM3ZjhjOGExOWMiLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTEwVDE2OjA4OjMyLjM3MFoiLCJpYXQiOjE3Mjg1NzY1MTIsImV4cCI6MTcyOTE4MTMxMn0.QXHwZjVV0h78xtYXvEGOqaUnXh69lEapLB0SlOtPAv8",
//       "expires": 604800,
//       "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImQxQGdkZnNzc21haWwuY29tIiwiaWQiOiI2NzA3ZmMwMGJhNjE0YTM3ZjhjOGExOWMiLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTEwVDE2OjA4OjMyLjM3MFoiLCJpYXQiOjE3Mjg1NzY1MTIsImV4cCI6MTczNzIxNjUxMn0.U8kANx2PAW1ouj7kaeczxP6hXEswDvJ7VrS-_EGufUM",
//       "expires_refresh_token": 8640000,
//       "user": {
//           "roles": [
//               "User"
//           ],
//           "_id": "6707fc00ba614a37f8c8a19c",
//           "email": "d1@gdfsssmail.com",
//           "createdAt": "2024-10-10T16:08:32.332Z",
//           "updatedAt": "2024-10-10T16:08:32.332Z",
//           "__v": 0
//       }
//   }
// }

// {
//   "message": "Đăng nhập thành công",
//   "data": {
//       "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDdmYzAwYmE2MTRhMzdmOGM4YTE5YyIsImVtYWlsIjoiZDFAZ2Rmc3NzbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTEwVDE2OjExOjIzLjk1NFoiLCJpYXQiOjE3Mjg1NzY2ODMsImV4cCI6MTcyOTE4MTQ4M30.3IIwe-7JepQv4CRWVezyCNYhlZF08TBm10iMLhdB7NA",
//       "expires": 604800,
//       "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDdmYzAwYmE2MTRhMzdmOGM4YTE5YyIsImVtYWlsIjoiZDFAZ2Rmc3NzbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTEwVDE2OjExOjIzLjk1NFoiLCJpYXQiOjE3Mjg1NzY2ODMsImV4cCI6MTczNzIxNjY4M30.RMVMlOI71vw-c0pvVutapsNOyAT-UFJJpNZ68bpte0U",
//       "expires_refresh_token": 8640000,
//       "user": {
//           "_id": "6707fc00ba614a37f8c8a19c",
//           "roles": [
//               "User"
//           ],
//           "email": "d1@gdfsssmail.com",
//           "createdAt": "2024-10-10T16:08:32.332Z",
//           "updatedAt": "2024-10-10T16:08:32.332Z",
//           "__v": 0
//       }
//   }
// }
type Role = 'User' | 'Admin'
export interface User {
  _id: string,
  roles: Role[],
  email: string,
  name?: string,
  date_of_birth?: string
  avatar?: string
  address?: string
  phone?: string
  createdAt: string,
  updateAt: string
}