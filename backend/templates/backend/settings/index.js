import devSettings from './dev.json'
import prodSettings from './prod.json'

let settings
process.env.NODE_ENV === 'prod' ? settings = prodSettings : settings = devSettings

export default settings
