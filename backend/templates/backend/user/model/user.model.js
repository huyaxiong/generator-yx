import mongoose from 'mongoose'

const schema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  mobile: String,
  // role: {userType: Schema.Types.ObjectId, ref: 'Role'},
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
})
const User = mongoose.model('User', schema)

export default User
