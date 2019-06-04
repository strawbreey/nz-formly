import { Component,  OnInit, } from '@angular/core';

import { FormlyFieldConfig, } from '@ngx-formly/core';
import { DragAttributeService } from '../../services/drag-attribute.service'
import { DragDropService } from '../../services/drag-drop.service'
import { ModalService } from '../../services/modal.service' 
import { LeftPaneService } from '../../services/left-pane.service'
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
    private attributeService: DragAttributeService,
    private dragDropService: DragDropService,
    private _modalService: ModalService,
    private _leftPaneService: LeftPaneService,
    private _layers: LayersService 
  ) { 
    dragDropService.field$.subscribe(item => {
      console.log('item')
      this.fields = item
    })

    this._layers.addIds('dragroot')
    this.connectedLists = this._layers.getIds()
  }

  ngOnInit() {
    
  }
}




