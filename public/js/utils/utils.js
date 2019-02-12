export const trim = (str) => {
    if (!str) {
        return '';
    }
    return str.replace(/^\s+|\s+$/g, '');
}

export const ossResponseParse = (res, uploadImgURL) => {
    let xmlDOM = (new DOMParser()).parseFromString(res, 'text/xml');
    let PostResponseArr = xmlDOM.getElementsByTagName('PostResponse');
    if (PostResponseArr && PostResponseArr.length) {
        const PostResponse = PostResponseArr[0];
        const KeyArr = PostResponse.getElementsByTagName('Key');
        if (KeyArr && KeyArr[0]) {
            return uploadImgURL + '/' + KeyArr[0].innerHTML;
        }
    }
    return '';
}