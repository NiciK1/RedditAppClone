





const fetchPostsData = (input) => {
    
    
    const responses = [];
    const arrayOfData = [];
    const postsPerResponses = 25;


    const fetchPosts = async (i) => {
        const response = await fetch(`https://www.reddit.com/r/${i}.json?limit=${postsPerResponses}`)
        const responseJSON = await response.json();
        responses.push(responseJSON)
        parseResults(responses)
    }

    fetchPosts(input.length <= 0? "pics" : input);

    const parseResults = (responses) => {
        const allPosts = [];

        responses.forEach(response => {
        allPosts.push(...response.data.children);
        console.log(allPosts)
        })

    

        whichData(allPosts);

    }

    const whichData = (allPosts) => {
        let length = allPosts.length;

        allPosts.forEach(({data: {author, downs, num_comments, title, ups }}) => {

        })
    }

}



export default fetchPostsData;