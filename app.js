const fetchUsers = async () => {
        try {
            let response = await axios({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'get',
                timeout: 8000
            })
            const users = response.data;

            for (let i = 0; i < document.getElementsByClassName("carousel-item").length; i++) {
                const id = users[i].id;
                document.getElementsByClassName("carousel-item")[i].getElementsByTagName("img")[0].src = "/assets/images/person_" + id + ".jpg";
                document.getElementsByClassName("carousel-item")[i].getElementsByTagName("p")[0].innerHTML = '"' + await fetchPost(id) + '"';
                document.getElementsByClassName("carousel-item")[i].getElementsByTagName("h4")[0].innerHTML = users[i].name;
                }
        }
        catch(err) {
            console.log(err);
        }
};

const fetchPost = async (id) => {
    try {
        let res = await axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get',
            timeout: 8000
        })
        const post = res.data[id].body;
        return post;
    }
    catch(err) {
        console.log(err);
    }
};

window.onload = fetchUsers();


document.querySelectorAll('.nav-link').forEach(function(el){
    el.addEventListener('click', function() {
        removeActive();
        this.classList.add('active')
    });
  });


  const removeActive = () => {
    document.querySelectorAll('.nav-link').forEach(function(el){
        el.classList.remove('active');
      });
  }
