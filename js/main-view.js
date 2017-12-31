$(document).ready(function () {
  alert('Por favor ingrese alguna de estas opciones \n Chifa \n Comida criolla \n Ceviche \n Pollo \n Pasteles');
  $('.kind-food').on('input', function () {
    if ($(this).val() == 'ceviche') {
      $('.chifa').hide();
      $('.criolla').hide();
      $('.polleria').hide();
      $('.pasteleria').hide();
    } else if ($(this).val() == 'chifa') {
      $('.ceviche').hide();
      $('.criolla').hide();
      $('.polleria').hide();
      $('.pasteleria').hide();
    } else if ($(this).val() == 'comida criolla') {
      $('.ceviche').hide();
      $('.chifa').hide();
      $('.polleria').hide();
      $('.pasteleria').hide();
    } else if ($(this).val() == 'pollo') {
      $('.ceviche').hide();
      $('.criolla').hide();
      $('.chifa').hide();
      $('.pasteleria').hide();
    } else if ($(this).val() == 'pasteles') {
      $('.ceviche').hide();
      $('.criolla').hide();
      $('.polleria').hide();
      $('.chifa').hide();
    } /*else if ($(this).val() !== 'pasteles' || $(this).val() !== 'pollo' || $(this).val() !== 'comida criolla' || $(this).val() !== 'chifa' || $(this).val() !== 'ceviche') {
            alert('Por favor ingrese alguna de estas opciones: ')
        }*/
  })
  /*$('.cev').on('click',function (){
      $("#myModal").show();
  });*/


});
