import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../../../services/modal.service' 

  
@Component({
    selector: 'app-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class layoutHeaderComponent implements OnInit {
    constructor(
        private _modalService: ModalService,
    ) { 

    }

    ngOnInit () {

    }

    // 打开样式编辑器
    openStyleModal ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._modalService.open('style-editor', $event)
    }

    // class编辑器
    openClassModel ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._modalService.open('class-editor', $event)
    }

    // code编辑器
    openCodeModel ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._modalService.open('code-editor', $event)
    }

    // 快捷键弹窗
    openKeysModel ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._modalService.open('keys', $event)
    }
}
