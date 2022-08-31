import {get,post} from './http'
const baseUrl='http://117.145.217.182:9002'
const baseUrlActive='http://192.168.3.190:8991'
const baseApi = {
  Login: '/signIn',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info',
  UserMenu: '/user/nav',
  MeberList:'http://apis.juhe.cn/lottery/types'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */

// export function apiAddress (parameter) {
//   return request({
//     url: baseUrl+baseApi,
//     method: 'post',
//     data: parameter
//   })
// }
export { baseUrl }
export { baseUrlActive }
export const apiAddress = param => post('https://api.apiopen.top/getJoke?page=1&count=2&type=video', param)
// export const apiLogin = param => post(baseUrl+'/signIn', param)
 export const apiLogin = param => post(baseUrl+'/akt/api/account/applogin', param)

export const apiUserList = param => post(baseUrl+'/getAllUserName', param)
export const apiRegistered = param => post(baseUrl+'/signUp', param)
export const apiDeleteList = param => post(baseUrl+'/delAccount', param)
export const apiEditList = param => post(baseUrl+'/rewriteInfo', param)
export const apiAuthorizationList = param => post(baseUrl+'/authorization', param)
export const apiUserNameList = param => post(baseUrl+'/getUserName', param)
// export const apiUploadlyric= param => post(baseUrl+'/uploadFile?key=admin&fileName=url.txt&type=lyric', param)
// export const apiUploadcomplete = param => post(baseUrl+'/uploadFile?key=admin&fileName=url.txt&type=complete', param)
export const apiCommitDemo = param => post(baseUrl+'/commitDemo', param)
export const apigetSongInfo= param => post(baseUrl+'/getProductionSong', param)
export const apigetPublishSong= param => post(baseUrl+'/getPublishSong', param)

export const apiUploadMix= param => post(baseUrl+'/uploadFile?key=admin&fileName=url.txt&type=mix', param)
export const apiUploadLyric= (key,param) => post(baseUrl+`/uploadFile?key=${key}&fileName=url.txt&type=lyric`, param)
export const apiUploadComplete= (key,param) => post(baseUrl+`/uploadFile?key=${key}&fileName=url.txt&type=mp3`, param)
export const apiUploadCommitMix= param => post(baseUrl+'/commitFinishedProduct', param)
export const apiDownloadFile= param => post('http://47.114.141.171:8990/song/admin_url.txt_1608818535.lyric', param)
export const apiMakeAuditionList= param => post(baseUrl+'/makeAuditionList', param)
export const apiQueryAuditionState= param => post(baseUrl+'/queryAuditionState', param)
export const apiCheckWork= param => post(baseUrl+'/checkWork', param)
export const apiCopyright= param => post(baseUrl+'/copyright', param)
export const apiCooperation= param => post(baseUrl+'/cooperation', param)
export const apiSongStyle= param => post(baseUrl+'/musicTag', param)
export const apiGetCustomer= param => post(baseUrl+'/getCustomer', param)
export const apiGetLyricContent= param => post(baseUrl+'/getLyricContent', param)
export const apiDeleteSong= param => post(baseUrl+'/deleteSong', param)
export const apiAddCooperative= param => post(baseUrl+'/addCooperative', param)
export const apiAdminAddCooperative= param => post(baseUrl+'/adminAddCooperative', param)
export const apiAdminAuditionList= param => post(baseUrl+'/AuditionList', param)
export const apiGetWorker= param => post(baseUrl+'/getWorker', param)
export const apiAllocatingTask= param => post(baseUrl+'/allocatingTask', param)
export const apiCommitArrangement= param => post(baseUrl+'/commitArrangement', param)
export const apiCommitRecord= param => post(baseUrl+'/commitRecord', param)
export const apiCommitMix= param => post(baseUrl+'/commitMix', param)

//新加上传
export const apiUploadNew= (param,key,fileName,songName) => post(baseUrlActive+`/uploadFile?key=${key}&fileName=${fileName}&songName=${songName}`, param)
export const apidownLoad= (param,type) => post(baseUrl+`/song/${type}`, param)

export const apiUploadProjectFile=param => post(baseUrl+'/uploadFile?key=admin&fileName=url.txt&type=mix', param)
export const apiUpdateLyric=param => post(baseUrl+'/updateLyric', param)
export const apiRemoveLockSong=param => post(baseUrl+'/removeLockSong', param)
export const apiGetSongInfo=param => post(baseUrl+'/getSongInfo', param)
export const apiUpdateSongInfo=param => post(baseUrl+'/updateSongInfo', param)
export const apiAddRemark=param => post(baseUrl+'/addRemark', param)
export const apiLengthLock=param => post(baseUrl+'/lengthLock', param)
export const apiGetSongwriter=param => post(baseUrl+'/getSongwriter', param)
