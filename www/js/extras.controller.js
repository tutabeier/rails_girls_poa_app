angular
.module('railsGirls')
.controller('ExtrasController', ExtrasController);

function ExtrasController($ionicTabsDelegate) {
  var vm = this;
  vm.items = [{
    icon: 'ion-social-youtube',
    title: 'Alda Rocha - Empoderei, e agora?',
    link: 'https://www.youtube.com/watch?v=nYoVKGvn0ms'
  },{
    icon: 'ion-social-facebook',
    title: 'Facebook',
    link: 'https://www.facebook.com/railsgirls'
  },{
    icon: 'ion-social-twitter',
    title: 'Twitter',
    link: 'https://twitter.com/railsgirls'
  },{
    icon: 'ion-document-text',
    title: 'Código de conduta',
    link: 'http://railsgirls.com/files/porto-alegre/codigo_conduta_2015.pdf'
  }];
  vm.open = openExternalLink;

  function openExternalLink(link) {
    console.log(link);
    window.open(link, '_system');
  };
}
