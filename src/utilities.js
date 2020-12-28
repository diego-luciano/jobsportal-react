export const formatHtmlToString = (string) => {
    let regex = /(<([^>]+)>)/ig;
    return string.replace(regex, "");
}

export const trimWithDots = (string, beg, end) => {
    return string.slice(beg, end) + '...';
}