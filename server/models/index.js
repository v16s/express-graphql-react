import { model, Schema } from 'mongoose'
let Sample = model('Sample', { _id: String, name: String }, 'Sample')
export default Sample
