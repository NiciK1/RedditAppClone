

const getSubreddits = async () => {
    const response = await fetch('https://www.reddit.com/subbreddits.json');
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data)
}

export default getSubreddits;