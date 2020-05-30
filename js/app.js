(function(){
    const API_KEY = "AIzaSyAwT2i1azfvYf4PQJ1_5he1bfsTLP_6oYU";
    const channelId = "UCKHhA5hN2UohhFDfNXB_cvQ"; //ID do canal;

    const renderVides = data =>{
        const container = document.getElementById("videos");
        console.log(data.items[2]);
        const content = data.items.map(item =>{

            return `
                <figure>
                    <img src="${item.snippet.thumbnails.medium.url}"/>
                </figure>
                <iframe width="800" height="400" src="https://www.youtube.com/embed/${item.id.videoId}"> </iframe>
            `;
        }).join(' ');
        container.innerHTML = content;
    };
    fetch(
        `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${channelId}&key=${API_KEY}&Results=10&type=video&order=date&fields=items(id(videoId)%2Csnippet(title%2Cdescription%2Cthumbnails(medium)))&prettyPrint=false`
    )
    .then(resp => resp.json()).then(resp => renderVides(resp));

})();