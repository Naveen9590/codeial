
const APIROOT='http://codeial.com:8000/api/v2'
export const APIURL={
    login:()=>`${APIROOT}/users/login`,
    signup:()=>`${APIROOT}/users/signup`,
    editProfile:()=>`${APIROOT}/users/edit`,
    fetchPost:(page=1,limit=5)=>`${APIROOT}/posts?page=${page}&limit=${limit}`,
    fetchuserprofile:(userId)=>`${APIROOT}/users/${userId}`
}