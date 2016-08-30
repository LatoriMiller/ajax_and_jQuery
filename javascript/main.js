$( document ).ready(function() {
  var contentDiv = $('.content')

  function renderArrayToUL(arg){
    var list = contentDiv.append('<ul></ul>').find('ul');
    for (var i = 0; i < arg.length; i++) {
      list.append('<li>' + arg[i] + '</li>')
    }
  }

  function clearAndRender(arg){
    contentDiv.empty();
    renderArrayToUL(arg);
  }

  $('#allPosts1').on('click', function() {
    $.get("http://jsonplaceholder.typicode.com/posts/", function(){
    })
      .done(function(post){
        var postItems = [];
        for (var i = 0; i < post.length; i++) {
        postItems.push(post[i].id + ". " + post[i].body);
        }
        clearAndRender(postItems);
        })
     });


  $('#tenPosts2').on('click', function(){
    $.ajax({
      type: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {id: 10}
    }).done(function(post){
      var postItems = [];
      for (var i = 0; i < post.length; i++) {
        postItems.push(post[i].id + " - " + post[i].body);
      }
      clearAndRender(postItems);
    })
  });
});
