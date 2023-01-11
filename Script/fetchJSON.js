const getPosts = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        });
}

const container = document.getElementById('json_list');
const template_posts = document.getElementById("posts");

const loadPosts = async () => {
    try {
        const data = (await getPosts()).slice(0, 11);
        container.innerHTML = '';
        for (const item of data) {
            const post = template_posts.content.cloneNode(true);
            let p_title = post.querySelector(".post_title");
            p_title.textContent = item.id;
            p_title.textContent += " " + item.title;
            let p_body = post.querySelector(".post_body");
            p_body.textContent = item.body;
            container.appendChild(post);
        }
    } catch (e) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let error_message = document.createElement('span');
        let nodeText = document.createTextNode("Что-то пошло не так :(");
        error_message.appendChild(nodeText);
        container.appendChild(error_message);
    }
}

loadPosts()