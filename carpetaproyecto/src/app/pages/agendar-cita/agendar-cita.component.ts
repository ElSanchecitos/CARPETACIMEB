// import { Component, OnInit } from '@angular/core';
// import  dayGridPlugin from '@fullcalendar/daygrid';
// import  timeGridPlugin from '@fullcalendar/timegrid';
// import  interactionPlugin from '@fullcalendar/interaction';
// import  esLocale from '@fullcalendar/core';


// @Component({
//   selector: 'app-agendar-cita',
//   templateUrl: './agendar-cita.component.html',
//   styleUrls: ['./agendar-cita.component.css']
// })
// export class AgendarCitaComponent implements OnInit {
//   public events: any[];
//   public options: any;

//   constructor() { }

//   ngOnInit(): void {
//     this.options= {
//       plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
//       defaulDate: new Date(),
//       locale: esLocale,
//       header: {
//         left: 'prev,next',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay'
//       },
//       editable: false
//     }

//     this.events= [
//       {
//         title: "Evento 1",
//         start: new Date(),
//         description: "Evento 1"
//       },
//       {
//         title: "Evento 2",
//         start: new Date(new Date().getTime() + 86400000),
//         description: "Evento 3"
//       },
//       {
//         title: "Evento 3",
//         start: new Date(new Date().getTime() + (86400000 * 2) ),
//         end:  new Date(new Date().getTime() + (86400000 * 3) ),
//         description: "Evento 3"
//       },
//     ]
//   };
//   handleDateClick(arg) {
//     alert('date click! ' + arg.dateStr)
//   }

//   }


