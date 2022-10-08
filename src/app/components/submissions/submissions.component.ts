import { Component, OnInit } from '@angular/core';

class LatLngModel {
  lat: number;
  lng: number;

  constructor(lat: number, lng:number){
    this.lat = lat;
    this.lng = lng;
  }
}

class ListModel{
  title: string;
  from: string;
  to: string;
  dueDate: string;
  status: string;

  constructor(title: string, from: string, to: string, dueDate: string, status: string){
    this.title = title;
    this.from = from;
    this.to = to;
    this.dueDate = dueDate;
    this.status = status;
  }
}

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  zoom =12;
  markers = []  as  any;
  listView: ListModel[] = [];
  center: google.maps.LatLngLiteral = {lat:28.644800, lng: 77.216721};
  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 4,
    streetViewControl: false,
    mapTypeControl: false,
    panControl: true, 
  };
  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    this.mapMarkers();

    this.listView = [
      new ListModel("Work Flow: Requires Location", "denisgordiyenya@gmail.com", "denisgordiyenya@gmail.com", "06 December", "uncomplete"),
      new ListModel("Work Flow: Requires Location", "denisgordiyenya@gmail.com", "denisgordiyenya@gmail.com", "06 December", "lowRisk"),
      new ListModel("Work Flow: Requires Location", "denisgordiyenya@gmail.com", "denisgordiyenya@gmail.com", "06 December", "uncomplete"),
      new ListModel("Work Flow: Requires Location", "denisgordiyenya@gmail.com", "denisgordiyenya@gmail.com", "06 December", "needReview")
    ]
  }
  markerPositions: Array<LatLngModel> = [
    new LatLngModel(28.667103, 77.229139),
    new LatLngModel(28.696332, 77.393094),
    new LatLngModel(28.641529, 77.120915),
    new LatLngModel(28.612674, 77.277262),
    new LatLngModel(28.584670, 77.352010)
  ];

  mapMarkers(){
    this.markerPositions.map(elem=>{
      this.markers.push({
        position: {
          lat:elem.lat,
          lng: elem.lng,
        },
        
        options: { 
          icon: '../assets/mapicon.png', 
          animation: google.maps.Animation.DROP },
      });
    });
  }
  }
