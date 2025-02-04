import { User } from "../types/user.type"
import { http } from "../utils/http"

const Profile = {
  getProfile() {
    return http.get<User>('/me')
  },
  changePassword: () => {

  },
  uploadAvatar: (image: File) => {
    const formData = new FormData()
    formData.append('image', image)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return http.post('/user/upload-avatar', formData, config)
  }
}
export default Profile