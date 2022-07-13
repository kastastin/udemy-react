async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    });

    return await result.json();
};

export {getResource, postData};