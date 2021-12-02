// Obtém a data/hora atual e dia da semana
const data = new Date();
const dias = new Array('domingo','segunda','terça','quarta','quinta','sexta','sábado');
const dia     = data.getDate();           
const dia_sem = data.getDay();            
const mes     = data.getMonth();          
const ano2    = data.getYear();           
const ano4    = data.getFullYear();       
const hora    = data.getHours();          
const min     = data.getMinutes();        
const seg     = data.getSeconds();           
 
const str_data = dia + '/' + (mes+1) + '/' + ano4;
const str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
alert('Estamos no '+ dias[data.getDay()] + ' do dia ' + str_data + ' no horário de ' + str_hora);