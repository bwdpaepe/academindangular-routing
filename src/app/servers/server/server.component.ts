import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    //const id = parseInt(this.activeRoute.snapshot.params['id']);
    //this.server = this.serversService.getServer(id);
    //this.server.name = this.activeRoute.snapshot.params['name'];
    //this.activeRoute.params.subscribe(
      //(params: Params) => {
        //id = params['id'];
        //this.server = this.serversService.getServer(parseInt(params['id']));
        //this.server.name = params['name'];
      //}
    //);
  }

    onEdit() {
      this.router.navigate(['edit'], {relativeTo: this.activeRoute, queryParamsHandling: 'preserve'});
    }
    
  

}
