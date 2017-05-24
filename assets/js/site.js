$("input[type=text]").keyup(function(){
    var texto = $(this).val();

  $("#dribbble li.box").css("display", "inline-block");
  $("#dribbble li.box").each(function(){
      if($(this).text().indexOf(texto) < 0){
         $(this).css("display", "none");
      }
  });

}); 

atualizando = function() {

  usuario_dribbble = 'UI8';
  link = 'https://api.dribbble.com/v1/users/'+usuario_dribbble+'/shots?access_token=bfdbc715f2852ed5155347f3390424aa40e9b14ca30ef7bef8edcfb1e697d80c&callback=?';


  $.getJSON(link, function(resp) {
    if (resp.data.length > 0) {             
      $.each(resp.data.reverse(), function(i, val) {
        titulo = val.title;
        console.log(i);
        $('#dribbble').prepend('<li class="box"><img src="'+val.images.teaser+'" /><h2><span>'+val.likes_count+' <a href="" class="curtidas"><i class="fa fa-heart"></i></a></span>'+val.title+'</h2><ul class="menu-tamanho"><li><a href="javascript:void(0);" data-tamanho="hidpi" data-imagem="'+val.images.hidpi+'">HIDPI - 800x600</a></li><li><a href="javascript:void(0);" data-tamanho="normal" data-imagem="'+val.images.normal+'">Normal - 400x300</a></li><li><a href="javascript:void(0);" data-tamanho="teaser" data-imagem="'+val.images.teaser+'">Teaser - 200x150</a></li></ul> <p><a href="'+val.html_url+'" target="_black">Veja Mais [+]</a></p></li>');
      });

     $("ul.menu-tamanho a").click(function(e){
       e.preventDefault();
       e.stopPropagation();

       tamanho = $(this).data("tamanho");
       img_tamanho = $(this).data("imagem")
       
         if(tamanho == "hidpi"){
          $(this).parent().parent().parent().find("img").attr("src", img_tamanho);
         }
         else if(tamanho == "normal"){
          $(this).parent().parent().parent().find("img").attr("src", img_tamanho);
         }
         else if(tamanho == "teaser"){
          $(this).parent().parent().parent().find("img").attr("src", img_tamanho);
         }
       
     });

    }
    else {
      $('#dribbble').append('<li>Nenhuma imagem.</li>');
    }
  });
  


};


atualizando();