var base_url = 'https://jsonplaceholder.typicode.com/posts/';
const submitInput = () => {
  const getData = document.getElementById('testes').value;

  var id = getData;

  const linkComment = () => {
    axios.get(base_url + id + '/comments')
      .then(res => {
        const filterComment = res.data.filter(value => {
          return value.postId == id;
        });
        const count = res.data.length;
        console.log("Jumlah comment dengan postId " + id + " adalah " + count)
        for (i = 0; i < count; i++) {
          console.log("Nama : " + filterComment[i].name);
          console.log("Comment : " + filterComment[i].body);
        }
        console.log("=======================================================================");
      })
  }

  linkComment();

  document.getElementById('testes').value = "";
}

const linkData = () => {
  axios.get(base_url)
    .then(res => {
      const filterData = res.data.filter(value => {
        return value.userId == 8;
      });
      console.log(filterData);
    })
}

linkData();