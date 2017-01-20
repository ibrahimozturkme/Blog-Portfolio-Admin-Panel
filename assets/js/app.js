$(document).ready(function(){

     $('[data-toggle=tooltip]').tooltip();

     if($('#article').length > 0){
          function articleHeight(){
               var articleHeight = $(window).outerHeight() - $('#menu').outerHeight() - $('#submenu').outerHeight() - 25;
               $('#article').css({
                    minHeight : articleHeight + 'px'
               });
          }

          articleHeight();

          $(window).resize(function(){
               articleHeight();
          });
     }

     $('#search-toggle').on('click', function(e){
          $('#menu.navbar form').toggleClass('in');
          e.preventDefault();
     });

     /* https://github.com/CreativeDream/php-uploader */
     if($('input[type=file]').length > 0){
          $('* input[type=file]').filer({
               changeInput    :'<div class="card p-3 bg-faded text-xs-center"><p><i class="material-icons display-4">add_a_photo</i></p><p class="h5 text-muted"><small>Yüklemek istediğiniz dosyaları buraya bırakın!</small></p></div>',
               showThumbs     : true,
               clipBoardPaste : true,
               uploadFile     : {
                    url            : "./php/ajax_upload_file.php",
                    data           : null,
                    type           : 'POST',
                    enctype        : 'multipart/form-data',
                    synchron       : true,
                    beforeSend     : function(){},
                    success        : function(data, itemEl, listEl, boxEl, newInputEl, inputEl, id){
                         toastr({
                              'type'    : 'success',
                              'message' : 'Resim başarıyla yüklendi!'
                         });
                    },
                    error          : function(el){
                         toastr({
                              'message' : 'Resim Yüklenemedi!'
                         });
                    }
               },
               dragDrop            : {
                    dragEnter      : null,
                    dragLeave      : null,
                    drop           : null,
                    dragContainer  : null,
               },
          });
     }

     if($('body#login').length > 0){
          var  minute    = 4,
               second    = 60;

          $('body#login form').on('submit', function(){
               var code = $(this).find('input[name=security_code]').val();
               $.post('login.php', {'code' : code}, function(){
                    if(response.success){
                         window.location.href = '/admin';
                    }else{
                         minute    = 4;
                         second    = 60;
                    }
                    toastr({
                         'message' : 'Yanlış güvenlik kodu!'
                    });
               });
          });

          setTimeout(function(){
               $('body#login kbd').addClass('in');
          }, 1000);

          var loginTimer = setInterval(function(){
               second--;
               if(second == 00){
                    minute--;
                    second = 59;
                    if(minute <= 0){
                         second = 0;
                         clearInterval(loginTimer);
                    }
               }
               second = (second < 10) ? '0' + second : second;

               if($('body#login kbd').text().split(':')[0] == '00' && $('body#login kbd').text().split(':')[1] == '01'){
                    $('body#login kbd').text('00:00');
               }else{
                    $('body#login kbd').text('0' + minute + ':' + second);
               }
          }, 1000);
     }

     $('#note-widget #delete').on('click', function(){
          if(confirm('Seçilen notları silmek istediğinize emin misiniz?')){
               $('#note-widget .list-group li input:checked').each(function(i, e){
                    $(e).parents('li').slideUp(1000, function(){
                         $(this).remove();
                    });
               });
          }
     });

     $('#note-widget #add').on('click', function(){
          var note = $('#note-widget #note').html();
          $('#note-widget .list-group').prepend('<li class="list-group-item"><label class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" data-id="3"><span class="custom-control-indicator"></span><span class="custom-control-description">' + note + '</span></label></li>');
          $('#note-widget #note').html('');
          noteChange();
     });
     noteChange();

     function noteChange(){
          $('#note-widget input').on('change', function(){
               var id = $(this).data('id');
               // Post data - id
               if($(this).is(':checked') == true){
                    $(this).next('span').next('span').attr('class', 'custom-control-description stroke');
               }else{
                    $(this).next('span').next('span').attr('class', 'custom-control-description');
               }
          });
     }

     /* Toastr */
     function toastr(response){
          var settings = [];
          type = (response.type) ? response.type : 'error';
          if(response.message != ""){
               settings['message'] = response.message;
          }
          if(response.img != ""){
               settings['imgURI'] = response.img;
          }
          if(type == 'info'){
               settings['title']       = 'Uyarı';
               settings['iconClass']   = 'flaticon-info';
               toastr8.warning(settings);
          }else if(type == 'success'){
               settings['title']       = 'Başarılı';
               settings['iconClass']   = 'flaticon-checked';
               toastr8.success(settings);
          }else{
               settings['title']        = 'Hata';
               settings['iconClass']    = 'flaticon-cancel';
               toastr8.error(settings);
          }
     }

     if($('#article').length > 0){
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline('article');
     }

});
