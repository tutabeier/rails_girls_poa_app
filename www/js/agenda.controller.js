angular
.module('railsGirls')
.controller('AgendaController', AgendaController);

function AgendaController($ionicTabsDelegate, $http) {
  var vm = this;
  var events = $http.get('http://localhost:3000/events')
    .then(function(response) {
      vm.dias = response.data;
    }, function(err){
      console.log(err);
    });
  vm.dias = [];
  vm.dias_bk = [{
    titulo: '21/10 - Sexta-feira',
    eventos: [{
      icone: 'ion-android-restaurant',
      horario: '18h30',
      titulo: 'Lanche',
      local: 'Global - Auditório'
    },{
      icone: 'ion-mic-b',
      horario: '19h30',
      titulo: 'Abertura: Mas o que é Rails Girls? O que vamos fazer aqui?',
      local: 'Global - Auditório'
    },{
      icone: 'ion-ios-people',
      horario: '20h00',
      titulo: 'Roles de TI (BA, QA, UX, PM e DEV)',
      local: 'Global - Auditório'
    },{
      icone: 'ion-happy',
      horario: '21h00',
      titulo: 'Ice Breaker - Grupos de Interesse',
      local: 'Global - Auditório'
    },{
      icone: 'ion-code-working',
      horario: '21h20',
      titulo: 'Instalação do Ambiente',
      local: 'Global - Auditório'
    },{
      icone: 'ion-happy',
      horario: '22h30',
      titulo: 'Beijo, abraço e te vejo amanhã!',
      local: 'Global - Auditório'
    }],
  },{
    titulo: '22/10 - Sábado',
    eventos: [{
      icone: 'ion-coffee',
      horario: '08h30',
      titulo: 'Café da Manhã',
      local: 'ThoughtWorks'
    },{
      icone: 'ion-ios-people',
      horario: '09h30',
      titulo: 'Separação dos times',
      local: 'ThoughtWorks'
    },{
      icone: 'ion-code',
      horario: '10h00',
      titulo: 'Workshop de HTML e CSS',
      local: 'ThoughtWorks/Globo/DBServer'
    },{
      icone: 'ion-code',
      horario: '11h30',
      titulo: 'Workshop de Rails',
      local: 'ThoughtWorks/Globo/DBServer'
    },{
      icone: 'ion-android-restaurant',
      horario: '12h20',
      titulo: 'Almoço',
      local: 'ThoughtWorks'
    },{
      icone: 'ion-code-working',
      horario: '14h00',
      titulo: 'Mão na massa!',
      local: ' ThoughtWorks/Globo/DBServer'
    },{
      icone: 'ion-coffee',
      horario: '16h30',
      titulo: 'Café da tarde',
      local: 'ThoughtWorks'
    },{
      icone: 'ion-code-working',
      horario: '17h00',
      titulo: 'Mão na massa de novo!',
      local: ' ThoughtWorks/Globo/DBServer'
    },{
      icone: 'ion-ios-eye',
      horario: '18h30',
      titulo: 'Retrospectiva',
      local: ' ThoughtWorks/Globo/DBServer'
    },{
      icone: 'ion-chatbubbles',
      horario: '19h30',
      titulo: 'Fishbowl: Mulheres na TI',
      local: 'Globo'
    },{
      icone: 'ion-heart',
      horario: '20h30',
      titulo: 'Fechamento',
      local: 'Globo'
    }]
  }];
}
