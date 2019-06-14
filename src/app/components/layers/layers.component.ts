import { Component,  OnInit, } from '@angular/core';
import { FormlyFieldConfig, } from '@ngx-formly/core';
import { DragDropService } from '../../services/drag-drop.service'
import { LayersService } from '../../services/layers.service'

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayersComponent implements OnInit {

  fields: FormlyFieldConfig[] = []
  connectedLists = []

  constructor(
    private _dragDropService: DragDropService,
    private _layers: LayersService 
  ) { 
    _dragDropService.field$.subscribe(item => {
      this.fields = item
    })

    this._layers.addIds('dragroot')
    this.connectedLists = this._layers.getIds()
  }

  ngOnInit() {
    
  }
}




